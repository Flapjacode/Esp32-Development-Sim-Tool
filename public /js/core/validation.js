import { getEditorCode } from '../components/codeEditor.js';
import { getPinConfigurations } from '../components/pinConfigPanel.js';

function validateCode() {
    const code = getEditorCode();
    const output = document.getElementById('output');
    const results = [];
    const pinConfigs = getPinConfigurations();

    let hasErrors = false;

    if (!code.trim()) {
        output.innerHTML = '⚠️ No code to validate.';
        return;
    }

    if (!code.includes('void setup()')) {
        results.push('❌ Missing void setup()');
        hasErrors = true;
    }

    if (!code.includes('void loop()')) {
        results.push('❌ Missing void loop()');
        hasErrors = true;
    }

    const open = (code.match(/{/g) || []).length;
    const close = (code.match(/}/g) || []).length;
    if (open !== close) {
        results.push(`❌ Unbalanced braces: {${open}} }${close}`);
        hasErrors = true;
    }

    if (code.includes('Serial.') && !code.includes('Serial.begin')) {
        results.push('⚠️ Serial used without Serial.begin()');
    }

    const usedPins = Object.entries(pinConfigs).filter(([_, cfg]) => code.includes(cfg.varName));
    usedPins.forEach(([pin, cfg]) => {
        results.push(`✅ Pin ${pin} (${cfg.varName}) used`);
    });

    if (!hasErrors) {
        results.push('\\n🎉 Code looks good!');
        results.push(`📏 Code length: ${code.length} chars`);
        output.innerHTML = `<span class='success'>${results.join('<br>')}</span>`;
    } else {
        results.push('\\n❌ Fix errors to proceed.');
        output.innerHTML = `<span class='error'>${results.join('<br>')}</span>`;
    }
}

export { validateCode };
