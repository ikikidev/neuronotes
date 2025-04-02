"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Archivo: main.ts (con contador y final feliz CyberCute)
const obsidian_1 = require("obsidian");
class NeuronotesPlugin extends obsidian_1.Plugin {
    async onload() {
        console.log("🧠 Neuronotes ha sido activado");
        this.addCommand({
            id: "neuronotes-scan-note",
            name: "Revisar flashcards (Neuronotes)",
            callback: () => this.scanCurrentNote(),
        });
    }
    onunload() {
        console.log("🧠 Neuronotes ha sido desactivado");
    }
    async scanCurrentNote() {
        const file = this.app.workspace.getActiveFile();
        if (!file) {
            new obsidian_1.Notice("No hay ninguna nota abierta");
            return;
        }
        const content = await this.app.vault.read(file);
        const flashcards = this.extractFlashcards(content);
        if (flashcards.length === 0) {
            new obsidian_1.Notice("No se encontraron flashcards.");
            return;
        }
        new FlashcardModal(this.app, flashcards).open();
    }
    extractFlashcards(content) {
        const cards = [];
        const rawCards = content.split("%%");
        for (let raw of rawCards) {
            if (raw.includes("card")) {
                const qMatch = raw.match(/Q:([\s\S]*?)A:/);
                const aMatch = raw.match(/A:([\s\S]*)/);
                const qRaw = qMatch?.[1]?.trim();
                const a = aMatch?.[1]?.trim();
                if (qRaw && a) {
                    // Determinar si es tipo test (varias líneas con A., B., etc..
                    const isMultipleChoice = /\bA\.\b|\bB\.\b|\bC\.\b|\bD\.\b/.test(qRaw) && qRaw.includes("\n");
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
}
exports.default = NeuronotesPlugin;
class FlashcardModal extends obsidian_1.Modal {
    constructor(app, flashcards) {
        super(app);
        this.current = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.flashcards = flashcards;
    }
    onOpen() {
        this.modalEl.classList.add("wide-modal");
        this.showCard();
    }
    updateStats() {
        const total = this.correctCount + this.incorrectCount;
        const pct = total > 0 ? Math.round((this.correctCount / total) * 100) : 0;
        this.statsEl.setText(`✅ ${this.correctCount} ❌ ${this.incorrectCount}  (${pct}%)`);
    }
    showCard() {
        const { contentEl } = this;
        contentEl.empty();
        // Si se han repasado todas las tarjetas, mostrar mensaje final
        if (this.current >= this.flashcards.length) {
            const done = contentEl.createDiv({ cls: "card-modal" });
            done.createEl("div", { text: "🎉", cls: "celebration" });
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
            setTimeout(() => this.close(), 3500);
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
            let lines = [];
            if (card.q.includes("\n")) {
                lines = card.q.split("\n");
            }
            else {
                const matches = card.q.match(/[^A-D]*|[A-D]\..*?(?=\s[A-D]\.|$)/gs);
                if (matches)
                    lines = matches.map((line) => line.trim());
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
        }
        else {
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
}
