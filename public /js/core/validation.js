import { pinConfigurations } from '../components/pinConfigPanel.js';

function validateCode() {
    const code = document.getElementById('codeEditor').value;
    const output = document.getElementById('output');

    let validationResults = [];
    let hasErrors = false;

    if (!code.trim()) {
        output.innerHTML = '⚠️ No code to validate';
        return;
    }

    if (!code.includes('void setup()')) {
        validationResults.push('❌ ERROR: Missing void setup() function');
        hasErrors = true;
    }

    if (!code.includes('void loop()')) {
        validationResults.push('❌ ERROR: Missing void loop() function');
        hasErrors = true;
    }

    const openBraces = (code.match(/{/g) || []).length;
    const closeBraces = (code.match(/}/g) || []).length;
    if (openBraces !== closeBraces) {
        validationResults.push(`❌ ERROR: Unbalanced braces (${openBraces} open, ${closeBraces} close)`);
        hasErrors = true;
    }

    const openParens = (code.match(/\(/g) || []).length;
    const closeParens = (code.match(/\)/g) || []).length;
    if (openParens !== closeParens) {
        validationResults.push(`❌ ERROR: Unbalanced parentheses (${openParens} open, ${closeParens} close)`);
        hasErrors = true;
    }

    if (code.includes('Serial.') && !code.includes('Serial.begin')) {
        validationResults.push('⚠️ WARNING: Using Serial without Serial.begin()');
    }

    const usedPins = [];
    Object.entries(pinConfigurations).forEach(([pinNumber, config]) => {
        if (config.varName && code.includes(config.varName)) {
            usedPins.push(`✅ Pin ${pinNumber} (${config.varName}) configured and used`);
        }
    });

    const esp32Functions = ['digitalWrite', 'digitalRead', 'analogRead', 'analogWrite', 'pinMode'];
    const usedFunctions = esp32Functions.filter(func => code.includes(func));
    if (usedFunctions.length > 0) {
        validationResults.push(`✅ Using ESP32 functions: ${usedFunctions.join(', ')}`);
    }

    if (!hasErrors) {
        validationResults.push('\n🎉 CODE VALIDATION PASSED!');
        validationResults.push('✅ Syntax looks good');
        if (usedPins.length > 0) {
            validationResults.push('\n📌 Pin Usage:', ...usedPins);
        }
        validationResults.push(`\n📊 Estimated code size: ~${code.length} characters`);
        output.innerHTML = `<span class="success">${validationResults.join('\n')}</span>`;
    } else {
        validationResults.push('\n❌ CODE VALIDATION FAILED');
        output.innerHTML = `<span class="error">${validationResults.join('\n')}</span>`;
    }
}

export { validateCode };
