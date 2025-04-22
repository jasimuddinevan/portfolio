// Sample project data - replace with your actual projects
emailjs.init("sHkPpPBJ0Kt6sSyWV"); // এখানে তোমার EmailJS public key বসাও
const projectsData = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    client: "THESUS",
    date: "January 2024",
    category: "WordPress Development",
    url: "#",
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
      "https://i.postimg.cc/wTv1fzHL/image.png/ffffff?text=FashionHub+Homepage",
      "https://i.postimg.cc/brCgR4d9/image.png/ffffff?text=Product+Category+Page",
      "https://i.postimg.cc/C5dwNFDK/image.png/ffffff?text=Mobile+View",
    ],
  },
  {
    id: 2,
    title: "Blogging Website Design, $1–4K/month revenue",
    client: "ConsultPro",
    date: "October 2023",
    category: "WordPress Development",
    url: "",
    description:
      "Built a custom WordPress blogging website for an author, with a focus on clean design and seamless user experience — consistently generating impressive monthly revenue.",
    technologies: [
      "WordPress",
      "Custom Plugin Development",
      "",
      "MySQL",
      "Elementor",
      "Clean Design",
    ],
    images: [
      "https://i.postimg.cc/9fvgsDPw/Blog-Store-Website-Template-scaled.jpg",
      "https://i.postimg.cc/J7ckGK7Y/image.png",
      "https://i.postimg.cc/htpFjkN4/image.png",
      "https://smartblogger.com/wp-content/uploads/2022/01/blog-design-maria-killam-1.jpg",
      "https://i.postimg.cc/vTkFQfKr/blog-design-examples.png",
    ],
  },
  {
    id: 3,
    title: "Modern Real Estate Website Design ",
    client: "Tandoori Properties",
    date: "September 2023",
    category: "WordPress Development",
    url: "#",
    description:
      "Developed a feature-rich real estate website tailored for property listings, with a sleek interface, intuitive navigation, and integrated search filters — helping the client attract high-value leads and showcase properties effortlessly.",
    technologies: [
      "WordPress",
      "Responsive Design",
      "Elementor",
      "CSS",
      "Custom development",
    ],
    images: [
      "https://i.postimg.cc/br1pMGZm/image.png",
      "https://i.postimg.cc/nLbmXWm5/image.png",
      "https://i.postimg.cc/26Jr5sbL/image.png",
      "https://i.postimg.cc/6qJ6csWJ/image.png",
      "https://i.postimg.cc/Bb49tJZ6/image.png",
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
    document.getElementById("contactFormPopup").style.display = "none";
  });

  contactFormPage.addEventListener("submit", (e) => {
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
// Initialize EmailJS

function submitContactForm(e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const phone = form.phone.value;
  const email = form.email.value;
  const subject = form.subject.value;
  const message = form.message.value;

  // WhatsApp redirect
  const whatsappNumber = "8801609899713"; // তোমার WhatsApp নাম্বার
  const whatsappText = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
  const whatsappURL = `https://wa.me/${whatsappNumber}/?text=${whatsappText}`;
  window.open(whatsappURL, "_blank");

  // Send Email via EmailJS
  emailjs
    .sendForm("service_v37td2n", "template_mvpvui8", form)
    .then(() => {
      document.getElementById("contactFormPage").style.display = "none";
      document.getElementById("formSuccessMseg").style.display = "block";
      form.reset();
    })
    .catch(() => {});
}
