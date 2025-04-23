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
    title: "Professional Dental Clinic Website",
    client: "Taste of Asia",
    date: "December 2024",
    category: "WordPress Website",
    url: "#",
    description:
      "Designed a modern, user-friendly website for a dental clinic, focused on trust-building visuals, smooth navigation, and appointment booking — helping the client boost credibility, attract new patients, and enhance their online presence.",
    technologies: [
      "Professional Website Design",
      "Modern UI",
      "Unique Design",
      "Responsive Design",
      "Fully Responsive",
    ],
    images: [
      "https://i.postimg.cc/HWN6vZmv/image.png",
      "https://i.postimg.cc/C5WGJQW3/image.png",
      "https://i.postimg.cc/nLzky8c6/image.png",
      "https://i.postimg.cc/HsvRjt8D/image.png",
      "https://i.postimg.cc/hj3TVhLj/image.png",
    ],
  },
  {
    id: 5,
    title: "Elegant & Appetizing Restaurant Website Design ",
    client: "SaaSly",
    date: "November 2024",
    category: "WordPress Website",
    url: "#",
    description:
      "Crafted a visually enticing website for a restaurant, emphasizing rich imagery, smooth browsing, and easy reservation — helping the client increase table bookings, showcase their menu beautifully, and enhance their digital presence.",
    technologies: ["WordPress", "Elementor", "CSS", "Responsive Design"],
    images: [
      "https://i.postimg.cc/tCY4pgLC/image.png",
      "https://i.postimg.cc/XqPqYDR1/image.png",
      "https://i.postimg.cc/brnrdRqz/image.png",
      "https://i.postimg.cc/d3RFzNqT/image.png",
    ],
  },
  
  {
    id: 6,
    title: "Stylish & Impactful Personal Website ",
    client: "Urban Mart",
    date: "August 2023",
    category: "WordPress Website",
    url: "#",
    description:
      "Developed a visually stunning personal website, showcasing your work, skills, and achievements — helping the client establish a professional online presence and attract potential clients.",
    technologies: ["WordPress", "Custom Page builder", "Custom Design"],
    images: [
      "https://i.postimg.cc/C5WGJQW3/image.png",
      "https://i.postimg.cc/SKYDmDsZ/image.png",
      "https://placehold.co/600x400/5540fd/ffffff?text=Image+Not+Loaded",
    ],
  },
  // Facebook Ads project Data content
  {
    id: 7,
    title: "E-commerce Sales Campaign & Results",
    client: "Urban Mart",
    date: "May 2024",
    category: "Facebook Ads",
    url: "#",
    description:
      "Designed and managed a Facebook Ads campaigns for an e-commerce store that generated a 350% ROI and increased sales by 75%.",
    technologies: ["Facebook Ads", "Pixel Installations", "Setup Advanced Campaign"],
    images: [
      "https://i.postimg.cc/50fQ9VV9/a8daa715-03f4-445b-b3ba-3d4af829faf3.webp",
      "https://i.postimg.cc/8z1Fb5MN/image.png",
      "https://i.postimg.cc/FFLLCBRR/image.png",
      "https://i.postimg.cc/sD1D0BKJ/image.png",
      "https://i.postimg.cc/DwZvZb1J/image.png",
    ],
  },
  {
    id: 8,
    title: "SLead Generation Campaign",
    client: "LTX BD",
    date: "August 24",
    category: "Facebook Ads",
    url: "#",
    description:
      "Created a Facebook lead generation campaign for a SaaS company that decreased cost per lead by 40% while maintaining lead quality, resulting in 88% conversion rate.",
    technologies: ["WordPress", "Custom Page builder", "Custom Design"],
    images: [
      "https://i.postimg.cc/hGsTdjMQ/67f6ea0e-2255-45de-8cc9-1541d1a1560a.jpg",
      "https://i.postimg.cc/Bb5bKGjb/image.png",
      "https://i.postimg.cc/c4m610q5/image.png",
    ],
  },
  {
    id: 9,
    title: "Ads Funnel creation & Advanced Targeting",
    client: "",
    date: "August 2023",
    category: "Facebook Ads",
    url: "#",
    description:
      "Create High converting ad funnel to create a liftime loyal Customer-base for the business. And Genarte sales consistently targeting and re-targeting ads. best for new brand or to createa a stronger customer base.",
    technologies: ["Facebook Ads", "Sales Funnel Design", "Marketing Plan Creation"],
    images: [
      "https://i.postimg.cc/0Q81y8yN/image.png",
      
      "https://placehold.co/600x400/5540fd/ffffff?text=Image+not+available",
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
