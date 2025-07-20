// QR Code Generator Tool JavaScript

let currentQRCodeData = null;

document.addEventListener('DOMContentLoaded', function() {
    initializeQRGenerator();
});

function initializeQRGenerator() {
    // Track tool usage
    if (typeof MultiToolsHub !== 'undefined') {
        MultiToolsHub.trackToolUsage('QR Code Generator');
    }
    
    // Set default QR type
    changeQRType();
}

function changeQRType() {
    const qrType = document.getElementById('qrType').value;
    
    // Hide all input sections
    const inputSections = [
        'textInputSection', 'urlInputSection', 'emailInputSection',
        'phoneInputSection', 'contactInputSection', 'wifiInputSection', 'smsInputSection'
    ];
    
    inputSections.forEach(section => {
        document.getElementById(section).classList.add('d-none');
    });
    
    // Show the appropriate input section
    document.getElementById(qrType + 'InputSection').classList.remove('d-none');
    
    // Clear previous QR code
    clearQRCode();
}

function generateQRCode() {
    const qrType = document.getElementById('qrType').value;
    let qrData = '';
    
    // Generate QR data based on type
    switch(qrType) {
        case 'text':
            qrData = document.getElementById('qrText').value.trim();
            break;
        case 'url':
            qrData = document.getElementById('qrUrl').value.trim();
            break;
        case 'email':
            const email = document.getElementById('qrEmail').value.trim();
            const subject = document.getElementById('qrSubject').value.trim();
            qrData = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
            break;
        case 'phone':
            const phone = document.getElementById('qrPhone').value.trim();
            qrData = `tel:${phone}`;
            break;
        case 'contact':
            qrData = generateContactData();
            break;
        case 'wifi':
            qrData = generateWiFiData();
            break;
        case 'sms':
            const smsPhone = document.getElementById('qrSmsPhone').value.trim();
            const smsMessage = document.getElementById('qrSmsMessage').value.trim();
            qrData = `sms:${smsPhone}${smsMessage ? `:${encodeURIComponent(smsMessage)}` : ''}`;
            break;
    }
    
    if (!qrData) {
        showNotification('Please enter some data to generate QR code', 'error');
        return;
    }
    
    // Generate QR code
    const size = parseInt(document.getElementById('qrSize').value);
    const errorLevel = document.getElementById('qrErrorLevel').value;
    
    const container = document.getElementById('qrCodeContainer');
    container.innerHTML = '<div class="loading">Generating QR Code...</div>';
    
    QRCode.toCanvas(container, qrData, {
        width: size,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        },
        errorCorrectionLevel: errorLevel
    }, function(error) {
        if (error) {
            showNotification('Error generating QR code: ' + error, 'error');
            container.innerHTML = '<div class="error">Error generating QR code</div>';
        } else {
            currentQRCodeData = qrData;
            enableDownloadButtons();
            showNotification('QR code generated successfully!', 'success');
        }
    });
}

function generateContactData() {
    const name = document.getElementById('qrName').value.trim();
    const phone = document.getElementById('qrPhoneContact').value.trim();
    const email = document.getElementById('qrEmailContact').value.trim();
    const website = document.getElementById('qrWebsite').value.trim();
    const address = document.getElementById('qrAddress').value.trim();
    
    let contactData = 'BEGIN:VCARD\nVERSION:3.0\n';
    
    if (name) contactData += `FN:${name}\n`;
    if (phone) contactData += `TEL:${phone}\n`;
    if (email) contactData += `EMAIL:${email}\n`;
    if (website) contactData += `URL:${website}\n`;
    if (address) contactData += `ADR:;;${address}\n`;
    
    contactData += 'END:VCARD';
    return contactData;
}

function generateWiFiData() {
    const ssid = document.getElementById('qrSSID').value.trim();
    const password = document.getElementById('qrPassword').value.trim();
    const encryption = document.getElementById('qrEncryption').value;
    const hidden = document.getElementById('qrHidden').value;
    
    if (!ssid) {
        showNotification('Please enter a network name (SSID)', 'error');
        return '';
    }
    
    let wifiData = `WIFI:S:${ssid};`;
    
    if (encryption !== 'nopass') {
        wifiData += `T:${encryption};P:${password};`;
    } else {
        wifiData += 'T:nopass;';
    }
    
    if (hidden === 'true') {
        wifiData += 'H:true;';
    }
    
    wifiData += ';;';
    return wifiData;
}

function downloadQRCode() {
    if (!currentQRCodeData) {
        showNotification('Please generate a QR code first', 'error');
        return;
    }
    
    const size = parseInt(document.getElementById('qrSize').value);
    const errorLevel = document.getElementById('qrErrorLevel').value;
    
    QRCode.toDataURL(currentQRCodeData, {
        width: size,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        },
        errorCorrectionLevel: errorLevel
    }, function(error, url) {
        if (error) {
            showNotification('Error downloading QR code: ' + error, 'error');
        } else {
            const link = document.createElement('a');
            link.download = 'qr-code.png';
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showNotification('QR code downloaded successfully!', 'success');
        }
    });
}

function downloadQRCodeSVG() {
    if (!currentQRCodeData) {
        showNotification('Please generate a QR code first', 'error');
        return;
    }
    
    const size = parseInt(document.getElementById('qrSize').value);
    const errorLevel = document.getElementById('qrErrorLevel').value;
    
    QRCode.toString(currentQRCodeData, {
        width: size,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        },
        errorCorrectionLevel: errorLevel,
        type: 'svg'
    }, function(error, svg) {
        if (error) {
            showNotification('Error downloading SVG: ' + error, 'error');
        } else {
            const blob = new Blob([svg], { type: 'image/svg+xml' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = 'qr-code.svg';
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            showNotification('SVG downloaded successfully!', 'success');
        }
    });
}

function copyQRCode() {
    if (!currentQRCodeData) {
        showNotification('Please generate a QR code first', 'error');
        return;
    }
    
    const canvas = document.querySelector('#qrCodeContainer canvas');
    if (canvas) {
        canvas.toBlob(function(blob) {
            try {
                const item = new ClipboardItem({ 'image/png': blob });
                navigator.clipboard.write([item]).then(() => {
                    showNotification('QR code copied to clipboard!', 'success');
                }).catch(() => {
                    showNotification('Failed to copy QR code', 'error');
                });
            } catch (err) {
                showNotification('Copying not supported in this browser', 'error');
            }
        });
    }
}

function clearQRCode() {
    const container = document.getElementById('qrCodeContainer');
    container.innerHTML = `
        <div class="placeholder-qr">
            <i class="fas fa-qrcode fa-5x text-muted"></i>
            <p class="text-muted mt-2">QR code will appear here</p>
        </div>
    `;
    currentQRCodeData = null;
    disableDownloadButtons();
}

function enableDownloadButtons() {
    document.getElementById('downloadBtn').disabled = false;
    document.getElementById('downloadSvgBtn').disabled = false;
    document.getElementById('copyBtn').disabled = false;
}

function disableDownloadButtons() {
    document.getElementById('downloadBtn').disabled = true;
    document.getElementById('downloadSvgBtn').disabled = true;
    document.getElementById('copyBtn').disabled = true;
}

function loadTemplate(template) {
    switch(template) {
        case 'website':
            document.getElementById('qrType').value = 'url';
            changeQRType();
            document.getElementById('qrUrl').value = 'https://example.com';
            break;
        case 'email':
            document.getElementById('qrType').value = 'email';
            changeQRType();
            document.getElementById('qrEmail').value = 'contact@example.com';
            document.getElementById('qrSubject').value = 'Hello from QR Code';
            break;
        case 'phone':
            document.getElementById('qrType').value = 'phone';
            changeQRType();
            document.getElementById('qrPhone').value = '+1234567890';
            break;
        case 'wifi':
            document.getElementById('qrType').value = 'wifi';
            changeQRType();
            document.getElementById('qrSSID').value = 'MyWiFi';
            document.getElementById('qrPassword').value = 'password123';
            break;
        case 'contact':
            document.getElementById('qrType').value = 'contact';
            changeQRType();
            document.getElementById('qrName').value = 'John Doe';
            document.getElementById('qrPhoneContact').value = '+1234567890';
            document.getElementById('qrEmailContact').value = 'john@example.com';
            document.getElementById('qrWebsite').value = 'https://johndoe.com';
            document.getElementById('qrAddress').value = '123 Main St, City, State 12345';
            break;
    }
    
    showNotification('Template loaded! Click "Generate QR Code" to create it.', 'success');
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

// Add CSS for QR code styling
const qrCodeCSS = `
.placeholder-qr {
    padding: 2rem;
    text-align: center;
    color: #6c757d;
}

.loading {
    text-align: center;
    padding: 2rem;
    color: #007bff;
}

.error {
    text-align: center;
    padding: 2rem;
    color: #dc3545;
}

#qrCodeContainer canvas {
    max-width: 100%;
    height: auto;
    border: 1px solid #dee2e6;
    border-radius: 8px;
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
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = qrCodeCSS;
document.head.appendChild(style); 