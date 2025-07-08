// Theme JavaScript for StepStyle eCommerce Website

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initializeCart();
    initializeMobileMenu();
    initializeSearch();
    initializeProductActions();
    initializeNewsletter();
    initializeAnimations();
    
    // Cart functionality
    function initializeCart() {
        const cartToggle = document.querySelector('.cart-toggle');
        const cartDrawer = document.querySelector('.cart-drawer');
        const cartClose = document.querySelector('.cart-drawer-close');
        const cartBackdrop = document.querySelector('.cart-drawer-backdrop');
        
        if (cartToggle && cartDrawer) {
            cartToggle.addEventListener('click', function() {
                cartDrawer.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
            
            function closeCart() {
                cartDrawer.classList.remove('open');
                document.body.style.overflow = '';
            }
            
            if (cartClose) {
                cartClose.addEventListener('click', closeCart);
            }
            
            if (cartBackdrop) {
                cartBackdrop.addEventListener('click', closeCart);
            }
            
            // Close cart with ESC key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && cartDrawer.classList.contains('open')) {
                    closeCart();
                }
            });
        }
    }
    
    // Mobile menu functionality
    function initializeMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navbarMenu = document.querySelector('.navbar-menu');
        
        if (mobileToggle && navbarMenu) {
            mobileToggle.addEventListener('click', function() {
                navbarMenu.classList.toggle('active');
                mobileToggle.classList.toggle('active');
                
                // Animate hamburger menu
                const spans = mobileToggle.querySelectorAll('span');
                if (mobileToggle.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '';
                    spans[2].style.transform = '';
                }
            });
        }
    }
    
    // Search functionality
    function initializeSearch() {
        const searchToggle = document.querySelector('.search-toggle');
        const searchForm = document.getElementById('search-form');
        
        if (searchToggle) {
            searchToggle.addEventListener('click', function() {
                // Create search overlay if it doesn't exist
                let searchOverlay = document.querySelector('.search-overlay');
                if (!searchOverlay) {
                    searchOverlay = createSearchOverlay();
                    document.body.appendChild(searchOverlay);
                }
                
                searchOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Focus on search input
                const searchInput = searchOverlay.querySelector('input');
                if (searchInput) {
                    setTimeout(() => searchInput.focus(), 100);
                }
            });
        }
    }
    
    function createSearchOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'search-overlay';
        overlay.innerHTML = `
            <div class="search-content">
                <div class="search-header">
                    <h3>Search Products</h3>
                    <button class="search-close">&times;</button>
                </div>
                <form class="search-form">
                    <input type="text" placeholder="Search for shoes..." autocomplete="off">
                    <button type="submit">Search</button>
                </form>
                <div class="search-suggestions">
                    <p>Popular searches:</p>
                    <div class="suggestion-tags">
                        <span class="tag">Nike Air Max</span>
                        <span class="tag">Women's Heels</span>
                        <span class="tag">Men's Boots</span>
                        <span class="tag">Running Shoes</span>
                        <span class="tag">Sneakers</span>
                    </div>
                </div>
            </div>
            <div class="search-backdrop"></div>
        `;
        
        // Add search overlay styles
        const style = document.createElement('style');
        style.textContent = `
            .search-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                z-index: 10001;
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .search-overlay.active {
                opacity: 1;
                visibility: visible;
            }
            
            .search-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 2rem;
                border-radius: 12px;
                width: 90%;
                max-width: 500px;
                z-index: 2;
            }
            
            .search-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
            }
            
            .search-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
            }
            
            .search-form {
                display: flex;
                gap: 1rem;
                margin-bottom: 1.5rem;
            }
            
            .search-form input {
                flex: 1;
                padding: 1rem;
                border: 2px solid #ddd;
                border-radius: 6px;
                font-size: 1rem;
                outline: none;
            }
            
            .search-form input:focus {
                border-color: #007bff;
            }
            
            .search-form button {
                padding: 1rem 2rem;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            
            .search-form button:hover {
                background-color: #0056b3;
            }
            
            .search-suggestions p {
                margin-bottom: 1rem;
                color: #666;
            }
            
            .suggestion-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            
            .tag {
                padding: 0.5rem 1rem;
                background-color: #f8f9fa;
                border-radius: 20px;
                font-size: 0.875rem;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            
            .tag:hover {
                background-color: #e9ecef;
            }
            
            .search-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 1;
            }
            
            @media (max-width: 768px) {
                .search-content {
                    width: 95%;
                    padding: 1.5rem;
                }
                
                .search-form {
                    flex-direction: column;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Add event listeners
        const closeBtn = overlay.querySelector('.search-close');
        const backdrop = overlay.querySelector('.search-backdrop');
        
        function closeSearch() {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        closeBtn.addEventListener('click', closeSearch);
        backdrop.addEventListener('click', closeSearch);
        
        // Handle tag clicks
        const tags = overlay.querySelectorAll('.tag');
        tags.forEach(tag => {
            tag.addEventListener('click', function() {
                const input = overlay.querySelector('input');
                input.value = this.textContent;
                input.focus();
            });
        });
        
        return overlay;
    }
    
    // Product actions
    function initializeProductActions() {
        // Quick view functionality
        const quickViewBtns = document.querySelectorAll('.quick-view');
        quickViewBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = this.getAttribute('data-product');
                openQuickView(productId);
            });
        });
        
        // Add to cart functionality
        const addToCartBtns = document.querySelectorAll('.add-to-cart');
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = this.getAttribute('data-product');
                addToCart(productId);
            });
        });
    }
    
    function openQuickView(productId) {
        // Create quick view modal
        const modal = document.createElement('div');
        modal.className = 'quick-view-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Quick View</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="product-quick-view">
                        <div class="product-image">
                            <div class="placeholder-image product-${Math.floor(Math.random() * 8) + 1}"></div>
                        </div>
                        <div class="product-details">
                            <h4>Product Name</h4>
                            <p class="brand">Brand Name</p>
                            <div class="rating">
                                <span class="stars">★★★★★</span>
                                <span>(124 reviews)</span>
                            </div>
                            <div class="price">$129.99</div>
                            <div class="size-selector">
                                <label>Size:</label>
                                <select>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                </select>
                            </div>
                            <button class="btn btn-primary add-to-cart-modal">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop"></div>
        `;
        
        document.body.appendChild(modal);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.modal-close');
        const backdrop = modal.querySelector('.modal-backdrop');
        
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => modal.remove(), 300);
        }
        
        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);
        
        // Add to cart from modal
        const addToCartModal = modal.querySelector('.add-to-cart-modal');
        addToCartModal.addEventListener('click', function() {
            addToCart(productId);
            closeModal();
        });
    }
    
    function addToCart(productId) {
        // Simulate adding to cart
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let count = parseInt(cartCount.textContent) || 0;
            cartCount.textContent = count + 1;
            
            // Add animation to cart icon
            const cartToggle = document.querySelector('.cart-toggle');
            cartToggle.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartToggle.style.transform = '';
            }, 200);
        }
        
        // Show notification
        showNotification('Product added to cart!', 'success');
    }
    
    // Newsletter functionality
    function initializeNewsletter() {
        const newsletterForms = document.querySelectorAll('.newsletter-form, .newsletter-form-large');
        
        newsletterForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                
                if (email) {
                    // Simulate newsletter signup
                    showNotification('Thanks for subscribing!', 'success');
                    this.querySelector('input[type="email"]').value = '';
                } else {
                    showNotification('Please enter a valid email address.', 'error');
                }
            });
        });
    }
    
    // Animations
    function initializeAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll('.product-card, .collection-card, .banner-card');
        animateElements.forEach(el => observer.observe(el));
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Utility functions
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 6px;
            color: white;
            font-weight: 500;
            z-index: 10002;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        
        // Set background color based on type
        switch(type) {
            case 'success':
                notification.style.backgroundColor = '#28a745';
                break;
            case 'error':
                notification.style.backgroundColor = '#dc3545';
                break;
            case 'warning':
                notification.style.backgroundColor = '#ffc107';
                notification.style.color = '#333';
                break;
            default:
                notification.style.backgroundColor = '#007bff';
        }
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .quick-view-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 10001;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .quick-view-modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .quick-view-modal .modal-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 12px;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            z-index: 2;
        }
        
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .product-quick-view {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        
        .product-quick-view .product-image {
            height: 300px;
        }
        
        .product-details h4 {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }
        
        .product-details .brand {
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 1rem;
        }
        
        .product-details .rating {
            margin-bottom: 1rem;
        }
        
        .product-details .rating .stars {
            color: #ffc107;
            margin-right: 0.5rem;
        }
        
        .product-details .price {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: #333;
        }
        
        .size-selector {
            margin-bottom: 1.5rem;
        }
        
        .size-selector label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        .size-selector select {
            padding: 0.75rem;
            border: 2px solid #ddd;
            border-radius: 6px;
            font-size: 1rem;
            outline: none;
            width: 100%;
            max-width: 150px;
        }
        
        .modal-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1;
        }
        
        @media (max-width: 768px) {
            .quick-view-modal .modal-content {
                width: 95%;
            }
            
            .product-quick-view {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .product-quick-view .product-image {
                height: 250px;
            }
        }
    `;
    document.head.appendChild(modalStyles);
    
    // Initialize sticky header effect
    let lastScroll = 0;
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.transform = currentScroll > lastScroll ? 'translateY(-100%)' : 'translateY(0)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Initialize page-specific functionality
    initializeProductPage();
    initializeCollectionPage();
    
    console.log('StepStyle theme initialized successfully!');
});

// Product page functionality
function initializeProductPage() {
    if (!document.querySelector('.product-page')) return;
    
    // Image gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image .placeholder-image');
    
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            if (mainImage) {
                mainImage.className = `placeholder-image product-main-${index + 1}`;
            }
        });
    });
    
    // Product tabs
    const tabHeaders = document.querySelectorAll('.tab-header');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all headers and panes
            tabHeaders.forEach(h => h.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked header and corresponding pane
            this.classList.add('active');
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
    
    // Color selector
    const colorOptions = document.querySelectorAll('.color-selector input[type="radio"]');
    const selectedColorSpan = document.querySelector('.selected-color');
    
    colorOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.checked && selectedColorSpan) {
                const colorLabel = this.nextElementSibling.getAttribute('data-color');
                selectedColorSpan.textContent = colorLabel;
            }
        });
    });
    
    // Quantity selector
    const quantityInput = document.querySelector('.quantity-input');
    const minusBtn = document.querySelector('.quantity-btn.minus');
    const plusBtn = document.querySelector('.quantity-btn.plus');
    
    if (minusBtn && quantityInput) {
        minusBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value) || 1;
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    }
    
    if (plusBtn && quantityInput) {
        plusBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value) || 1;
            const maxValue = parseInt(quantityInput.max) || 10;
            if (currentValue < maxValue) {
                quantityInput.value = currentValue + 1;
            }
        });
    }
    
    // Product form submission
    const productForm = document.querySelector('.product-form-cart');
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const sizeSelect = this.querySelector('.variant-select');
            if (sizeSelect && !sizeSelect.value) {
                showNotification('Please select a size', 'error');
                sizeSelect.focus();
                return;
            }
            
            // Simulate adding to cart
            const addToCartBtn = this.querySelector('.add-to-cart-btn');
            const btnText = addToCartBtn.querySelector('.btn-text');
            const btnLoading = addToCartBtn.querySelector('.btn-loading');
            
            // Show loading state
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            addToCartBtn.disabled = true;
            
            setTimeout(() => {
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                addToCartBtn.disabled = false;
                
                // Update cart count
                const cartCount = document.querySelector('.cart-count');
                if (cartCount) {
                    let count = parseInt(cartCount.textContent) || 0;
                    cartCount.textContent = count + parseInt(quantityInput.value);
                }
                
                showNotification('Added to cart successfully!', 'success');
            }, 1000);
        });
    }
    
    // Wishlist functionality
    const wishlistBtn = document.querySelector('.wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            const isActive = this.classList.contains('active');
            
            if (isActive) {
                this.style.backgroundColor = '#dc3545';
                this.style.color = 'white';
                this.style.borderColor = '#dc3545';
                showNotification('Added to wishlist', 'success');
            } else {
                this.style.backgroundColor = '';
                this.style.color = '';
                this.style.borderColor = '';
                showNotification('Removed from wishlist', 'info');
            }
        });
    }
    
    // Buy now functionality
    const buyNowBtn = document.querySelector('.buy-now-btn');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            const sizeSelect = document.querySelector('.variant-select');
            if (sizeSelect && !sizeSelect.value) {
                showNotification('Please select a size', 'error');
                sizeSelect.focus();
                return;
            }
            
            showNotification('Redirecting to checkout...', 'info');
            // Simulate redirect to checkout
            setTimeout(() => {
                window.location.href = '/checkout';
            }, 1000);
        });
    }
}

// Collection page functionality
function initializeCollectionPage() {
    if (!document.querySelector('.collection-content')) return;
    
    // Filter functionality
    const filterToggle = document.querySelector('.filter-toggle');
    const sidebar = document.querySelector('.collection-sidebar');
    
    if (filterToggle && sidebar) {
        filterToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // Size filter
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('selected');
            applyFilters();
        });
    });
    
    // Color filter
    const colorOptions = document.querySelectorAll('.color-filter .color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('selected');
            applyFilters();
        });
    });
    
    // Brand filter
    const brandCheckboxes = document.querySelectorAll('.brand-filter input[type="checkbox"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Price filter
    const priceFilterApply = document.querySelector('.price-filter-apply');
    if (priceFilterApply) {
        priceFilterApply.addEventListener('click', applyFilters);
    }
    
    // Sort functionality
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
    
    // Pagination
    const paginationNumbers = document.querySelectorAll('.pagination-number');
    paginationNumbers.forEach(btn => {
        btn.addEventListener('click', function() {
            paginationNumbers.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to top of products
            const productsGrid = document.querySelector('.products-grid');
            if (productsGrid) {
                productsGrid.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function applyFilters() {
    const productCards = document.querySelectorAll('.product-card');
    const selectedSizes = Array.from(document.querySelectorAll('.size-option.selected')).map(el => el.dataset.size);
    const selectedColors = Array.from(document.querySelectorAll('.color-filter .color-option.selected')).map(el => el.dataset.color);
    const selectedBrands = Array.from(document.querySelectorAll('.brand-filter input:checked')).map(el => el.value);
    const minPrice = parseFloat(document.querySelector('.price-min')?.value) || 0;
    const maxPrice = parseFloat(document.querySelector('.price-max')?.value) || Infinity;
    
    let visibleCount = 0;
    
    productCards.forEach(card => {
        let shouldShow = true;
        
        // For demo purposes, we'll use random filtering logic
        // In a real implementation, you'd check actual product data
        
        // Price filter (extract price from card)
        const priceElement = card.querySelector('.price');
        if (priceElement) {
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            if (price < minPrice || price > maxPrice) {
                shouldShow = false;
            }
        }
        
        // Random filter simulation for demo
        if (selectedSizes.length > 0 || selectedColors.length > 0 || selectedBrands.length > 0) {
            shouldShow = Math.random() > 0.3; // 70% chance to show
        }
        
        if (shouldShow) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update product count
    updateProductCount(visibleCount);
}

function sortProducts(sortBy) {
    const productsGrid = document.querySelector('.products-grid');
    const productCards = Array.from(document.querySelectorAll('.product-card'));
    
    productCards.sort((a, b) => {
        switch (sortBy) {
            case 'price-ascending':
                const priceA = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
                const priceB = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
                return priceA - priceB;
                
            case 'price-descending':
                const priceA2 = parseFloat(a.querySelector('.price').textContent.replace('$', ''));
                const priceB2 = parseFloat(b.querySelector('.price').textContent.replace('$', ''));
                return priceB2 - priceA2;
                
            case 'title-ascending':
                const titleA = a.querySelector('h3 a').textContent;
                const titleB = b.querySelector('h3 a').textContent;
                return titleA.localeCompare(titleB);
                
            case 'title-descending':
                const titleA2 = a.querySelector('h3 a').textContent;
                const titleB2 = b.querySelector('h3 a').textContent;
                return titleB2.localeCompare(titleA2);
                
            default:
                return 0;
        }
    });
    
    // Re-append sorted elements
    productCards.forEach(card => {
        productsGrid.appendChild(card);
    });
    
    // Add animation
    productCards.forEach((card, index) => {
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = `fadeIn 0.6s ease ${index * 0.1}s forwards`;
        }, 10);
    });
}

function updateProductCount(count) {
    const productCountElement = document.querySelector('.product-count');
    if (productCountElement) {
        const text = count === 1 ? 'product' : 'products';
        productCountElement.textContent = `${count} ${text}`;
    }
}

// Recently viewed products functionality
function addToRecentlyViewed(productId, productName, productImage, productPrice) {
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    
    // Remove if already exists
    recentlyViewed = recentlyViewed.filter(item => item.id !== productId);
    
    // Add to beginning
    recentlyViewed.unshift({
        id: productId,
        name: productName,
        image: productImage,
        price: productPrice,
        url: `/products/${productId}`
    });
    
    // Keep only last 6 items
    recentlyViewed = recentlyViewed.slice(0, 6);
    
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    displayRecentlyViewed();
}

function displayRecentlyViewed() {
    const container = document.querySelector('.recently-viewed-products');
    if (!container) return;
    
    const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    
    if (recentlyViewed.length === 0) {
        container.parentElement.style.display = 'none';
        return;
    }
    
    container.innerHTML = recentlyViewed.map(item => `
        <div class="product-card">
            <div class="product-image">
                <div class="placeholder-image product-${Math.floor(Math.random() * 8) + 1}"></div>
                <div class="product-actions">
                    <button class="quick-view" data-product="${item.id}">Quick View</button>
                    <button class="add-to-cart" data-product="${item.id}">Add to Cart</button>
                </div>
            </div>
            <div class="product-info">
                <h3><a href="${item.url}">${item.name}</a></h3>
                <div class="product-price">
                    <span class="price">${item.price}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Re-initialize product actions for recently viewed items
    container.querySelectorAll('.quick-view').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            openQuickView(productId);
        });
    });
    
    container.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            addToCart(productId);
        });
    });
}

// Initialize recently viewed on page load
displayRecentlyViewed();

// Add current product to recently viewed if on product page
if (document.querySelector('.product-page')) {
    const productTitle = document.querySelector('.product-title')?.textContent || 'Nike Air Max Pro';
    const productPrice = document.querySelector('.current-price')?.textContent || '$129.99';
    const productId = productTitle.toLowerCase().replace(/\s+/g, '-');
    
    addToRecentlyViewed(productId, productTitle, 'product-1', productPrice);
}

// Additional utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

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