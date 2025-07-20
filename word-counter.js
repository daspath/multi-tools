// Word Counter Tool JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeWordCounter();
});

function initializeWordCounter() {
    const textInput = document.getElementById('textInput');
    
    // Add event listeners for real-time counting
    textInput.addEventListener('input', updateCounts);
    textInput.addEventListener('paste', updateCounts);
    textInput.addEventListener('keyup', updateCounts);
    
    // Track tool usage
    if (typeof MultiToolsHub !== 'undefined') {
        MultiToolsHub.trackToolUsage('Word Counter');
    }
}

function updateCounts() {
    const text = document.getElementById('textInput').value;
    
    // Update all counts
    document.getElementById('wordCount').textContent = countWords(text);
    document.getElementById('charCount').textContent = countCharacters(text);
    document.getElementById('charNoSpaces').textContent = countCharactersNoSpaces(text);
    document.getElementById('sentenceCount').textContent = countSentences(text);
    document.getElementById('paragraphCount').textContent = countParagraphs(text);
    document.getElementById('lineCount').textContent = countLines(text);
    
    // Update additional information
    updateAdditionalStats(text);
}

function countWords(text) {
    if (!text.trim()) return 0;
    
    // Split by whitespace and filter out empty strings
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

function countCharacters(text) {
    return text.length;
}

function countCharactersNoSpaces(text) {
    return text.replace(/\s/g, '').length;
}

function countSentences(text) {
    if (!text.trim()) return 0;
    
    // Split by sentence endings (.!?) and filter out empty strings
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    return sentences.length;
}

function countParagraphs(text) {
    if (!text.trim()) return 0;
    
    // Split by double line breaks and filter out empty strings
    const paragraphs = text.split(/\n\s*\n/).filter(paragraph => paragraph.trim().length > 0);
    return paragraphs.length;
}

function countLines(text) {
    if (!text.trim()) return 0;
    
    // Count non-empty lines
    const lines = text.split('\n').filter(line => line.trim().length > 0);
    return lines.length;
}

function updateAdditionalStats(text) {
    if (!text.trim()) {
        document.getElementById('readingTime').textContent = '0 min';
        document.getElementById('speakingTime').textContent = '0 min';
        document.getElementById('uniqueWords').textContent = '0';
        document.getElementById('longestWord').textContent = '-';
        return;
    }
    
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const uniqueWords = new Set(words.map(word => word.toLowerCase()));
    
    // Calculate reading time (average 200 words per minute)
    const readingTimeMinutes = Math.ceil(words.length / 200);
    document.getElementById('readingTime').textContent = `${readingTimeMinutes} min`;
    
    // Calculate speaking time (average 150 words per minute)
    const speakingTimeMinutes = Math.ceil(words.length / 150);
    document.getElementById('speakingTime').textContent = `${speakingTimeMinutes} min`;
    
    // Count unique words
    document.getElementById('uniqueWords').textContent = uniqueWords.size;
    
    // Find longest word
    const longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
    document.getElementById('longestWord').textContent = longestWord || '-';
}

function clearText() {
    document.getElementById('textInput').value = '';
    updateCounts();
    
    // Show success message
    showNotification('Text cleared successfully!', 'success');
}

function copyText() {
    const textInput = document.getElementById('textInput');
    textInput.select();
    textInput.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        showNotification('Text copied to clipboard!', 'success');
    } catch (err) {
        // Fallback for modern browsers
        navigator.clipboard.writeText(textInput.value).then(() => {
            showNotification('Text copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Failed to copy text', 'error');
        });
    }
}

function loadSampleText() {
    const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

This is a sample text to demonstrate the word counter functionality. It includes multiple paragraphs, sentences, and various types of words. The tool will count words, characters, sentences, paragraphs, and provide additional statistics.`;
    
    document.getElementById('textInput').value = sampleText;
    updateCounts();
    showNotification('Sample text loaded!', 'success');
}

function downloadResults() {
    const text = document.getElementById('textInput').value;
    const stats = {
        words: countWords(text),
        characters: countCharacters(text),
        charactersNoSpaces: countCharactersNoSpaces(text),
        sentences: countSentences(text),
        paragraphs: countParagraphs(text),
        lines: countLines(text),
        readingTime: Math.ceil(countWords(text) / 200),
        speakingTime: Math.ceil(countWords(text) / 150),
        uniqueWords: new Set(text.trim().split(/\s+/).filter(word => word.length > 0).map(word => word.toLowerCase())).size,
        longestWord: text.trim().split(/\s+/).filter(word => word.length > 0).reduce((longest, current) => current.length > longest.length ? current : longest, '')
    };
    
    const report = `Word Counter Report
====================

Text Statistics:
- Words: ${stats.words}
- Characters: ${stats.characters}
- Characters (no spaces): ${stats.charactersNoSpaces}
- Sentences: ${stats.sentences}
- Paragraphs: ${stats.paragraphs}
- Lines: ${stats.lines}

Additional Information:
- Reading Time: ${stats.readingTime} minutes
- Speaking Time: ${stats.speakingTime} minutes
- Unique Words: ${stats.uniqueWords}
- Longest Word: ${stats.longestWord}

Original Text:
====================
${text}`;
    
    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'word-counter-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Report downloaded successfully!', 'success');
}

// Text manipulation functions
function convertToUppercase() {
    const textInput = document.getElementById('textInput');
    textInput.value = textInput.value.toUpperCase();
    showNotification('Text converted to uppercase!', 'success');
}

function convertToLowercase() {
    const textInput = document.getElementById('textInput');
    textInput.value = textInput.value.toLowerCase();
    showNotification('Text converted to lowercase!', 'success');
}

function convertToTitleCase() {
    const textInput = document.getElementById('textInput');
    textInput.value = textInput.value.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    showNotification('Text converted to title case!', 'success');
}

function removeExtraSpaces() {
    const textInput = document.getElementById('textInput');
    textInput.value = textInput.value.replace(/\s+/g, ' ').trim();
    showNotification('Extra spaces removed!', 'success');
}

function reverseText() {
    const textInput = document.getElementById('textInput');
    textInput.value = textInput.value.split('').reverse().join('');
    showNotification('Text reversed!', 'success');
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

// Add CSS for notifications
const notificationCSS = `
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
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = notificationCSS;
document.head.appendChild(style); 