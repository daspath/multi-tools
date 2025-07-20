// JSON Formatter Tool JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeJSONFormatter();
});

function initializeJSONFormatter() {
    const jsonInput = document.getElementById('jsonInput');
    
    // Add event listeners for real-time validation
    jsonInput.addEventListener('input', updateStats);
    jsonInput.addEventListener('paste', updateStats);
    
    // Track tool usage
    if (typeof MultiToolsHub !== 'undefined') {
        MultiToolsHub.trackToolUsage('JSON Formatter');
    }
}

function formatJSON() {
    const input = document.getElementById('jsonInput').value.trim();
    
    if (!input) {
        showNotification('Please enter some JSON data', 'error');
        return;
    }
    
    try {
        const parsed = JSON.parse(input);
        const formatted = JSON.stringify(parsed, null, 2);
        document.getElementById('jsonOutput').value = formatted;
        updateStats();
        showValidationResult(true, 'JSON formatted successfully!');
        showNotification('JSON formatted successfully!', 'success');
    } catch (error) {
        showValidationResult(false, 'Invalid JSON: ' + error.message);
        showNotification('Invalid JSON format', 'error');
    }
}

function minifyJSON() {
    const input = document.getElementById('jsonInput').value.trim();
    
    if (!input) {
        showNotification('Please enter some JSON data', 'error');
        return;
    }
    
    try {
        const parsed = JSON.parse(input);
        const minified = JSON.stringify(parsed);
        document.getElementById('jsonOutput').value = minified;
        updateStats();
        showValidationResult(true, 'JSON minified successfully!');
        showNotification('JSON minified successfully!', 'success');
    } catch (error) {
        showValidationResult(false, 'Invalid JSON: ' + error.message);
        showNotification('Invalid JSON format', 'error');
    }
}

function validateJSON() {
    const input = document.getElementById('jsonInput').value.trim();
    
    if (!input) {
        showValidationResult(false, 'No JSON entered');
        return;
    }
    
    try {
        JSON.parse(input);
        showValidationResult(true, 'Valid JSON format');
        showNotification('JSON is valid!', 'success');
    } catch (error) {
        showValidationResult(false, 'Invalid JSON: ' + error.message);
        showNotification('Invalid JSON format', 'error');
    }
}

function updateStats() {
    const input = document.getElementById('jsonInput').value;
    
    // Update character count
    document.getElementById('charCount').textContent = input.length;
    
    // Update line count
    const lines = input.split('\n').filter(line => line.trim().length > 0);
    document.getElementById('lineCount').textContent = lines.length;
    
    // Try to parse and count objects/arrays
    try {
        const parsed = JSON.parse(input);
        const stats = analyzeJSON(parsed);
        document.getElementById('objectCount').textContent = stats.objects;
        document.getElementById('arrayCount').textContent = stats.arrays;
    } catch (error) {
        document.getElementById('objectCount').textContent = '0';
        document.getElementById('arrayCount').textContent = '0';
    }
}

function analyzeJSON(obj) {
    let objects = 0;
    let arrays = 0;
    
    function traverse(item) {
        if (Array.isArray(item)) {
            arrays++;
            item.forEach(traverse);
        } else if (typeof item === 'object' && item !== null) {
            objects++;
            Object.values(item).forEach(traverse);
        }
    }
    
    traverse(obj);
    return { objects, arrays };
}

function showValidationResult(isValid, message) {
    const resultElement = document.getElementById('validationResult');
    const icon = isValid ? 'check-circle' : 'times-circle';
    const alertClass = isValid ? 'alert-success' : 'alert-danger';
    
    resultElement.className = `alert ${alertClass}`;
    resultElement.innerHTML = `<i class="fas fa-${icon} me-2"></i>${message}`;
}

function clearJSON() {
    document.getElementById('jsonInput').value = '';
    document.getElementById('jsonOutput').value = '';
    updateStats();
    showValidationResult(false, 'No JSON entered');
    showNotification('JSON cleared', 'success');
}

function loadSampleJSON() {
    const sampleJSON = `{
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212-555-1234"
    },
    {
      "type": "work",
      "number": "646-555-5678"
    }
  ],
  "skills": ["JavaScript", "Python", "React", "Node.js"],
  "active": true,
  "metadata": {
    "created": "2024-01-15T10:30:00Z",
    "lastModified": "2024-01-20T14:45:00Z"
  }
}`;
    
    document.getElementById('jsonInput').value = sampleJSON;
    updateStats();
    showNotification('Sample JSON loaded!', 'success');
}

function copyOutput() {
    const output = document.getElementById('jsonOutput').value;
    if (!output) {
        showNotification('No output to copy', 'error');
        return;
    }
    
    navigator.clipboard.writeText(output).then(() => {
        showNotification('Output copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy output', 'error');
    });
}

function downloadJSON() {
    const output = document.getElementById('jsonOutput').value;
    if (!output) {
        showNotification('No output to download', 'error');
        return;
    }
    
    const blob = new Blob([output], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'formatted.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    showNotification('JSON file downloaded!', 'success');
}

// Quick action functions
function escapeJSON() {
    const input = document.getElementById('jsonInput').value;
    if (!input) {
        showNotification('Please enter some JSON data', 'error');
        return;
    }
    
    const escaped = JSON.stringify(input);
    document.getElementById('jsonOutput').value = escaped;
    showNotification('JSON escaped successfully!', 'success');
}

function unescapeJSON() {
    const input = document.getElementById('jsonInput').value;
    if (!input) {
        showNotification('Please enter some JSON data', 'error');
        return;
    }
    
    try {
        const unescaped = JSON.parse(input);
        document.getElementById('jsonOutput').value = unescaped;
        showNotification('JSON unescaped successfully!', 'success');
    } catch (error) {
        showNotification('Invalid escaped JSON', 'error');
    }
}

function sortJSON() {
    const input = document.getElementById('jsonInput').value.trim();
    
    if (!input) {
        showNotification('Please enter some JSON data', 'error');
        return;
    }
    
    try {
        const parsed = JSON.parse(input);
        const sorted = sortObjectKeys(parsed);
        const formatted = JSON.stringify(sorted, null, 2);
        document.getElementById('jsonOutput').value = formatted;
        showNotification('JSON keys sorted successfully!', 'success');
    } catch (error) {
        showNotification('Invalid JSON format', 'error');
    }
}

function sortObjectKeys(obj) {
    if (Array.isArray(obj)) {
        return obj.map(sortObjectKeys);
    } else if (typeof obj === 'object' && obj !== null) {
        const sorted = {};
        Object.keys(obj).sort().forEach(key => {
            sorted[key] = sortObjectKeys(obj[key]);
        });
        return sorted;
    }
    return obj;
}

function beautifyJSON() {
    const input = document.getElementById('jsonInput').value.trim();
    
    if (!input) {
        showNotification('Please enter some JSON data', 'error');
        return;
    }
    
    try {
        const parsed = JSON.parse(input);
        const beautified = JSON.stringify(parsed, null, 4);
        document.getElementById('jsonOutput').value = beautified;
        showNotification('JSON beautified successfully!', 'success');
    } catch (error) {
        showNotification('Invalid JSON format', 'error');
    }
}

function removeComments() {
    let input = document.getElementById('jsonInput').value;
    
    if (!input) {
        showNotification('Please enter some JSON data', 'error');
        return;
    }
    
    // Remove single-line comments
    input = input.replace(/\/\/.*$/gm, '');
    
    // Remove multi-line comments
    input = input.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Remove trailing commas
    input = input.replace(/,(\s*[}\]])/g, '$1');
    
    document.getElementById('jsonOutput').value = input;
    showNotification('Comments removed successfully!', 'success');
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification alert alert-${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Add CSS for JSON formatter styling
const jsonFormatterCSS = `
.stat-item {
    text-align: center;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.stat-number {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
}

.stat-label {
    font-size: 0.875rem;
    color: #6c757d;
    margin-top: 0.25rem;
}

.validation-status .alert {
    margin-bottom: 0;
}

.notification {
    animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

#jsonInput, #jsonOutput {
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.4;
}

#jsonOutput {
    background-color: #f8f9fa;
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = jsonFormatterCSS;
document.head.appendChild(style); 