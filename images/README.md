# Images Directory

This directory is for storing all image assets used in the website.

## Recommended Folder Structure

```
images/
├── portfolio/          # Portfolio project images
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── project-3.jpg
├── clients/           # Client logo images
│   ├── client-1.png
│   ├── client-2.png
│   └── ...
├── team/              # Team/founder images
│   └── team-photo.jpg
└── icons/             # Custom icons (if needed)
```

## Image Guidelines

- **Portfolio Images**: Use high-quality images (1920x1080px recommended, 16:9 aspect ratio)
- **Client Logos**: PNG format with transparent backgrounds, max height 80px
- **Team Images**: 4:3 aspect ratio, high resolution
- **File Naming**: Use lowercase with hyphens (e.g., `project-name.jpg`)

## Usage in HTML

Update the HTML to use actual images:

```html
<!-- Portfolio Image -->
<div class="portfolio-image">
    <img src="images/portfolio/project-1.jpg" alt="Project Name">
</div>

<!-- Client Logo -->
<img src="images/clients/client-1.png" alt="Client Name" class="logo-placeholder">

<!-- Team Image -->
<div class="about-image">
    <img src="images/team/team-photo.jpg" alt="Team Photo">
</div>
```

