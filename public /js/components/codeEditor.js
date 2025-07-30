import { pinConfigurations } from './pinConfigPanel.js';

function generateTemplate() {
    let templateCode = '// Auto-generated ESP32 code template\n\n';

    Object.entries(pinConfigurations).forEach(([pinNumber, config]) => {
        if (config.varName && config.mode) {
            templateCode += `const int ${config.varName} = ${pinNumber}; // ${config.description || config.pin.name}\n`;
        }
    });

    templateCode += '\nvoid setup() {\n  Serial.begin(115200);\n\n';
    Object.entries(pinConfigurations).forEach(([_, config]) => {
        if (config.varName && config.mode) {
            switch(config.mode) {
                case 'INPUT':
                case 'OUTPUT':
                case 'INPUT_PULLUP':
                    templateCode += `  pinMode(${config.varName}, ${config.mode});\n`;
                    break;
                case 'PWM':
                    templateCode += `  // Configure PWM for ${config.varName}\n`;
                    templateCode += `  ledcSetup(0, 5000, 8);\n  ledcAttachPin(${config.varName}, 0);\n`;
                    break;
            }
        }
    });
    templateCode += '}\n\nvoid loop() {\n  // Your main code here\n  delay(1000);\n}';

    document.getElementById('codeEditor').value = templateCode;
}

function clearCode() {
    document.getElementById('codeEditor').value = '';
}

export { generateTemplate, clearCode };
