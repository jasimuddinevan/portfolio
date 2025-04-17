// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    client: "FashionHub",
    date: "January 2024",
    category: "WordPress Development",
    url: "https://fashionhub-example.com",
    description:
      "Completely redesigned an outdated e-commerce website for a fashion retailer, focusing on improving user experience and conversion rates.",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Custom PHP",
      "JavaScript",
      "CSS",
      "Responsive Design",
    ],
    images: [
      "https://placehold.co/600x400/5540fd/ffffff?text=FashionHub+Homepage",
      "https://placehold.co/600x400/5540fd/ffffff?text=Product+Category+Page",
      "https://placehold.co/600x400/5540fd/ffffff?text=Mobile+View",
    ],
  },
  {
    id: 2,
    title: "Corporate Website with Booking System",
    client: "ConsultPro",
    date: "October 2023",
    category: "WordPress Development",
    url: "https://consultpro-example.com",
    description:
      "Built a professional website for a consulting firm with an integrated booking system for client appointments and automated notifications.",
    technologies: [
      "WordPress",
      "Custom Plugin Development",
      "JavaScript",
      "MySQL",
      "Bootstrap",
      "API Integration",
    ],
    images: [
      "https://placehold.co/600x400/5540fd/ffffff?text=ConsultPro+Homepage",
      "https://placehold.co/600x400/5540fd/ffffff?text=Booking+System",
      "https://placehold.co/600x400/5540fd/ffffff?text=Admin+Dashboard",
    ],
  },
  {
    id: 3,
    title: "Mobile-First Restaurant Website",
    client: "Tandoori Express",
    date: "September 2023",
    category: "WordPress Development",
    url: "https://tandooriexpress-example.com",
    description:
      "Created a mobile-first restaurant site with online ordering and a responsive reservation system using WordPress.",
    technologies: [
      "WordPress",
      "Responsive Design",
      "WP Plugins",
      "CSS",
      "Elementor",
    ],
    images: [
      "https://placehold.co/600x400/5540fd/ffffff?text=Restaurant+Homepage",
      "https://placehold.co/600x400/5540fd/ffffff?text=Order+System",
      "https://placehold.co/600x400/5540fd/ffffff?text=Mobile+View",
    ],
  },
  {
    id: 4,
    title: "Facebook Ad Campaign for Restaurant Chain",
    client: "Taste of Asia",
    date: "December 2023",
    category: "Facebook Ads",
    url: "https://tasteofasia-example.com",
    description:
      "Ran a geo-targeted ad campaign for a restaurant chain, promoting seasonal offers with 320% ROI.",
    technologies: [
      "Facebook Ads Manager",
      "Audience Targeting",
      "Ad Creative Design",
      "Analytics",
      "A/B Testing",
    ],
    images: [
      "https://placehold.co/600x400/5540fd/ffffff?text=Ad+Creative",
      "https://placehold.co/600x400/5540fd/ffffff?text=Results",
      "https://placehold.co/600x400/5540fd/ffffff?text=Demographics",
    ],
  },
  {
    id: 5,
    title: "Lead Generation Campaign",
    client: "SaaSly",
    date: "November 2023",
    category: "Facebook Ads",
    url: "https://saasly-example.com",
    description:
      "Created a Facebook campaign that reduced cost-per-lead by 40% for a SaaS product while maintaining quality.",
    technologies: ["Facebook Ads", "Lead Generation", "Conversion Tracking"],
    images: [
      "https://placehold.co/600x400/5540fd/ffffff?text=Lead+Ad",
      "https://placehold.co/600x400/5540fd/ffffff?text=Lead+Results",
      "https://placehold.co/600x400/5540fd/ffffff?text=Conversion+Graph",
    ],
  },
  {
    id: 6,
    title: "Local Business Ad Campaign",
    client: "Urban Mart",
    date: "August 2023",
    category: "Facebook Ads",
    url: "https://urbanmart-example.com",
    description:
      "Managed Facebook ads for a local grocery chain that increased footfall by 60% in three locations.",
    technologies: ["Facebook Ads", "Local Business Targeting", "Geotargeting"],
    images: [
      "https://placehold.co/600x400/5540fd/ffffff?text=UrbanMart+Ad",
      "https://placehold.co/600x400/5540fd/ffffff?text=Before+After",
      "https://placehold.co/600x400/5540fd/ffffff?text=In-Store+Sales",
    ],
  },
];

// Variables for project popup
let currentSlide = 0;
let currentProjectId = null;

// Elements
const projectPopup = document.getElementById("projectPopup");
const contactFormPopup = document.getElementById("contactFormPopup");
const projectTitle = document.getElementById("projectTitle");
const projectClient = document.getElementById("projectClient");
const projectDate = document.getElementById("projectDate");
const projectCategory = document.getElementById("projectCategory");
const projectURL = document.getElementById("projectURL");
const projectDescription = document.getElementById("projectDescription");
const projectTech = document.getElementById("projectTech");
const projectImages = document.getElementById("projectImages");
const talkNowBtn = document.getElementById("talkNowBtn");

const contactForm = document.getElementById("contactForm");
const contactFormPage = document.getElementById("contactFormPage");
const formSuccess = document.getElementById("formSuccess");
const formSuccessMseg = document.getElementById("formSuccessMseg");

// Add event listeners for project items
document.addEventListener("DOMContentLoaded", function () {
  // Fix: Attach event listener to all .project-card and get projectId from closest parent
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      const projectId = parseInt(card.getAttribute("data-project-id"));
      if (projectId) {
        openProjectPopup(projectId);
      }
    });
  });

  // Close popups when clicking outside content
  window.addEventListener("click", function (e) {
    if (e.target === projectPopup) closeProjectPopup();
    if (e.target === contactFormPopup) closeContactFormPopup();
  });

  // Close popups with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeProjectPopup();
      closeContactFormPopup();
    }
  });

  // Close buttons
  document.querySelectorAll(".close-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.closest("#projectPopup")) closeProjectPopup();
      else if (this.closest("#contactFormPopup")) closeContactFormPopup();
    });
  });

  // Talk Now button opens contact form
  talkNowBtn.addEventListener("click", openContactFormPopup);

  // popUp Contact form submission
  contactForm.addEventListener("submit", function (e) {
    submitContactForm(e);
  });

  contactFormPage.addEventListener("submit", (e) => {
    e.preventDefault();
    submitContactForm(e);
  });
});

// Open project popup
function openProjectPopup(projectId) {
  // Find project data by ID
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return;

  currentProjectId = projectId;

  // Set project details
  projectTitle.textContent = project.title;
  projectClient.textContent = project.client;
  projectDate.textContent = project.date;
  projectCategory.textContent = project.category;
  projectURL.textContent = project.url;
  projectURL.href = project.url;
  projectDescription.textContent = project.description;

  // Set technologies
  projectTech.innerHTML = "";
  project.technologies.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    projectTech.appendChild(li);
  });

  // Create image slides
  projectImages.innerHTML = "";
  currentSlide = 0;

  project.images.forEach((imgSrc) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.style.backgroundImage = `url(${imgSrc})`;
    projectImages.appendChild(slide);
  });

  updateSlidePosition();

  // Show popup
  projectPopup.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent body scrolling
}

// Close project popup
function closeProjectPopup() {
  projectPopup.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable body scrolling
}

// Open contact form popup
function openContactFormPopup() {
  // Hide success message and show form
  formSuccess.style.display = "none";
  contactForm.style.display = "block";

  // Show popup
  contactFormPopup.style.display = "block";
}

// Close contact form popup
function closeContactFormPopup() {
  contactFormPopup.style.display = "none";
}

// Change image slide
function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;

  currentSlide += direction;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  updateSlidePosition();
}

// Update slide position
function updateSlidePosition() {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;

  projectImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Submit contact form
function submitContactForm(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const phone = e.target.phone.value;
  const email = e.target.email.value;
  const subject = e.target.subject.value;
  const message = e.target.message.value;

  // Prepare data for email (to be implemented later)
  /*
const emailData = {
  name: name,
  phone: phone,
  email: email,
  subject: subject,
  message: message
};
// Send email code will go here
*/

  // Redirect to WhatsApp with form data
  const whatsappNumber = "8801609899713"; // Replace with your actual WhatsApp number
  const whatsappText = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
  const whatsappURL = `https://wa.me/${whatsappNumber}/?text=${whatsappText}`;

  // Open WhatsApp in new tab
  window.open(whatsappURL, "_blank");

  contactFormPage.style.display = "none";
  formSuccessMseg.style.display = "block";

  // Show success message

  // Reset form
  contactFormPage.reset();
}
