// Tools Data for Multi-Tools Hub
// Contains all 111 tools organized by categories

const toolsData = {
    // Image Tools (10 tools)
    imageTools: [
        {
            name: "Image to PNG Converter",
            description: "Convert images to PNG format with transparency support",
            url: "tools/image-to-png.html",
            icon: "fas fa-image",
            status: "popular"
        },
        {
            name: "Image to JPG Converter",
            description: "Convert images to JPG format with quality control",
            url: "tools/image-to-jpg.html",
            icon: "fas fa-file-image",
            status: "popular"
        },
        {
            name: "Image Resizer",
            description: "Resize images to any dimension while maintaining quality",
            url: "tools/image-resizer.html",
            icon: "fas fa-expand-arrows-alt",
            status: "new"
        },
        {
            name: "Image Compressor",
            description: "Compress images to reduce file size without losing quality",
            url: "tools/image-compressor.html",
            icon: "fas fa-compress-alt",
            status: "popular"
        },
        {
            name: "Image Cropper",
            description: "Crop images to remove unwanted areas",
            url: "tools/image-cropper.html",
            icon: "fas fa-crop-alt",
            status: "new"
        },
        {
            name: "Convert Image to Base64",
            description: "Convert images to Base64 string for web use",
            url: "tools/image-to-base64.html",
            icon: "fas fa-code",
            status: "beta"
        },
        {
            name: "Convert WebP to PNG",
            description: "Convert WebP images to PNG format",
            url: "tools/webp-to-png.html",
            icon: "fas fa-exchange-alt",
            status: "new"
        },
        {
            name: "GIF Maker",
            description: "Create animated GIFs from images and videos",
            url: "tools/gif-maker.html",
            icon: "fas fa-film",
            status: "popular"
        },
        {
            name: "QR Code Generator",
            description: "Generate QR codes for URLs, text, and contact info",
            url: "tools/qr-code-generator.html",
            icon: "fas fa-qrcode",
            status: "popular"
        },
        {
            name: "Screenshot to PDF Converter",
            description: "Convert screenshots to PDF documents",
            url: "tools/screenshot-to-pdf.html",
            icon: "fas fa-file-pdf",
            status: "new"
        }
    ],

    // SEO Tools (10 tools)
    seoTools: [
        {
            name: "Meta Tag Generator",
            description: "Generate optimized meta tags for better SEO",
            url: "tools/meta-tag-generator.html",
            icon: "fas fa-tags",
            status: "popular"
        },
        {
            name: "Keyword Density Checker",
            description: "Analyze keyword density in your content",
            url: "tools/keyword-density-checker.html",
            icon: "fas fa-chart-bar",
            status: "new"
        },
        {
            name: "Sitemap Generator",
            description: "Generate XML sitemaps for your website",
            url: "tools/sitemap-generator.html",
            icon: "fas fa-sitemap",
            status: "popular"
        },
        {
            name: "Robots.txt Generator",
            description: "Create robots.txt files for search engine crawlers",
            url: "tools/robots-txt-generator.html",
            icon: "fas fa-robot",
            status: "new"
        },
        {
            name: "Google Index Checker",
            description: "Check if your pages are indexed by Google",
            url: "tools/google-index-checker.html",
            icon: "fab fa-google",
            status: "beta"
        },
        {
            name: "Domain Authority Checker",
            description: "Check domain authority and page authority scores",
            url: "tools/domain-authority-checker.html",
            icon: "fas fa-chart-line",
            status: "new"
        },
        {
            name: "Backlink Checker",
            description: "Analyze backlinks to your website",
            url: "tools/backlink-checker.html",
            icon: "fas fa-link",
            status: "beta"
        },
        {
            name: "Page Speed Checker",
            description: "Check website loading speed and performance",
            url: "tools/page-speed-checker.html",
            icon: "fas fa-tachometer-alt",
            status: "popular"
        },
        {
            name: "XML Sitemap Validator",
            description: "Validate XML sitemaps for errors",
            url: "tools/xml-sitemap-validator.html",
            icon: "fas fa-check-circle",
            status: "new"
        },
        {
            name: "Mobile-Friendly Test",
            description: "Test if your website is mobile-friendly",
            url: "tools/mobile-friendly-test.html",
            icon: "fas fa-mobile-alt",
            status: "popular"
        }
    ],

    // Text Tools (10 tools)
    textTools: [
        {
            name: "Word Counter",
            description: "Count words, characters, and paragraphs in text",
            url: "tools/word-counter.html",
            icon: "fas fa-calculator",
            status: "popular"
        },
        {
            name: "Character Counter",
            description: "Count characters with and without spaces",
            url: "tools/character-counter.html",
            icon: "fas fa-text-width",
            status: "new"
        },
        {
            name: "Case Converter",
            description: "Convert text case (UPPER, lower, Title, camelCase)",
            url: "tools/case-converter.html",
            icon: "fas fa-font",
            status: "popular"
        },
        {
            name: "Plagiarism Checker",
            description: "Check text for plagiarism and duplicate content",
            url: "tools/plagiarism-checker.html",
            icon: "fas fa-copy",
            status: "beta"
        },
        {
            name: "Grammar Checker",
            description: "Check grammar and spelling errors in text",
            url: "tools/grammar-checker.html",
            icon: "fas fa-spell-check",
            status: "new"
        },
        {
            name: "Text to Speech",
            description: "Convert text to speech with multiple voices",
            url: "tools/text-to-speech.html",
            icon: "fas fa-volume-up",
            status: "popular"
        },
        {
            name: "Speech to Text",
            description: "Convert speech to text using voice recognition",
            url: "tools/speech-to-text.html",
            icon: "fas fa-microphone",
            status: "beta"
        },
        {
            name: "URL Encoder & Decoder",
            description: "Encode and decode URLs for web use",
            url: "tools/url-encoder-decoder.html",
            icon: "fas fa-link",
            status: "popular"
        },
        {
            name: "Fancy Text Generator",
            description: "Generate fancy text with special characters",
            url: "tools/fancy-text-generator.html",
            icon: "fas fa-magic",
            status: "new"
        },
        {
            name: "Random Text Generator",
            description: "Generate random text for testing and placeholder content",
            url: "tools/random-text-generator.html",
            icon: "fas fa-random",
            status: "new"
        }
    ],

    // Developer Tools (10 tools)
    developerTools: [
        {
            name: "JSON Formatter",
            description: "Format and validate JSON data",
            url: "tools/json-formatter.html",
            icon: "fas fa-code",
            status: "popular"
        },
        {
            name: "HTML to Markdown Converter",
            description: "Convert HTML to Markdown format",
            url: "tools/html-to-markdown.html",
            icon: "fas fa-exchange-alt",
            status: "new"
        },
        {
            name: "CSS Minifier",
            description: "Minify CSS code to reduce file size",
            url: "tools/css-minifier.html",
            icon: "fab fa-css3-alt",
            status: "popular"
        },
        {
            name: "JavaScript Minifier",
            description: "Minify JavaScript code for production",
            url: "tools/javascript-minifier.html",
            icon: "fab fa-js-square",
            status: "popular"
        },
        {
            name: "SQL Formatter",
            description: "Format SQL queries for better readability",
            url: "tools/sql-formatter.html",
            icon: "fas fa-database",
            status: "new"
        },
        {
            name: "HTACCESS Redirect Generator",
            description: "Generate .htaccess redirect rules",
            url: "tools/htaccess-redirect-generator.html",
            icon: "fas fa-route",
            status: "beta"
        },
        {
            name: "Markdown to HTML Converter",
            description: "Convert Markdown to HTML format",
            url: "tools/markdown-to-html.html",
            icon: "fas fa-file-code",
            status: "new"
        },
        {
            name: "Color Code Picker",
            description: "Pick colors and get hex, RGB, and HSL values",
            url: "tools/color-picker.html",
            icon: "fas fa-palette",
            status: "popular"
        },
        {
            name: "Base64 Encoder & Decoder",
            description: "Encode and decode Base64 strings",
            url: "tools/base64-encoder-decoder.html",
            icon: "fas fa-code",
            status: "popular"
        },
        {
            name: "IP Address Lookup",
            description: "Lookup IP address information and geolocation",
            url: "tools/ip-address-lookup.html",
            icon: "fas fa-map-marker-alt",
            status: "new"
        }
    ],

    // Math & Calculators (10 tools)
    mathTools: [
        {
            name: "Percentage Calculator",
            description: "Calculate percentages, increases, and decreases",
            url: "tools/percentage-calculator.html",
            icon: "fas fa-percentage",
            status: "popular"
        },
        {
            name: "Age Calculator",
            description: "Calculate age from birth date to current date",
            url: "tools/age-calculator.html",
            icon: "fas fa-birthday-cake",
            status: "popular"
        },
        {
            name: "BMI Calculator",
            description: "Calculate Body Mass Index (BMI)",
            url: "tools/bmi-calculator.html",
            icon: "fas fa-weight",
            status: "popular"
        },
        {
            name: "Loan EMI Calculator",
            description: "Calculate loan EMI, interest, and total amount",
            url: "tools/loan-emi-calculator.html",
            icon: "fas fa-money-bill-wave",
            status: "new"
        },
        {
            name: "Scientific Calculator",
            description: "Advanced scientific calculator with functions",
            url: "tools/scientific-calculator.html",
            icon: "fas fa-calculator",
            status: "popular"
        },
        {
            name: "Discount Calculator",
            description: "Calculate discounts and final prices",
            url: "tools/discount-calculator.html",
            icon: "fas fa-tags",
            status: "new"
        },
        {
            name: "Currency Converter",
            description: "Convert between different currencies with live rates",
            url: "tools/currency-converter.html",
            icon: "fas fa-exchange-alt",
            status: "popular"
        },
        {
            name: "Time Zone Converter",
            description: "Convert time between different time zones",
            url: "tools/time-zone-converter.html",
            icon: "fas fa-clock",
            status: "new"
        },
        {
            name: "Binary to Decimal Converter",
            description: "Convert between binary, decimal, hex, and octal",
            url: "tools/binary-to-decimal-converter.html",
            icon: "fas fa-hashtag",
            status: "new"
        },
        {
            name: "Tip Calculator",
            description: "Calculate tips and split bills",
            url: "tools/tip-calculator.html",
            icon: "fas fa-receipt",
            status: "popular"
        }
    ],

    // Unit Converters (10 tools)
    unitConverters: [
        {
            name: "Length Converter",
            description: "Convert between different length units",
            url: "tools/length-converter.html",
            icon: "fas fa-ruler",
            status: "popular"
        },
        {
            name: "Weight Converter",
            description: "Convert between different weight units",
            url: "tools/weight-converter.html",
            icon: "fas fa-balance-scale",
            status: "popular"
        },
        {
            name: "Speed Converter",
            description: "Convert between different speed units",
            url: "tools/speed-converter.html",
            icon: "fas fa-tachometer-alt",
            status: "new"
        },
        {
            name: "Temperature Converter",
            description: "Convert between Celsius, Fahrenheit, and Kelvin",
            url: "tools/temperature-converter.html",
            icon: "fas fa-thermometer-half",
            status: "popular"
        },
        {
            name: "Volume Converter",
            description: "Convert between different volume units",
            url: "tools/volume-converter.html",
            icon: "fas fa-cube",
            status: "new"
        },
        {
            name: "Data Storage Converter",
            description: "Convert between bytes, KB, MB, GB, TB",
            url: "tools/data-storage-converter.html",
            icon: "fas fa-hdd",
            status: "popular"
        },
        {
            name: "Energy Converter",
            description: "Convert between different energy units",
            url: "tools/energy-converter.html",
            icon: "fas fa-bolt",
            status: "new"
        },
        {
            name: "Pressure Converter",
            description: "Convert between different pressure units",
            url: "tools/pressure-converter.html",
            icon: "fas fa-compress-alt",
            status: "new"
        },
        {
            name: "Fuel Efficiency Converter",
            description: "Convert between MPG, L/100km, and km/L",
            url: "tools/fuel-efficiency-converter.html",
            icon: "fas fa-gas-pump",
            status: "new"
        },
        {
            name: "Angle Converter",
            description: "Convert between degrees, radians, and gradians",
            url: "tools/angle-converter.html",
            icon: "fas fa-compass",
            status: "new"
        }
    ],

    // Security & Encryption Tools (10 tools)
    securityTools: [
        {
            name: "MD5 Hash Generator",
            description: "Generate MD5 hash from text or files",
            url: "tools/md5-hash-generator.html",
            icon: "fas fa-shield-alt",
            status: "popular"
        },
        {
            name: "SHA256 Hash Generator",
            description: "Generate SHA256 hash for secure hashing",
            url: "tools/sha256-hash-generator.html",
            icon: "fas fa-lock",
            status: "popular"
        },
        {
            name: "Password Generator",
            description: "Generate strong random passwords",
            url: "tools/password-generator.html",
            icon: "fas fa-key",
            status: "popular"
        },
        {
            name: "Random String Generator",
            description: "Generate random strings for testing",
            url: "tools/random-string-generator.html",
            icon: "fas fa-random",
            status: "new"
        },
        {
            name: "URL Shortener",
            description: "Shorten long URLs to share easily",
            url: "tools/url-shortener.html",
            icon: "fas fa-link",
            status: "popular"
        },
        {
            name: "IP Geolocation Finder",
            description: "Find location information from IP address",
            url: "tools/ip-geolocation-finder.html",
            icon: "fas fa-map-marker-alt",
            status: "new"
        },
        {
            name: "SSL Certificate Checker",
            description: "Check SSL certificate validity and details",
            url: "tools/ssl-certificate-checker.html",
            icon: "fas fa-certificate",
            status: "beta"
        },
        {
            name: "Whois Lookup",
            description: "Lookup domain registration information",
            url: "tools/whois-lookup.html",
            icon: "fas fa-search",
            status: "new"
        },
        {
            name: "HTTP Headers Checker",
            description: "Check HTTP headers of any website",
            url: "tools/http-headers-checker.html",
            icon: "fas fa-list",
            status: "beta"
        },
        {
            name: "Privacy Policy Generator",
            description: "Generate privacy policy for your website",
            url: "tools/privacy-policy-generator.html",
            icon: "fas fa-file-contract",
            status: "new"
        }
    ],

    // Social Media Tools (10 tools)
    socialMediaTools: [
        {
            name: "YouTube Thumbnail Downloader",
            description: "Download YouTube video thumbnails",
            url: "tools/youtube-thumbnail-downloader.html",
            icon: "fab fa-youtube",
            status: "popular"
        },
        {
            name: "Instagram Photo Downloader",
            description: "Download Instagram photos and videos",
            url: "tools/instagram-photo-downloader.html",
            icon: "fab fa-instagram",
            status: "new"
        },
        {
            name: "Twitter Video Downloader",
            description: "Download videos from Twitter",
            url: "tools/twitter-video-downloader.html",
            icon: "fab fa-twitter",
            status: "new"
        },
        {
            name: "Facebook Video Downloader",
            description: "Download videos from Facebook",
            url: "tools/facebook-video-downloader.html",
            icon: "fab fa-facebook",
            status: "new"
        },
        {
            name: "TikTok Video Downloader",
            description: "Download TikTok videos without watermark",
            url: "tools/tiktok-video-downloader.html",
            icon: "fab fa-tiktok",
            status: "popular"
        },
        {
            name: "YouTube Tags Extractor",
            description: "Extract tags from YouTube videos",
            url: "tools/youtube-tags-extractor.html",
            icon: "fas fa-tags",
            status: "new"
        },
        {
            name: "Hashtag Generator",
            description: "Generate trending hashtags for social media",
            url: "tools/hashtag-generator.html",
            icon: "fas fa-hashtag",
            status: "popular"
        },
        {
            name: "Social Media Post Generator",
            description: "Generate engaging social media posts",
            url: "tools/social-media-post-generator.html",
            icon: "fas fa-edit",
            status: "new"
        },
        {
            name: "Emoji Keyboard",
            description: "Copy and paste emojis for social media",
            url: "tools/emoji-keyboard.html",
            icon: "far fa-smile",
            status: "popular"
        },
        {
            name: "Twitter Character Counter",
            description: "Count characters for Twitter posts",
            url: "tools/twitter-character-counter.html",
            icon: "fab fa-twitter",
            status: "new"
        }
    ],

    // PDF Tools (11 tools)
    pdfTools: [
        {
            name: "PDF Converter",
            description: "Convert PDF to various formats",
            url: "tools/pdf-converter.html",
            icon: "fas fa-file-pdf",
            status: "popular"
        },
        {
            name: "PDF Editor",
            description: "Edit PDF files with text and images",
            url: "tools/pdf-editor.html",
            icon: "fas fa-edit",
            status: "popular"
        },
        {
            name: "Word to PDF",
            description: "Convert Word documents to PDF",
            url: "tools/word-to-pdf.html",
            icon: "fas fa-file-word",
            status: "popular"
        },
        {
            name: "PDF to Word",
            description: "Convert PDF to Word document",
            url: "tools/pdf-to-word.html",
            icon: "fas fa-file-word",
            status: "popular"
        },
        {
            name: "PDF to JPG",
            description: "Convert PDF pages to JPG images",
            url: "tools/pdf-to-jpg.html",
            icon: "fas fa-file-image",
            status: "new"
        },
        {
            name: "PDF to PNG",
            description: "Convert PDF pages to PNG images",
            url: "tools/pdf-to-png.html",
            icon: "fas fa-file-image",
            status: "new"
        },
        {
            name: "JPG to PDF",
            description: "Convert JPG images to PDF",
            url: "tools/jpg-to-pdf.html",
            icon: "fas fa-file-pdf",
            status: "popular"
        },
        {
            name: "PNG to PDF",
            description: "Convert PNG images to PDF",
            url: "tools/png-to-pdf.html",
            icon: "fas fa-file-pdf",
            status: "popular"
        },
        {
            name: "PDF Compressor",
            description: "Compress PDF files to reduce size",
            url: "tools/pdf-compressor.html",
            icon: "fas fa-compress-alt",
            status: "popular"
        },
        {
            name: "PDF Merger",
            description: "Merge multiple PDF files into one",
            url: "tools/pdf-merger.html",
            icon: "fas fa-object-group",
            status: "new"
        },
        {
            name: "PDF Splitter",
            description: "Split PDF into multiple files",
            url: "tools/pdf-splitter.html",
            icon: "fas fa-cut",
            status: "new"
        }
    ],

    // Miscellaneous Tools (20 tools)
    miscTools: [
        {
            name: "Barcode Generator",
            description: "Generate barcodes in various formats",
            url: "tools/barcode-generator.html",
            icon: "fas fa-barcode",
            status: "new"
        },
        {
            name: "Meme Generator",
            description: "Create memes with custom text and images",
            url: "tools/meme-generator.html",
            icon: "far fa-laugh-squint",
            status: "popular"
        },
        {
            name: "Resume Builder",
            description: "Create professional resumes with templates",
            url: "tools/resume-builder.html",
            icon: "fas fa-file-alt",
            status: "popular"
        },
        {
            name: "Invoice Generator",
            description: "Generate professional invoices",
            url: "tools/invoice-generator.html",
            icon: "fas fa-receipt",
            status: "new"
        },
        {
            name: "Business Name Generator",
            description: "Generate creative business names",
            url: "tools/business-name-generator.html",
            icon: "fas fa-building",
            status: "new"
        },
        {
            name: "Lottery Number Generator",
            description: "Generate random lottery numbers",
            url: "tools/lottery-number-generator.html",
            icon: "fas fa-ticket-alt",
            status: "new"
        },
        {
            name: "Flip a Coin Simulator",
            description: "Simulate coin flips with statistics",
            url: "tools/flip-a-coin.html",
            icon: "fas fa-circle",
            status: "popular"
        },
        {
            name: "Random Number Generator",
            description: "Generate random numbers within a range",
            url: "tools/random-number-generator.html",
            icon: "fas fa-dice",
            status: "popular"
        },
        {
            name: "Dice Roller Simulator",
            description: "Roll virtual dice with multiple sides",
            url: "tools/dice-roller.html",
            icon: "fas fa-dice-d20",
            status: "new"
        },
        {
            name: "Internet Speed Test",
            description: "Test your internet download and upload speed",
            url: "tools/internet-speed-test.html",
            icon: "fas fa-tachometer-alt",
            status: "popular"
        },
        {
            name: "Daily Planner Creator",
            description: "Create daily planners and schedules",
            url: "tools/daily-planner-creator.html",
            icon: "fas fa-calendar-day",
            status: "new"
        },
        {
            name: "Wedding Invitation Generator",
            description: "Create beautiful wedding invitations",
            url: "tools/wedding-invitation-generator.html",
            icon: "fas fa-heart",
            status: "new"
        },
        {
            name: "Story Plot Generator",
            description: "Generate creative story plots and ideas",
            url: "tools/story-plot-generator.html",
            icon: "fas fa-book",
            status: "new"
        },
        {
            name: "E-book Creator",
            description: "Create e-books from text content",
            url: "tools/ebook-creator.html",
            icon: "fas fa-book-open",
            status: "beta"
        },
        {
            name: "AI Chatbot Demo",
            description: "Interactive AI chatbot demonstration",
            url: "tools/ai-chatbot-demo.html",
            icon: "fas fa-robot",
            status: "beta"
        },
        {
            name: "IP Address Tracker",
            description: "Track and monitor IP addresses",
            url: "tools/ip-address-tracker.html",
            icon: "fas fa-map-marker-alt",
            status: "new"
        },
        {
            name: "Fake Address Generator",
            description: "Generate fake addresses for testing",
            url: "tools/fake-address-generator.html",
            icon: "fas fa-map",
            status: "new"
        },
        {
            name: "Electric Bill Calculator",
            description: "Calculate electricity bills and costs",
            url: "tools/electric-bill-calculator.html",
            icon: "fas fa-bolt",
            status: "new"
        },
        {
            name: "Leap Year Checker",
            description: "Check if a year is a leap year",
            url: "tools/leap-year-checker.html",
            icon: "fas fa-calendar-check",
            status: "new"
        },
        {
            name: "Name to Numerology Calculator",
            description: "Calculate numerology from names",
            url: "tools/name-numerology-calculator.html",
            icon: "fas fa-magic",
            status: "new"
        }
    ]
}; 