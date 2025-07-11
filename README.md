# StepStyle - Shoe eCommerce Website

A modern, responsive eCommerce website built with Shopify Liquid templating, featuring a comprehensive shoe store with dummy products for men and women.

## 🌟 Features

### **Homepage**
- Hero section with call-to-action buttons
- Featured product categories (Men's Sneakers, Women's Heels, Men's Boots, Women's Flats)
- Product showcase with 8 dummy products including ratings, prices, and brands
- Promotional banners highlighting store benefits
- Newsletter signup section
- Responsive design for all devices

### **Product Catalog**
- **Men's Shoes**: Nike Air Max Pro, Adidas Ultra Boost, Timberland Work Boot, Leather Loafer, Athletic Trainer, Canvas Sneaker, Chelsea Boot
- **Women's Shoes**: Classic Oxford Heel, Platform Sandal, Ballet Flat, Hiking Boot, Dress Pump, Casual Slip-On, Ankle Boot, Mary Jane Flat

### **Navigation & UI**
- Sticky header with dropdown menus
- Mobile-responsive hamburger menu
- Search functionality with overlay and suggestions
- Cart drawer with item management
- Social media integration
- Professional footer with links and newsletter

### **Product Pages**
- Image gallery with thumbnails and zoom functionality
- Product variants (size, color, quantity)
- Detailed product information with tabs (Description, Features, Shipping, Care)
- Customer reviews and ratings
- Related products section
- Recently viewed products
- Add to cart and wishlist functionality

### **Collection Pages**
- Advanced filtering (price, brand, size, color)
- Product sorting (price, name, date)
- Pagination
- Sidebar filters with sticky positioning
- Product count display

### **Interactive Features**
- Add to cart with loading states
- Cart count updates
- Quick view modals
- Wishlist functionality
- Recently viewed products (localStorage)
- Product filtering and sorting
- Mobile-optimized touch interactions

## 🏗️ Project Structure

```
├── layout/
│   └── theme.liquid          # Main layout template
├── templates/
│   ├── index.liquid          # Homepage template
│   ├── collection.liquid     # Collection/category pages
│   └── product.liquid        # Individual product pages
├── assets/
│   ├── theme.css            # Main stylesheet (responsive)
│   └── theme.js             # JavaScript functionality
├── sections/               # Reusable page sections
├── snippets/              # Reusable code snippets
└── config/               # Theme configuration
```

## 🎨 Design Features

### **Modern UI/UX**
- Clean, professional design
- Consistent color scheme (primary: #007bff, secondary: #6c757d)
- Inter font family for modern typography
- Smooth animations and transitions
- Hover effects and interactive elements

### **Responsive Design**
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Flexible grid layouts
- Touch-friendly buttons and interactions
- Optimized images and content scaling

### **Color-Coded Product Categories**
- Men's Sneakers: Blue gradient
- Women's Heels: Red/gold gradient
- Men's Boots: Brown gradient
- Women's Flats: Pink gradient
- Each product has unique gradient backgrounds

## 🛠️ Technologies Used

- **Shopify Liquid**: Templating language for dynamic content
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid and Flexbox
- **Vanilla JavaScript**: Interactive functionality
- **SVG Icons**: Scalable vector graphics
- **LocalStorage**: Recently viewed products
- **CSS Grid & Flexbox**: Responsive layouts

## 🚀 Setup Instructions

1. **Clone or Download** the project files to your local environment

2. **File Structure**: Ensure all files are in their respective directories as shown above

3. **Shopify Integration** (if using with Shopify):
   - Upload files to your Shopify theme directory
   - Follow Shopify's theme development guidelines
   - Customize liquid variables as needed

4. **Local Development**:
   - Open `layout/theme.liquid` in a web server
   - Ensure all asset paths are correctly referenced
   - Test responsive design on different screen sizes

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## 🛒 Product Data

The website includes 16 dummy products with realistic data:

### **Brands Featured**
- Nike, Adidas, Converse, Timberland
- Jimmy Choo, Tory Burch, Cole Haan, Steve Madden

### **Price Range**
- $65.99 - $299.99
- Sale items with original pricing shown
- Dynamic pricing display

### **Product Features**
- Star ratings (1-5 stars)
- Review counts (67-256 reviews)
- Product badges (New, Sale, Best Seller, Limited Edition)
- Multiple color and size options

## 🎯 Key Features Implemented

### **E-commerce Functionality**
- ✅ Product catalog with filtering
- ✅ Shopping cart management
- ✅ Wishlist functionality
- ✅ Product search
- ✅ Recently viewed items
- ✅ Customer reviews
- ✅ Related products
- ✅ Newsletter signup

### **Performance Optimizations**
- ✅ Efficient CSS organization
- ✅ Optimized JavaScript loading
- ✅ Responsive image handling
- ✅ Smooth animations
- ✅ Fast loading times

### **User Experience**
- ✅ Intuitive navigation
- ✅ Clear call-to-actions
- ✅ Mobile-friendly design
- ✅ Accessibility considerations
- ✅ Professional appearance

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### **Colors**
Modify the CSS custom properties in `assets/theme.css`:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
}
```

### **Typography**
Change the font family in the CSS:
```css
body {
  font-family: 'Your-Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### **Product Data**
Update the Liquid arrays in `templates/collection.liquid` and `templates/index.liquid` to modify product information.

## 📈 Performance Features

- **Lazy Loading**: Images load as needed
- **Optimized CSS**: Organized and efficient stylesheets
- **Minimal JavaScript**: Only essential functionality
- **Compressed Assets**: Optimized for fast loading
- **Caching**: Browser-friendly asset caching

## 🤝 Contributing

This is a demonstration project showcasing Shopify Liquid templating and modern web development practices. Feel free to use this as a foundation for your own e-commerce projects.

## 📄 License

This project is created for educational and demonstration purposes. All brand names and logos used are for demonstration only.

---

**StepStyle** - Step Into Style with Every Purchase! 👟✨