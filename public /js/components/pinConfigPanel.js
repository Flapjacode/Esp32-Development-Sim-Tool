import { esp32Pins } from '../config/pinDefinitions.js';

const pinConfigurations = {};

function showPinConfiguration(pinNumber) {
    const pinData = esp32Pins[pinNumber];
    const configPanel = document.getElementById('pinConfig');

    let configHTML = `
        <div class="config-section">
            <h4>Pin ${pinData.name} Configuration</h4>
            <div class="input-group">
                <label>Pin Mode:</label>
                <select id="pinMode_${pinNumber}" onchange="window.updatePinConfig(${pinNumber})">
                    <option value="">Select Mode...</option>
    `;

    pinData.capabilities.forEach(cap => {
        switch (cap) {
            case 'Digital I/O':
                configHTML += '<option value="INPUT">Digital Input</option>';
                configHTML += '<option value="OUTPUT">Digital Output</option>';
                configHTML += '<option value="INPUT_PULLUP">Input with Pullup</option>';
                break;
            case 'PWM':
                configHTML += '<option value="PWM">PWM Output</option>';
                break;
            case 'ADC1':
            case 'ADC2':
                configHTML += '<option value="ANALOG">Analog Input</option>';
                break;
            case 'UART TX':
                configHTML += '<option value="UART_TX">UART Transmit</option>';
                break;
            case 'UART RX':
                configHTML += '<option value="UART_RX">UART Receive</option>';
                break;
            case 'I2C SDA':
                configHTML += '<option value="I2C_SDA">I2C Data</option>';
                break;
            case 'I2C SCL':
                configHTML += '<option value="I2C_SCL">I2C Clock</option>';
                break;
            case 'SPI SCK':
                configHTML += '<option value="SPI_SCK">SPI Clock</option>';
                break;
            case 'SPI MISO':
                configHTML += '<option value="SPI_MISO">SPI MISO</option>';
                break;
            case 'SPI MOSI':
                configHTML += '<option value="SPI_MOSI">SPI MOSI</option>';
                break;
        }
    });

    configHTML += `
                </select>
            </div>
            <div class="input-group">
                <label>Variable Name:</label>
                <input type="text" id="varName_${pinNumber}" placeholder="e.g., ledPin" onchange="window.updatePinConfig(${pinNumber})">
            </div>
            <div class="input-group">
                <label>Description:</label>
                <input type="text" id="description_${pinNumber}" placeholder="e.g., onboard LED" onchange="window.updatePinConfig(${pinNumber})">
            </div>
        </div>
    `;

    configPanel.innerHTML = configHTML;
}

function updatePinConfig(pinNumber) {
    const pinMode = document.getElementById(`pinMode_${pinNumber}`).value;
    const varName = document.getElementById(`varName_${pinNumber}`).value;
    const description = document.getElementById(`description_${pinNumber}`).value;

    pinConfigurations[pinNumber] = {
        pin: esp32Pins[pinNumber],
        mode: pinMode,
        varName,
        description
    };
}

function getPinConfigurations() {
    return pinConfigurations;
}

export { showPinConfiguration, updatePinConfig, getPinConfigurations };

// Expose updatePinConfig globally for use in inline `onchange`
window.updatePinConfig = updatePinConfig;
