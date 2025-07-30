import { getPinConfigurations } from './pinConfigPanel.js';

let editor = null;

function setupCodeEditor() {
    editor = ace.edit('editor');
    editor.setTheme('ace/theme/monokai');
    editor.session.setMode('ace/mode/c_cpp');
}

function generateTemplate() {
    const pinConfigs = getPinConfigurations();
    let code = '// Auto-generated ESP32 code\\n\\n';

    for (const [pin, config] of Object.entries(pinConfigs)) {
        if (config.varName && config.mode) {
            code += `const int ${config.varName} = ${pin}; // ${config.description || config.pin.name}\\n`;
        }
    }

    code += `\\nvoid setup() {\\n  Serial.begin(115200);\\n`;

    for (const config of Object.values(pinConfigs)) {
        if (config.varName && config.mode) {
            switch (config.mode) {
                case 'INPUT':
                case 'OUTPUT':
                case 'INPUT_PULLUP':
                    code += `  pinMode(${config.varName}, ${config.mode});\\n`;
                    break;
                case 'PWM':
                    code += `  ledcSetup(0, 5000, 8);\\n  ledcAttachPin(${config.varName}, 0);\\n`;
                    break;
            }
        }
    }

    code += `}\\n\\nvoid loop() {\\n  // Your main code here\\n  delay(1000);\\n}`;

    editor.setValue(code, 1);
}

function clearCode() {
    editor.setValue('', 1);
}

function getEditorCode() {
    return editor.getValue();
}

export { setupCodeEditor, generateTemplate, clearCode, getEditorCode };
