"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Archivo: main.ts (con contador y final feliz CyberCute)
const obsidian_1 = require("obsidian");
class NeuronotesPlugin extends obsidian_1.Plugin {
    async onload() {
        console.log('🧠 Neuronotes ha sido activado');
        this.addCommand({
            id: 'neuronotes-scan-note',
            name: 'Revisar flashcards (Neuronotes)',
            callback: () => this.scanCurrentNote(),
        });
    }
    onunload() {
        console.log('🧠 Neuronotes ha sido desactivado');
    }
    async scanCurrentNote() {
        const file = this.app.workspace.getActiveFile();
        if (!file) {
            new obsidian_1.Notice('No hay ninguna nota abierta');
            return;
        }
        const content = await this.app.vault.read(file);
        const flashcards = this.extractFlashcards(content);
        if (flashcards.length === 0) {
            new obsidian_1.Notice('No se encontraron flashcards.');
            return;
        }
        new FlashcardModal(this.app, flashcards).open();
    }
    extractFlashcards(content) {
        const cards = [];
        const rawCards = content.split('%%');
        for (let raw of rawCards) {
            if (raw.includes('card')) {
                const q = raw.match(/Q:(.*)/)?.[1]?.trim();
                const a = raw.match(/A:(.*)/)?.[1]?.trim();
                if (q && a)
                    cards.push({ q, a });
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
        this.flashcards = flashcards;
    }
    onOpen() {
        this.showCard();
    }
    showCard() {
        const { contentEl } = this;
        contentEl.empty();
        if (this.current >= this.flashcards.length) {
            const done = contentEl.createDiv({ cls: 'card-modal' });
            done.createEl('div', { text: '🎉', cls: 'celebration' });
            done.createEl('div', { text: '¡Has terminado el repaso!', cls: 'done-message' });
            setTimeout(() => this.close(), 3500);
            return;
        }
        const card = this.flashcards[this.current];
        const container = contentEl.createDiv({ cls: 'card-modal' });
        const counter = container.createEl('div', {
            text: `Tarjeta ${this.current + 1} de ${this.flashcards.length}`,
            cls: 'counter'
        });
        const question = container.createEl('div', {
            text: card.q,
            cls: 'question'
        });
        const answer = container.createEl('div', {
            text: card.a,
            cls: 'answer'
        });
        answer.style.display = 'none';
        const showBtn = container.createEl('button', {
            text: 'Mostrar respuesta'
        });
        showBtn.onclick = () => {
            answer.style.display = 'block';
            showBtn.style.display = 'none';
        };
        const nextBtn = container.createEl('button', {
            text: 'Siguiente'
        });
        nextBtn.onclick = () => {
            this.current++;
            this.showCard();
        };
    }
}
