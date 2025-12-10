# Web Design Agency Website

A modern, professional single-page website for a web design agency.

## Project Structure

```
Web/
├── index.html          # Main HTML file
├── css/
│   └── styles.css     # All styles and CSS custom properties
├── js/
│   └── main.js        # JavaScript for interactions and animations
├── images/
│   └── README.md      # Image organization guide
└── README.md          # This file
```

## Features

- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern Design**: Clean, minimal aesthetic with smooth animations
- **Performance Optimized**: Separated CSS and JS for better caching
- **Accessible**: Semantic HTML5 with proper ARIA labels
- **Professional Structure**: Organized codebase with separate concerns

## Getting Started

### View the Website

A local development server is running on **http://localhost:8000**

Open your browser and navigate to:
```
http://localhost:8000
```

### Development

1. **HTML**: Edit `index.html` for structure and content
2. **Styles**: Edit `css/styles.css` for all styling
3. **JavaScript**: Edit `js/main.js` for interactions and animations
4. **Images**: Add images to `images/` folder (see `images/README.md` for structure)

### Adding Images

1. Place portfolio images in `images/portfolio/`
2. Place client logos in `images/clients/`
3. Place team images in `images/team/`
4. Update HTML to reference the images:

```html
<!-- Portfolio Image -->
<div class="portfolio-image">
    <img src="images/portfolio/project-1.jpg" alt="Project Name">
</div>
```

## Customization

### Brand Name
Replace `[BRAND NAME]` throughout `index.html` with your actual brand name.

### Colors
Edit CSS custom properties in `css/styles.css`:
```css
:root {
    --color-accent: #0066FF;  /* Change accent color */
    --color-dark: #1A1A2E;    /* Change dark text color */
    /* ... */
}
```

### Content
- Update all placeholder text in `index.html`
- Replace placeholder images with actual project images
- Update contact information
- Add real testimonials

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter, Plus Jakarta Sans)
- Font Awesome Icons

## License

This project is ready for production use. Customize as needed for your brand.

