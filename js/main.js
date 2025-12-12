// Loading Screen
const loaderScreen = document.getElementById('loaderScreen');
const body = document.body;

// Hide loader after 1 second and show main content
window.addEventListener('load', () => {
    setTimeout(() => {
        loaderScreen.classList.add('hidden');
        body.classList.add('loaded');
        
        // Remove loader from DOM after animation completes
        setTimeout(() => {
            loaderScreen.style.display = 'none';
        }, 500);
    }, 1000);
});

// Navigation scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');

// Check for saved theme preference or default to light mode
const getTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    // Default to light mode
    return 'light';
};

// Apply theme
const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icons
    const moonIcons = document.querySelectorAll('.theme-icon-moon');
    const sunIcons = document.querySelectorAll('.theme-icon-sun');
    
    if (theme === 'dark') {
        moonIcons.forEach(icon => icon.style.display = 'none');
        sunIcons.forEach(icon => icon.style.display = 'inline-block');
        themeToggle.classList.add('active');
        mobileThemeToggle.classList.add('active');
    } else {
        moonIcons.forEach(icon => icon.style.display = 'inline-block');
        sunIcons.forEach(icon => icon.style.display = 'none');
        themeToggle.classList.remove('active');
        mobileThemeToggle.classList.remove('active');
    }
};

// Initialize theme on page load
const currentTheme = getTheme();
applyTheme(currentTheme);

// Toggle theme
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
};

// Event listeners
themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', () => {
    toggleTheme();
    // Close mobile menu after toggling
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
});

// Listen for system theme changes (only if user hasn't set a preference)
// Removed - website defaults to light mode regardless of system preference

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe social proof bar separately for fade-in
const socialProof = document.querySelector('.social-proof');
if (socialProof) {
    observer.observe(socialProof);
}

// Observe care intro for fade-in
const careIntro = document.querySelector('.care-intro');
if (careIntro) {
    observer.observe(careIntro);
}

// Staggered animation for portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

portfolioItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    portfolioObserver.observe(item);
});

// Custom cursor (optional, can be disabled)
const cursor = document.getElementById('cursor');
let cursorEnabled = false; // Set to true to enable custom cursor

if (cursorEnabled) {
    cursor.style.display = 'block';
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    document.querySelectorAll('a, button, .portfolio-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
}

// Copy to clipboard functionality
const contactCopyItems = document.querySelectorAll('.contact-copy');
contactCopyItems.forEach(item => {
    item.addEventListener('click', async () => {
        const textToCopy = item.getAttribute('data-copy');
        const feedback = item.querySelector('.copy-feedback');
        
        try {
            await navigator.clipboard.writeText(textToCopy);
            
            // Show feedback
            if (feedback) {
                feedback.classList.add('show');
                setTimeout(() => {
                    feedback.classList.remove('show');
                }, 2000);
            }
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                if (feedback) {
                    feedback.classList.add('show');
                    setTimeout(() => {
                        feedback.classList.remove('show');
                    }, 2000);
                }
            } catch (err) {
                console.error('Failed to copy:', err);
            }
            document.body.removeChild(textArea);
        }
    });
});

// Initialize EmailJS
emailjs.init('CF5SEkDPlL6kVzk1o');

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
        // Service ID: service_h1h99gh
        // Template ID: template_usqno7l
        await emailjs.sendForm('service_h1h99gh', 'template_usqno7l', contactForm);
        
        // Success - change button text
        submitButton.textContent = 'Message Sent Successfully';
        submitButton.style.background = '#10B981'; // Green color for success
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.textContent = originalButtonText;
            submitButton.style.background = ''; // Reset to original color
        }, 3000);
    } catch (error) {
        console.error('Email sending failed:', error);
        submitButton.textContent = 'Error - Try Again';
        submitButton.style.background = '#EF4444'; // Red color for error
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.textContent = originalButtonText;
            submitButton.style.background = ''; // Reset to original color
            submitButton.disabled = false;
        }, 3000);
        return; // Don't re-enable immediately
    }
    
    // Re-enable button after success
    submitButton.disabled = false;
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.getElementById('hero');
    const heroContent = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        if (heroContent) {
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    }
});

// Body opacity is now handled by the loader screen

// FAQ Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Staggered animation for care plan cards
const careCards = document.querySelectorAll('.care-card');
const careObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, observerOptions);

careCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    careObserver.observe(card);
});

// Comparison table row animation
const comparisonRows = document.querySelectorAll('.comparison-table tbody tr');
const tableObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 50);
        }
    });
}, observerOptions);

comparisonRows.forEach(row => {
    row.style.opacity = '0';
    row.style.transform = 'translateX(-20px)';
    row.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    tableObserver.observe(row);
});

// Animated statistics counters and bars
const statCards = document.querySelectorAll('.stat-card');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            
            // Animate number counter
            const numberElement = entry.target.querySelector('.stat-number');
            const targetValue = parseInt(numberElement.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = targetValue / (duration / 16); // 60fps
            let current = 0;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= targetValue) {
                    numberElement.textContent = targetValue + '%';
                    clearInterval(counter);
                } else {
                    numberElement.textContent = Math.floor(current) + '%';
                }
            }, 16);
            
            // Animate progress bar
            const barElement = entry.target.querySelector('.stat-bar');
            const percent = barElement.getAttribute('data-percent');
            setTimeout(() => {
                barElement.style.width = percent + '%';
            }, 300);
        }
    });
}, { threshold: 0.5 });

statCards.forEach(card => {
    statsObserver.observe(card);
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');
const logo = document.querySelector('.logo');
const heroSection = document.getElementById('hero');

// Make logo clickable to scroll to top
if (logo) {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Show/hide scroll button based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
    const isPastHero = scrollPosition > heroHeight - 100;

    // Show scroll button only after hero section
    if (scrollToTopBtn) {
        if (isPastHero) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
});

// Scroll to top functionality
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
