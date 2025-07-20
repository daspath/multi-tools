// Main JavaScript for Multi-Tools Hub

// Load header and footer components
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    initializeScrollToTop();
    initializeSearch();
    loadTools();
});

// Load header component
async function loadHeader() {
    try {
        const response = await fetch('components/header.html');
        const headerHtml = await response.text();
        document.getElementById('header-placeholder').innerHTML = headerHtml;
        
        // Initialize header search
        const headerSearch = document.getElementById('headerSearch');
        if (headerSearch) {
            headerSearch.addEventListener('input', function() {
                searchTools(this.value);
            });
        }
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Load footer component
async function loadFooter() {
    try {
        const response = await fetch('components/footer.html');
        const footerHtml = await response.text();
        document.getElementById('footer-placeholder').innerHTML = footerHtml;
        
        // Initialize scroll to top button
        const scrollToTopBtn = document.getElementById('scrollToTop');
        if (scrollToTopBtn) {
            scrollToTopBtn.addEventListener('click', scrollToTop);
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Initialize scroll to top functionality
function initializeScrollToTop() {
    window.addEventListener('scroll', function() {
        const scrollToTopBtn = document.getElementById('scrollToTop');
        if (scrollToTopBtn) {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchTools(this.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchTools(this.value);
            }
        });
    }
}

// Search tools function
function searchTools(query) {
    if (!query || query.trim() === '') {
        showAllTools();
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const toolCards = document.querySelectorAll('.tool-card');
    let foundTools = 0;
    
    toolCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-text').textContent.toLowerCase();
        const category = card.closest('.tools-section').querySelector('.section-title').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
            card.style.display = 'block';
            foundTools++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show search results summary
    showSearchResults(foundTools, searchTerm);
}

// Show all tools
function showAllTools() {
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.style.display = 'block';
    });
    
    // Remove search results summary
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }
}

// Show search results summary
function showSearchResults(foundCount, searchTerm) {
    // Remove existing search results
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    // Create search results summary
    const searchContainer = document.querySelector('.search-container');
    const resultsDiv = document.createElement('div');
    resultsDiv.className = 'search-results';
    resultsDiv.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <strong>${foundCount}</strong> tool${foundCount !== 1 ? 's' : ''} found for "<strong>${searchTerm}</strong>"
            </div>
            <button class="btn btn-sm btn-outline-secondary" onclick="clearSearch()">
                <i class="fas fa-times me-1"></i>Clear
            </button>
        </div>
    `;
    
    searchContainer.appendChild(resultsDiv);
}

// Clear search
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    showAllTools();
}

// Load tools data and populate sections
async function loadTools() {
    try {
        // This will be populated by tools-data.js
        if (typeof toolsData !== 'undefined') {
            populateTools();
        }
    } catch (error) {
        console.error('Error loading tools:', error);
    }
}

// Populate tools in their respective sections
function populateTools() {
    if (!toolsData) return;
    
    // Populate each category
    populateCategory('imageTools', toolsData.imageTools);
    populateCategory('seoTools', toolsData.seoTools);
    populateCategory('textTools', toolsData.textTools);
    populateCategory('developerTools', toolsData.developerTools);
    populateCategory('mathTools', toolsData.mathTools);
    populateCategory('unitConverters', toolsData.unitConverters);
    populateCategory('securityTools', toolsData.securityTools);
    populateCategory('socialMediaTools', toolsData.socialMediaTools);
    populateCategory('pdfTools', toolsData.pdfTools);
    populateCategory('miscTools', toolsData.miscTools);
    
    // Update total tools count
    updateTotalToolsCount();
}

// Populate a specific category
function populateCategory(containerId, tools) {
    const container = document.getElementById(containerId);
    if (!container || !tools) return;
    
    container.innerHTML = '';
    
    tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        container.appendChild(toolCard);
    });
}

// Create a tool card element
function createToolCard(tool) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 col-sm-12 mb-4';
    
    const statusBadge = tool.status ? `<span class="tool-status ${tool.status}">${tool.status.toUpperCase()}</span>` : '';
    
    col.innerHTML = `
        <div class="card tool-card h-100 position-relative">
            ${statusBadge}
            <div class="card-body text-center">
                <div class="tool-icon mx-auto">
                    <i class="${tool.icon}"></i>
                </div>
                <h5 class="card-title">${tool.name}</h5>
                <p class="card-text">${tool.description}</p>
                <a href="${tool.url}" class="btn btn-primary">
                    <i class="fas fa-external-link-alt me-1"></i>Use Tool
                </a>
            </div>
        </div>
    `;
    
    return col;
}

// Update total tools count
function updateTotalToolsCount() {
    const totalToolsElement = document.getElementById('totalTools');
    if (totalToolsElement && toolsData) {
        const totalCount = Object.values(toolsData).reduce((total, category) => {
            return total + (category ? category.length : 0);
        }, 0);
        totalToolsElement.textContent = totalCount + '+';
    }
}

// Utility function to format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Utility function to debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced search function
const debouncedSearch = debounce(searchTools, 300);

// Add event listener for debounced search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            debouncedSearch(this.value);
        });
    }
});

// Analytics tracking
function trackToolUsage(toolName) {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'tool_usage', {
            'tool_name': toolName,
            'event_category': 'tools'
        });
    }
    
    // Local storage for usage tracking
    const usage = JSON.parse(localStorage.getItem('toolUsage') || '{}');
    usage[toolName] = (usage[toolName] || 0) + 1;
    localStorage.setItem('toolUsage', JSON.stringify(usage));
}

// Export functions for use in other scripts
window.MultiToolsHub = {
    searchTools,
    clearSearch,
    trackToolUsage,
    formatFileSize
}; 