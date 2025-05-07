/* Base Styles */
:root {
  --color-primary: #4A90E2;
  --color-secondary: #A5D6A7;
  --color-accent: #FFF9C4;
  --color-background: #FFFFFF;
  --color-text: #333333;
  --color-text-light: #666666;
  --color-border: #EEEEEE;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --border-radius: 8px;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Accounts for fixed header */
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-background);
}

a {
  text-decoration: none;
  color: var(--color-primary);
  transition: var(--transition);
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background-color: var(--color-primary);
  margin: 10px auto 0;
}

.btn {
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 500;
  border: 2px solid var(--color-primary);
  cursor: pointer;
  transition: var(--transition);
}

.btn:hover {
  background-color: transparent;
  color: var(--color-primary);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: white;
}

.center-btn {
  text-align: center;
  margin-top: 2rem;
}

.alt-bg {
  background-color: #F9F9F9;
}

/* Header Styles */
header {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.logo a {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.nav-menu {
  display: flex;
  gap: 20px;
}

.nav-menu a {
  color: var(--color-text);
  font-weight: 500;
  padding: 5px 0;
  position: relative;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: var(--transition);
}

.nav-menu a:hover::after,
.nav-menu a.active::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 20px;
  position: relative;
}

.mobile-menu-btn span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  position: absolute;
  left: 0;
  transition: var(--transition);
}

.mobile-menu-btn span:nth-child(1) {
  top: 0;
}

.mobile-menu-btn span:nth-child(2) {
  top: 9px;
}

.mobile-menu-btn span:nth-child(3) {
  top: 18px;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg);
  top: 9px;
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg);
  top: 9px;
}

/* Hero Section */
.hero {
  background-color: var(--color-accent);
  padding: 80px 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  color: var(--color-text);
}

.hero h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--color-primary);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: var(--color-text-light);
}

/* Products Section */
.products-section {
  padding: 80px 0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.product-card {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 30px;
  text-align: center;
  transition: var(--transition);
}

.product-card:hover {
  transform: translateY(-10px);
}

.product-icon {
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.product-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.price {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 15px;
}

.product-card p {
  color: var(--color-text-light);
}

/* Values Banner */
.values-banner {
  background-color: var(--color-primary);
  color: white;
  padding: 30px 0;
}

.values-banner .container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.emoji {
  font-size: 1.5rem;
}

/* About Section */
.about-section {
  padding: 80px 0;
}

.about-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.about-content p {
  margin-bottom: 20px;
}

.value-list {
  margin: 30px 0;
}

.value-list li {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.value-list i {
  color: var(--color-primary);
}

.image-placeholder {
  background-color: var(--color-secondary);
  height: 300px;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: white;
}

/* Testimonials Section */
.testimonials-section {
  padding: 80px 0;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial-card {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 30px;
  position: relative;
}

.quote-icon {
  color: var(--color-primary);
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.testimonial-author {
  text-align: right;
  font-weight: 600;
  margin-top: 15px;
}

/* Packages Section */
.packages-section {
  padding: 80px 0;
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.package-card {
  display: flex;
  flex-direction: column;
}

.package-header {
  margin-bottom: 20px;
}

.package-features {
  text-align: left;
  margin-bottom: 20px;
}

.package-features li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.package-features i {
  color: var(--color-primary);
}

/* Contact Section */
.contact-section {
  padding: 80px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.contact-form {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 30px;
}

.contact-form h3 {
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.error-message {
  color: #E53935;
  font-size: 0.875rem;
  margin-top: 5px;
  display: none;
}

.contact-info h3 {
  margin-bottom: 20px;
  text-align: center;
}

.info-card {
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 30px;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
}

.info-item i {
  font-size: 1.2rem;
  color: var(--color-primary);
  margin-top: 3px;
}

.info-item h4 {
  margin-bottom: 5px;
}

.business-hours {
  background-color: var(--color-accent);
  border-radius: var(--border-radius);
  padding: 20px;
  margin-bottom: 30px;
}

.business-hours h3 {
  margin-bottom: 15px;
  text-align: left;
}

.business-hours ul li {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.business-hours span {
  font-weight: 500;
}

.map-link {
  text-align: center;
}

/* FAQ Section */
.faq-section {
  padding: 60px 0;
}

.accordion {
  max-width: 800px;
  margin: 0 auto;
}

.accordion-item {
  margin-bottom: 15px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.accordion-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: white;
  border: none;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.accordion-header:hover {
  background-color: #F5F5F5;
}

.accordion-content {
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.accordion-content.active {
  padding: 20px;
  max-height: 200px;
}

/* Footer */
footer {
  background-color: #333;
  color: white;
  padding: 50px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-logo h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.footer-links h4,
.footer-contact h4 {
  margin-bottom: 15px;
  position: relative;
}

.footer-links h4::after,
.footer-contact h4::after {
  content: '';
  display: block;
  width: 30px;
  height: 2px;
  background-color: var(--color-primary);
  margin-top: 5px;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  color: #CCC;
}

.footer-links a:hover {
  color: white;
}

.footer-contact p {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-contact i {
  color: var(--color-primary);
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
}

/* Scroll to Top Button */
#scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  z-index: 99;
}

#scroll-top.show {
  opacity: 1;
  visibility: visible;
}

/* Media Queries */
@media (max-width: 992px) {
  .about-wrapper,
  .contact-grid {
      grid-template-columns: 1fr;
  }
  
  .about-image {
      order: -1;
  }
}

@media (max-width: 768px) {
  .nav-menu {
      position: fixed;
      top: 70px;
      left: -100%;
      flex-direction: column;
      background-color: white;
      width: 100%;
      text-align: center;
      transition: 0.3s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
      padding: 20px 0;
      height: calc(100vh - 70px);
      overflow-y: auto;
  }

  .nav-menu.active {
      left: 0;
  }

  .mobile-menu-btn {
      display: block;
  }

  .hero h1 {
      font-size: 2.5rem;
  }

  .hero h2 {
      font-size: 1.8rem;
  }

  .section-title {
      font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .hero h1 {
      font-size: 2rem;
  }

  .hero h2 {
      font-size: 1.5rem;
  }

  .hero p {
      font-size: 1rem;
  }

  .section-title {
      font-size: 1.5rem;
  }
}
