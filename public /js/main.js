import { initializePinDiagram } from './components/pinDiagram.js';
import { setupCodeEditor, generateTemplate, clearCode } from './components/codeEditor.js';
import { validateCode } from './core/validation.js';

window.addEventListener('DOMContentLoaded', () => {
    initializePinDiagram();
    setupCodeEditor();

    document.getElementById('validateBtn').addEventListener('click', validateCode);
    document.getElementById('templateBtn').addEventListener('click', generateTemplate);
    document.getElementById('clearBtn').addEventListener('click', clearCode);
});
