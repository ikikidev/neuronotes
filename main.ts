// Archivo: main.ts (con contador y final feliz CyberCute)
import { Plugin, Modal, Notice, TFile, App } from "obsidian";
import { loadConfettiPreset } from "tsparticles-preset-confetti";
import { tsParticles } from "tsparticles-engine";
import "./styles.css";

interface Flashcard {
  q: string;
  a: string;
}

export default class NeuronotesPlugin extends Plugin {
  async onload() {
    console.log("🧠 Neuronotes ha sido activado");
    await loadConfettiPreset(tsParticles);
    this.addCommand({
      id: "scan-note",
      name: "Revisar flashcards",
      callback: () => this.scanCurrentNote(),
    });
  }

  onunload() {
    console.log("🧠 Neuronotes ha sido desactivado");
  }

  async scanCurrentNote() {
    const file = this.app.workspace.getActiveFile();
    if (!file) {
      new Notice("No hay ninguna nota abierta");
      return;
    }

    const content = await this.app.vault.read(file);
    const flashcards = this.extractFlashcards(content);

    if (flashcards.length === 0) {
      new Notice("No se encontraron flashcards.");
      return;
    }

    new FlashcardModal(this.app, flashcards).open();
  }

  extractFlashcards(content: string): Flashcard[] {
    const cards: Flashcard[] = [];
    const rawCards = content.split("%%");
    for (let raw of rawCards) {
      if (raw.includes("card")) {
        const qMatch = raw.match(/Q:([\s\S]*?)A:/);
        const aMatch = raw.match(/A:([\s\S]*)/);

        const qRaw = qMatch?.[1]?.trim();
        const a = aMatch?.[1]?.trim();

        if (qRaw && a) {
          // Determinar si es tipo test (varias líneas con A., B., etc..
          const isMultipleChoice =
            /\bA\.\b|\bB\.\b|\bC\.\b|\bD\.\b/.test(qRaw) && qRaw.includes("\n");

          let qFormatted = qRaw;

          if (isMultipleChoice) {
            // Dividir líneas de la pregunta y opciones
            const lines = qRaw.split(/\r?\n/);
            const questionLine = lines[0];
            const options = lines
              .slice(1)
              .map((line) => line.trim())
              .filter(Boolean);

            // Recomponer con formato tipo test visual
            qFormatted = questionLine + "\n" + options.join("\n");
          }

          cards.push({ q: qFormatted, a });
        }
      }
    }
    return cards;
  }

  launchConfetti(container: HTMLElement) {
    // Limpiar confetti anterior si existe
    const existing = document.getElementById("confetti-container");
    if (existing) {
      tsParticles.dom().forEach((instance) => instance.destroy());
      existing.remove();
    }

    const confettiEl = document.createElement("div");
    confettiEl.id = "confetti-container";
    confettiEl.style.position = "fixed";
    confettiEl.style.top = "0";
    confettiEl.style.left = "0";
    confettiEl.style.width = "100%";
    confettiEl.style.height = "100%";
    confettiEl.style.pointerEvents = "none";
    confettiEl.style.zIndex = "9999";
    container.appendChild(confettiEl);

    // Paletas ciber cute aleatorias
    const palettes = [
      ["#FFD1DC", "#A0E7E5", "#B4F8C8", "#FFB5E8", "#FBE7C6"], // pastel
      ["#FF9CEE", "#B28DFF", "#AFF8DB", "#FFFFD1", "#FFA8A8"], // cybercute neón pastel
      ["#F6A6FF", "#A6E1FA", "#FCE38A", "#EAFFD0", "#C7CEEA"], // arcoíris suave
    ];
    const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];

    // Variar parámetros visuales
    const angles = [90, 120, 270, 360];
    const gravities = [1, 2, 0.8];
    const spread = [60, 90, 120, 180];
    const velocity = [20, 30, 40];

    tsParticles.load("confetti-container", {
      preset: "confetti",
      background: { color: "transparent" },
      particles: {
        color: { value: randomPalette },
      },
      confetti: {
        angle: angles[Math.floor(Math.random() * angles.length)],
        gravity: gravities[Math.floor(Math.random() * gravities.length)],
        spread: spread[Math.floor(Math.random() * spread.length)],
        startVelocity: velocity[Math.floor(Math.random() * velocity.length)],
      },
    });
  }
}

class FlashcardModal extends Modal {
  private flashcards: Flashcard[];
  private current = 0;

  correctCount: number = 0;
  incorrectCount: number = 0;

  private statsEl!: HTMLDivElement;

  constructor(app: App, flashcards: Flashcard[]) {
    super(app);
    this.flashcards = flashcards;
  }

  getNeuronotesPlugin(app: App): NeuronotesPlugin | null {
    return (app as any).plugins.getPlugin("neuronotes") as NeuronotesPlugin;
  }

  onOpen() {
    this.modalEl.classList.add("wide-modal");
    this.showCard();
  }

  updateStats() {
    const total = this.correctCount + this.incorrectCount;
    const pct = total > 0 ? Math.round((this.correctCount / total) * 100) : 0;
    this.statsEl.setText(
      `✅ ${this.correctCount} ❌ ${this.incorrectCount}  (${pct}%)`
    );
  }

  showCard() {
    const { contentEl } = this;
    contentEl.empty();

    // Si se han repasado todas las tarjetas, mostrar mensaje final
    if (this.current >= this.flashcards.length) {
      const done = contentEl.createDiv({ cls: "card-modal" });
      done.createEl("div", { text: "🎉", cls: "celebration" });
      const plugin = this.getNeuronotesPlugin(this.app);
      if (plugin?.launchConfetti) {
        plugin.launchConfetti(done);
      }

      done.createEl("div", {
        text: "¡Has terminado el repaso!",
        cls: "done-message",
      });
      const total = this.correctCount + this.incorrectCount;
      const pct = total > 0 ? Math.round((this.correctCount / total) * 100) : 0;
      done.createEl("div", {
        text: `Resultado final: ✅ ${this.correctCount} ❌ ${this.incorrectCount} (${pct}%)`,
        cls: "stats",
      });

      const celebrateBtn = done.createEl("button", {
        text: "🎊 ¡Celebrar otra vez!",
        cls: "celebrate-again",
      });

      celebrateBtn.onclick = () => {
        const plugin = this.getNeuronotesPlugin(this.app);
        if (plugin?.launchConfetti) {
          plugin.launchConfetti(done);
        }
      };

      setTimeout(() => this.close(), 5000);
      return;
    }

    // Obtener la tarjeta actual
    const card = this.flashcards[this.current];

    // Detectar si es tipo test (A., B., C., D.) para aplicar estilo

    const isMultipleChoice = /A\..*?B\..*?C\..*?D\./s.test(card.q);

    const cardTypeClass = isMultipleChoice
      ? "card-modal test-card"
      : "card-modal";
    const container = contentEl.createDiv({ cls: cardTypeClass });

    // Mostrar el contador de progreso
    container.createEl("div", {
      text: `Tarjeta ${this.current + 1} de ${this.flashcards.length}`,
      cls: "counter",
    });

    this.statsEl = container.createDiv({ cls: "stats" });
    this.updateStats(); // nueva función que vas a añadir ahora

    // Crear contenedor de la pregunta
    const question = container.createDiv({ cls: "question" });

    // Procesar pregunta y opciones si es tipo test
    if (isMultipleChoice) {
      let lines: string[] = [];

      if (card.q.includes("\n")) {
        lines = card.q.split("\n");
      } else {
        const matches = card.q.match(/[^A-D]*|[A-D]\..*?(?=\s[A-D]\.|$)/gs);
        if (matches) lines = matches.map((line) => line.trim());
      }

      // Si no se ha podido dividir correctamente, usar el formato plano
      if (!lines || lines.length < 2) {
        question.textContent = card.q;
        return;
      }

      // Crear pregunta principal
      const questionText = document.createElement("div");
      questionText.textContent = lines[0];
      questionText.classList.add("question-title");
      question.appendChild(questionText);

      // Crear las opciones
      for (let i = 1; i < lines.length; i++) {
        const option = document.createElement("div");
        option.textContent = lines[i];
        option.classList.add("option-line");
        question.appendChild(option);
      }
    } else {
      const questionText = document.createElement("div");
      questionText.textContent = card.q;
      questionText.classList.add("question-title");
      question.appendChild(questionText);
    }

    // Crear contenedor de la respuesta, inicialmente oculta
    const answer = container.createEl("div", {
      text: card.a,
      cls: "answer",
    });
    answer.style.display = "none";

    // Crear botones
    const showBtn = container.createEl("button", { text: "Mostrar respuesta" });
    const nextBtn = container.createEl("button", { text: "Siguiente" });
    const correctBtn = container.createEl("button", { text: "✅ Acierto" });
    const incorrectBtn = container.createEl("button", { text: "❌ Fallo" });

    const controls = container.createDiv({ cls: "controls" });
    controls.append(showBtn, nextBtn, correctBtn, incorrectBtn);

    showBtn.classList.add("show-answer");
    nextBtn.classList.add("next");
    correctBtn.classList.add("correct");
    incorrectBtn.classList.add("incorrect");

    showBtn.onclick = () => {
      answer.style.display = "block";
      showBtn.style.display = "none";
    };

    nextBtn.onclick = () => {
      this.current++;
      this.updateStats();
      this.showCard();
    };

    correctBtn.onclick = () => {
      this.correctCount++;
      this.updateStats();
      nextBtn.click();
    };

    incorrectBtn.onclick = () => {
      this.incorrectCount++;
      this.updateStats();
      nextBtn.click();
    };
  }

  onClose() {
    tsParticles.dom().forEach((instance) => instance.destroy());
    const confetti = document.getElementById("confetti-container");
    if (confetti) confetti.remove();
  }
}
