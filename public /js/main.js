import { initializePinDiagram } from './components/pinDiagram.js';
import { setupCodeEditor, attachEditorButtons } from './components/codeEditor.js';
import { validateCode } from './core/validation.js';
import { generateTemplate, clearCode } from './components/codeEditor.js'; // if these are split

// Initialize everything after DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    initializePinDiagram();
    setupCodeEditor();
    attachEditorButtons();

    // Optional: bind buttons manually
    document.getElementById('validateBtn').addEventListener('click', validateCode);
    document.getElementById('templateBtn').addEventListener('click', generateTemplate);
    document.getElementById('clearBtn').addEventListener('click', clearCode);
});
