import { esp32Pins } from '../config/pinDefinitions.js';
import { showPinConfiguration } from './pinConfigPanel.js';

function initializePinDiagram() {
    const diagram = document.getElementById('pinDiagram');
    diagram.innerHTML = '';

    Object.entries(esp32Pins).forEach(([pinNumber, pinData]) => {
        const pinButton = document.createElement('div');
        pinButton.className = 'pin-button';
        pinButton.onclick = () => {
            document.querySelectorAll('.pin-button').forEach(btn => btn.classList.remove('selected'));
            pinButton.classList.add('selected');
            showPinConfiguration(pinNumber);
        };

        pinButton.innerHTML = `
            <div class="pin-name">${pinData.name}</div>
            <div class="pin-type">${pinData.type}</div>
        `;
        diagram.appendChild(pinButton);
    });
}

export { initializePinDiagram };

export { createPinDiagram, selectedPin };
