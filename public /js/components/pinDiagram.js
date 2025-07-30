import { esp32Pins } from '../config/pinDefinitions.js';
import { showPinConfiguration } from './pinConfigPanel.js';


let selectedPin = null;

function createPinDiagram() {
    const diagram = document.getElementById('pinDiagram');
    diagram.innerHTML = '';

    Object.entries(esp32Pins).forEach(([pinNumber, pinData]) => {
        const pinButton = document.createElement('div');
        pinButton.className = 'pin-button';
        pinButton.onclick = () => selectPin(pinNumber);

        pinButton.innerHTML = `
            <div class="pin-name">${pinData.name}</div>
            <div class="pin-type">${pinData.type}</div>
        `;

        diagram.appendChild(pinButton);
    });
}

function selectPin(pinNumber) {
    document.querySelectorAll('.pin-button').forEach(btn => btn.classList.remove('selected'));
    event.target.closest('.pin-button').classList.add('selected');
    selectedPin = pinNumber;
    showPinConfiguration(pinNumber);
}

export { createPinDiagram, selectedPin };
