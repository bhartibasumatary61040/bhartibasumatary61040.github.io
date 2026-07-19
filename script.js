"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const body = document.body;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const state = {
    activeFilter: "All",
    projectSearch: "",
    modalProject: null,
    testimonialIndex: 0
  };

  const typingPhrases = [
    "Selenium automation architecture",
    "Playwright-ready QA workflows",
    "API validation and REST Assured testing",
    "CI/CD aligned regression engineering",
    "Recruiter-friendly quality leadership"
  ];

  const experienceData = [
    {
      company: "Brain Vision Technology",
      initials: "BV",
      title: "QA Engineer",
      project: "Built Technology ODC",
      date: "Mar 2024 - Present",
      domain: "Construction Finance / Real Estate (Banking)",
      location: "Pune, India",
      tools: ["Selenium", "Java", "TestNG", "Maven", "Jenkins", "REST Assured", "SQL", "Postman", "JIRA"],
      highlights: [
        "Designed comprehensive test plans and test cases for web applications.",
        "Built and optimized a hybrid automation framework using Selenium WebDriver, Java, TestNG, and Maven.",
        "Integrated automated test suites with Jenkins CI/CD pipelines to accelerate regression cycles.",
        "Implemented a BDD framework using Cucumber for stronger QA and business collaboration.",
        "Performed API testing using Postman, automated APIs using REST Assured, and validated backend data using SQL.",
        "Designed and executed 100+ test cases for loan management workflows with strong defect detection.",
        "Managed defect reporting through JIRA and improved resolution cycles through detailed reporting."
      ]
    },
    {
      company: "Innominds Software",
      initials: "IN",
      title: "QA Engineer",
      project: "Auto Payment Integration with Credit Card",
      date: "Sep 2023 - Nov 2023",
      domain: "Telecom / Payment Integration",
      location: "Pune, India",
      tools: ["Selenium", "Java", "TestNG", "SQL", "Postman", "JIRA"],
      highlights: [
        "Developed Selenium WebDriver automation scripts using Java and TestNG.",
        "Tested real-time payment systems to ensure seamless bill payment workflows.",
        "Defined end-to-end test scenarios for bill generation, payment processing, and confirmations.",
        "Examined billing and payment data using SQL queries to ensure integrity and consistency.",
        "Analyzed test execution results and prepared quality-readiness reports for release decisions."
      ]
    },
    {
      company: "Cybage Software",
      initials: "CY",
      title: "Software Engineer (QA)",
      project: "Global Banking Platform",
      date: "Jul 2022 - Jun 2023",
      domain: "Banking",
      location: "Pune, India",
      tools: ["Selenium", "Java", "Postman", "SQL", "JIRA", "Zephyr", "Agile Scrum"],
      highlights: [
        "Built automation solutions for banking workflows using Selenium WebDriver with Java.",
        "Handled API validation using Postman for reliable service responses.",
        "Covered functional, regression, and integration testing across multiple modules.",
        "Verified backend data accuracy using SQL queries.",
        "Recorded and managed defects through JIRA in Agile Scrum delivery teams."
      ]
    },
    {
      company: "Web Minds IT Solution",
      initials: "WM",
      title: "Software Engineer",
      project: "Assessment Lab",
      date: "Sep 2020 - Jun 2022",
      domain: "EdTech / Online Examination Platform",
      location: "Pune, India",
      tools: ["Manual Testing", "Postman", "JIRA", "Azure DevOps", "Cross-Browser Testing"],
      highlights: [
        "Structured and implemented manual test cases for an online examination platform.",
        "Oversaw end-to-end user flows including login, submission, and results processing.",
        "Strengthened security and integrity checks for examination workflows.",
        "Enhanced product stability through functional and regression testing.",
        "Logged defects and ensured timely resolution using JIRA."
      ]
    }
  ];

  const projectData = [
    {
      title: "E-commerce Backend System",
      category: "Backend",
      type: "Java / Spring Boot",
      repo: "https://github.com/bhartibasumatary61040/Major-ECommerce-App",
      demo: "",
      summary: "A complete backend e-commerce system built using Java and Spring Boot. It supports authentication, product management, cart, and payments.",
      tags: ["Java", "Spring Boot", "REST API", "MySQL"],
      highlights: [
        "Authentication, product management, cart, and payment-focused backend modules.",
        "Designed for modular service handling and REST API driven workflows.",
        "Useful as a backend engineering showcase within the QA portfolio."
      ]
    },
    {
      title: "Employee Management Backend",
      category: "Backend",
      type: "CRUD API",
      repo: "https://github.com/bhartibasumatary61040/Employee-Management-Backend",
      demo: "",
      summary: "Backend system built using Java and Spring Boot for managing employee data with REST APIs for CRUD operations.",
      tags: ["Java", "Spring Boot", "REST API", "MySQL"],
      highlights: [
        "Employee data management via clear CRUD endpoints.",
        "Strong fit for API validation and backend testing showcases.",
        "Useful for demonstrating API contract coverage and data verification thinking."
      ]
    },
    {
      title: "ATM Functionality System",
      category: "Core Java",
      type: "OOP Simulation",
      repo: "https://github.com/bhartibasumatary61040/ATMFunctionality",
      demo: "",
      summary: "A banking system simulation built using Java with authentication, balance, deposit, withdrawal, and transaction features.",
      tags: ["Java", "OOP", "File Handling", "Logic Building"],
      highlights: [
        "Core Java design with transaction-focused workflow simulation.",
        "Demonstrates logic building, state management, and domain-style thinking.",
        "Useful for recruiter review of Java fundamentals and structure."
      ]
    },
    {
      title: "Snake Game",
      category: "Core Java",
      type: "Game Logic",
      repo: "https://github.com/bhartibasumatary61040/SnakeGame",
      demo: "",
      summary: "A classic snake game built using Java demonstrating game logic and problem-solving skills.",
      tags: ["Java", "Game Logic", "OOP", "Problem Solving"],
      highlights: [
        "Shows event-driven logic and interactive Java problem solving.",
        "Highlights clean thinking beyond enterprise testing frameworks.",
        "Useful as a portfolio contrast to QA-specific and backend projects."
      ]
    },
    {
      title: "Car Rental System",
      category: "Core Java",
      type: "System Design",
      repo: "https://github.com/bhartibasumatary61040/CarRentalSystem",
      demo: "",
      summary: "A system for booking and managing car rentals with pricing, availability, and customer handling.",
      tags: ["Java", "OOP", "System Design", "Logic Building"],
      highlights: [
        "Booking and availability management with customer and pricing logic.",
        "Demonstrates modeling of real-world entities and operational workflows.",
        "Supports recruiter evaluation of system design thinking in Java."
      ]
    },
    {
      title: "Java DSA Mastery",
      category: "DSA",
      type: "Algorithms",
      repo: "https://github.com/bhartibasumatary61040/JavaDSAMastery",
      demo: "",
      summary: "Collection of data structures and algorithms implemented in Java for stronger problem-solving.",
      tags: ["Java", "DSA", "Algorithms", "Problem Solving"],
      highlights: [
        "Algorithm and data structure implementations for deeper problem-solving capability.",
        "Helpful for interviews and coding assessment readiness.",
        "Adds engineering depth alongside automation and QA work."
      ]
    },
    {
      title: "Cucumber Test Automation Framework",
      category: "Automation",
      type: "BDD Framework",
      repo: "https://github.com/bhartibasumatary61040/-Cucumber-Test-Automation-Framework",
      demo: "",
      summary: "BDD automation framework using Selenium, Java, and Cucumber with reusable steps and maintainable test structure.",
      tags: ["Selenium", "Java", "Cucumber", "TestNG", "POM", "BDD"],
      highlights: [
        "BDD-oriented reusable framework with Cucumber integration.",
        "Strong alignment with stakeholder-readable automated scenarios.",
        "Highlights maintainable test architecture and framework design."
      ]
    },
    {
      title: "Core Java Programs",
      category: "Core Java",
      type: "Language Fundamentals",
      repo: "https://github.com/bhartibasumatary61040/CoreJava-ALL",
      demo: "",
      summary: "Programs covering OOP, collections, exception handling, and problem-solving in Core Java.",
      tags: ["Java", "OOP", "Collections", "Exception Handling", "Problem Solving"],
      highlights: [
        "Fundamental Java concept coverage in one repository.",
        "Useful for demonstrating learning depth and structured practice.",
        "Supports the broader technical story behind automation engineering."
      ]
    },
    {
      title: "Selenium TestNG Automation Framework",
      category: "Automation",
      type: "Hybrid Automation",
      repo: "https://github.com/bhartibasumatary61040/Selenium-testng-Automation-Framwork",
      demo: "",
      summary: "Automation framework using Selenium WebDriver, TestNG, and Page Object Model for maintainable UI testing.",
      tags: ["Selenium", "Java", "TestNG", "POM", "Data Driven"],
      highlights: [
        "Selenium + TestNG implementation with maintainable Page Object Model structure.",
        "Fits directly with the QA automation positioning of the portfolio.",
        "Useful for hiring teams looking for framework-oriented QA engineers."
      ]
    },
    {
      title: "Spring User Service",
      category: "Backend",
      type: "Microservice API",
      repo: "https://github.com/bhartibasumatary61040/spring-user-service",
      demo: "",
      summary: "Microservice using Spring Boot providing REST APIs for user management.",
      tags: ["Java", "Spring Boot", "REST API", "Microservices"],
      highlights: [
        "User management microservice with REST-driven architecture.",
        "Useful for API testing, service validation, and backend quality discussions.",
        "Supports the portfolio’s balance of testing and engineering capability."
      ]
    }
  ];

  const testimonialData = [
    {
      title: "References available on request",
      text: "Formal testimonials are intentionally not fabricated here. Professional references can be shared during the hiring process.",
      author: "Reference-ready portfolio note"
    },
    {
      title: "Cross-functional collaboration",
      text: "Existing work history shows close collaboration with developers, product owners, and Agile teams to improve quality earlier in the lifecycle.",
      author: "Validated from current portfolio and resume"
    },
    {
      title: "Measured delivery impact",
      text: "Automation initiatives already documented in the resume reduced manual effort by 40% and improved test coverage by 30%.",
      author: "Verified portfolio impact highlight"
    }
  ];

  const elements = {
    loader: document.getElementById("page-loader"),
    themeToggle: document.getElementById("theme-toggle"),
    navToggle: document.getElementById("nav-toggle"),
    navMenu: document.getElementById("nav-menu"),
    navLinks: Array.from(document.querySelectorAll(".nav-link")),
    typingText: document.getElementById("typing-text"),
    scrollProgress: document.getElementById("scroll-progress-bar"),
    backToTop: document.getElementById("back-to-top"),
    cursorDot: document.getElementById("cursor-dot"),
    cursorGlow: document.getElementById("cursor-glow"),
    mouseGlow: document.getElementById("mouse-glow"),
    projectFilters: document.getElementById("project-filters"),
    projectSearch: document.getElementById("project-search"),
    projectsGrid: document.getElementById("projects-grid"),
    experienceTimeline: document.getElementById("experience-timeline"),
    modal: document.getElementById("project-modal"),
    modalBackdrop: document.getElementById("modal-backdrop"),
    modalClose: document.getElementById("modal-close"),
    modalBody: document.getElementById("modal-body"),
    githubStats: document.getElementById("github-stats"),
    repoList: document.getElementById("repo-list"),
    languageBreakdown: document.getElementById("language-breakdown"),
    activityHeatmap: document.getElementById("activity-heatmap"),
    activityCaption: document.getElementById("activity-caption"),
    testimonialTrack: document.getElementById("testimonial-track"),
    testimonialPrev: document.getElementById("testimonial-prev"),
    testimonialNext: document.getElementById("testimonial-next"),
    toastStack: document.getElementById("toast-stack"),
    contactForm: document.getElementById("contact-form"),
    printResume: document.getElementById("print-resume"),
    year: document.getElementById("year"),
    particleCanvas: document.getElementById("particle-canvas")
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("en-IN").format(value);
  }

  function applySavedTheme() {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const theme = savedTheme || preferred;
    root.setAttribute("data-theme", theme);
    updateThemeToggleLabel(theme);
  }

  function updateThemeToggleLabel(theme) {
    if (!elements.themeToggle) return;
    const next = theme === "light" ? "dark" : "light";
    elements.themeToggle.setAttribute("aria-label", `Switch to ${next} theme`);
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    updateThemeToggleLabel(next);
    showToast(`Switched to ${next} theme`);
  }

  function initTypingEffect() {
    if (!elements.typingText) return;
    let phraseIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    const tick = () => {
      const currentPhrase = typingPhrases[phraseIndex];

      if (!deleting) {
        letterIndex += 1;
        elements.typingText.textContent = currentPhrase.slice(0, letterIndex);
        if (letterIndex === currentPhrase.length) {
          deleting = true;
          setTimeout(tick, 1200);
          return;
        }
      } else {
        letterIndex -= 1;
        elements.typingText.textContent = currentPhrase.slice(0, letterIndex);
        if (letterIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        }
      }

      const delay = deleting ? 38 : 62;
      setTimeout(tick, prefersReducedMotion ? 1000 : delay);
    };

    if (prefersReducedMotion) {
      elements.typingText.textContent = typingPhrases[0];
    } else {
      tick();
    }
  }

  function initNavigation() {
    if (!elements.navToggle || !elements.navMenu) return;

    const setMenuState = (isOpen) => {
      elements.navToggle.classList.toggle("is-open", isOpen);
      elements.navToggle.setAttribute("aria-expanded", String(isOpen));
      elements.navMenu.classList.toggle("is-open", isOpen);
      body.classList.toggle("menu-open", isOpen);
    };

    elements.navToggle.addEventListener("click", () => {
      const isOpen = elements.navToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    elements.navLinks.forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });
  }

  function initScrollProgress() {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      elements.scrollProgress.style.width = `${progress}%`;
      elements.backToTop.classList.toggle("is-visible", scrollTop > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initActiveSectionObserver() {
    const sections = Array.from(document.querySelectorAll("main section[id]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const currentId = entry.target.id;
          elements.navLinks.forEach((link) => {
            const active = link.getAttribute("href") === `#${currentId}`;
            link.classList.toggle("active", active);
          });
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function createExperienceCard(item) {
    const previewItems = item.highlights.slice(0, 3);
    const extraItems = item.highlights.slice(3);
    const article = document.createElement("article");
    article.className = "experience-item";
    article.setAttribute("data-aos", "fade-up");

    article.innerHTML = `
      <div class="glass-card experience-card">
        <div class="experience-top">
          <div class="company-wrap">
            <div class="company-logo" aria-hidden="true">${escapeHtml(item.initials)}</div>
            <div>
              <h3>${escapeHtml(item.company)}</h3>
              <p>${escapeHtml(item.title)} · ${escapeHtml(item.project)}</p>
              <p>${escapeHtml(item.domain)} · ${escapeHtml(item.location)}</p>
            </div>
          </div>
          <div class="experience-date">
            <span class="pill">${escapeHtml(item.date)}</span>
          </div>
        </div>

        <ul class="experience-list">
          ${previewItems.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
        </ul>

        ${
          extraItems.length
            ? `
              <div class="experience-extra" aria-hidden="true">
                <ul class="experience-list">
                  ${extraItems.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
                </ul>
              </div>
              <button class="toggle-more" type="button" aria-expanded="false">Show more</button>
            `
            : ""
        }

        <div class="project-chip-row">
          ${item.tools.map((tool) => `<span>${escapeHtml(tool)}</span>`).join("")}
        </div>
      </div>
    `;

    const toggleButton = article.querySelector(".toggle-more");
    const extraPanel = article.querySelector(".experience-extra");

    if (toggleButton && extraPanel) {
      toggleButton.addEventListener("click", () => {
        const expanded = toggleButton.getAttribute("aria-expanded") === "true";
        toggleButton.setAttribute("aria-expanded", String(!expanded));
        toggleButton.textContent = expanded ? "Show more" : "Show less";
        extraPanel.classList.toggle("is-open", !expanded);
        extraPanel.setAttribute("aria-hidden", String(expanded));
      });
    }

    return article;
  }

  function renderExperience() {
    if (!elements.experienceTimeline) return;
    elements.experienceTimeline.innerHTML = "";
    experienceData.forEach((item) => {
      elements.experienceTimeline.appendChild(createExperienceCard(item));
    });
  }

  function buildProjectFilters() {
    const categories = ["All", ...new Set(projectData.map((item) => item.category))];
    elements.projectFilters.innerHTML = categories
      .map(
        (category) => `
          <button
            class="filter-chip"
            type="button"
            role="tab"
            aria-selected="${category === state.activeFilter}"
            data-filter="${escapeHtml(category)}"
          >
            ${escapeHtml(category)}
          </button>
        `
      )
      .join("");

    Array.from(elements.projectFilters.querySelectorAll(".filter-chip")).forEach((button) => {
      button.addEventListener("click", () => {
        state.activeFilter = button.dataset.filter || "All";
        buildProjectFilters();
        renderProjects();
      });
    });
  }

  function getFilteredProjects() {
    const query = state.projectSearch.trim().toLowerCase();

    return projectData.filter((project) => {
      const matchesFilter = state.activeFilter === "All" || project.category === state.activeFilter;
      const searchTarget = [
        project.title,
        project.category,
        project.type,
        project.summary,
        ...project.tags,
        ...project.highlights
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchTarget.includes(query);
      return matchesFilter && matchesSearch;
    });
  }

  function projectCoverMarkup(project) {
    return `
      <div class="project-cover">
        <div class="cover-inner">
          <div class="cover-badges">
            <span>${escapeHtml(project.category)}</span>
            <span>${escapeHtml(project.type)}</span>
          </div>
          <div class="cover-title">
            <strong>${escapeHtml(project.title)}</strong>
            <span>→</span>
          </div>
        </div>
      </div>
    `;
  }

  function createProjectCard(project) {
    const article = document.createElement("article");
    article.className = "glass-card project-card";
    article.setAttribute("data-aos", "fade-up");

    article.innerHTML = `
      ${projectCoverMarkup(project)}
      <div class="project-meta">
        <span>${escapeHtml(project.category)}</span>
        <span>${escapeHtml(project.type)}</span>
      </div>
      <div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
      </div>
      <div class="project-chip-row">
        ${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="card-actions">
        ${
          project.demo
            ? `<a class="btn btn-secondary ripple" href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>`
            : `<button class="btn btn-secondary ripple" type="button" data-no-demo="true">No Live Demo</button>`
        }
        <a class="btn btn-ghost ripple" href="${project.repo}" target="_blank" rel="noreferrer">GitHub</a>
        <button class="btn btn-primary ripple" type="button" data-project-modal="${escapeHtml(project.title)}">View Details</button>
      </div>
    `;

    const noDemoButton = article.querySelector("[data-no-demo]");
    if (noDemoButton) {
      noDemoButton.addEventListener("click", () => showToast("Live demo not available for this repository yet."));
    }

    const detailsButton = article.querySelector("[data-project-modal]");
    if (detailsButton) {
      detailsButton.addEventListener("click", () => openProjectModal(project.title));
    }

    return article;
  }

  function renderProjects() {
    const filtered = getFilteredProjects();
    elements.projectsGrid.innerHTML = "";

    if (!filtered.length) {
      elements.projectsGrid.innerHTML = `
        <div class="empty-state">
          No projects matched the current search or filter. Try a different keyword.
        </div>
      `;
      return;
    }

    filtered.forEach((project) => elements.projectsGrid.appendChild(createProjectCard(project)));
  }

  function openProjectModal(title) {
    const project = projectData.find((item) => item.title === title);
    if (!project || !elements.modal || !elements.modalBody) return;

    state.modalProject = project;
    elements.modalBody.innerHTML = `
      <div class="modal-layout">
        <div class="modal-cover">
          ${projectCoverMarkup(project)}
        </div>
        <div>
          <span class="pill">${escapeHtml(project.category)} · ${escapeHtml(project.type)}</span>
          <h3 id="project-modal-title">${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.summary)}</p>
        </div>
        <div class="project-chip-row">
          ${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
        <div>
          <h4>Highlights</h4>
          <ul class="detail-list">
            ${project.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}
          </ul>
        </div>
        <div class="card-actions">
          ${
            project.demo
              ? `<a class="btn btn-secondary ripple" href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>`
              : `<button class="btn btn-secondary ripple" type="button" data-no-demo="true">No Live Demo</button>`
          }
          <a class="btn btn-primary ripple" href="${project.repo}" target="_blank" rel="noreferrer">Open Repository</a>
        </div>
      </div>
    `;

    const noDemoButton = elements.modalBody.querySelector("[data-no-demo]");
    if (noDemoButton) {
      noDemoButton.addEventListener("click", () => showToast("This project does not currently include a live demo."));
    }

    elements.modal.classList.add("is-open");
    elements.modal.setAttribute("aria-hidden", "false");
    body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    if (!elements.modal) return;
    elements.modal.classList.remove("is-open");
    elements.modal.setAttribute("aria-hidden", "true");
    body.style.overflow = "";
    state.modalProject = null;
  }

  function renderTestimonials() {
    if (!elements.testimonialTrack) return;
    elements.testimonialTrack.innerHTML = testimonialData
      .map(
        (item) => `
          <article class="testimonial-slide">
            <div class="testimonial-content">
              <span class="pill">${escapeHtml(item.title)}</span>
              <p>${escapeHtml(item.text)}</p>
              <strong>${escapeHtml(item.author)}</strong>
            </div>
          </article>
        `
      )
      .join("");

    updateTestimonialCarousel();
  }

  function updateTestimonialCarousel() {
    const slides = Array.from(elements.testimonialTrack.children);
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${state.testimonialIndex * 100}%)`;
      slide.setAttribute("aria-hidden", String(index !== state.testimonialIndex));
    });
  }

  function initCounters() {
    const counters = Array.from(document.querySelectorAll(".counter"));
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target;
          const target = Number(element.getAttribute("data-count") || 0);
          const suffix = target === 5 ? "+" : target === 100 ? "+" : target === 40 || target === 30 ? "%" : "";

          if (prefersReducedMotion) {
            element.textContent = `${formatNumber(target)}${suffix}`;
          } else {
            animateCounter(element, target, suffix);
          }

          observer.unobserve(element);
        });
      },
      { threshold: 0.45 }
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  }

  function animateCounter(element, target, suffix) {
    const duration = 1200;
    const start = performance.now();

    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      element.textContent = `${formatNumber(current)}${suffix}`;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }

  function initBackToTop() {
    elements.backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  function showToast(message) {
    if (!elements.toastStack) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    elements.toastStack.appendChild(toast);
    window.setTimeout(() => {
      toast.remove();
    }, 2600);
  }

  function validateField(input) {
    const field = input.closest(".field");
    const errorEl = field ? field.querySelector(".field-error") : null;
    if (!errorEl) return true;

    let message = "";
    const value = input.value.trim();

    if (!value) {
      message = "This field is required.";
    } else if (input.type === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        message = "Enter a valid email address.";
      }
    }

    errorEl.textContent = message;
    input.setAttribute("aria-invalid", String(Boolean(message)));
    return !message;
  }

  function initContactForm() {
    if (!elements.contactForm) return;

    const inputs = Array.from(elements.contactForm.querySelectorAll("input, textarea"));
    inputs.forEach((input) => {
      input.addEventListener("blur", () => validateField(input));
      input.addEventListener("input", () => {
        if (input.getAttribute("aria-invalid") === "true") validateField(input);
      });
    });

    elements.contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const isValid = inputs.every((input) => validateField(input));
      if (!isValid) {
        showToast("Please fix the highlighted fields before sending.");
        return;
      }

      const nameInput = elements.contactForm.querySelector("#name");
      const emailInput = elements.contactForm.querySelector("#email");
      const subjectInput = elements.contactForm.querySelector("#subject");
      const messageInput = elements.contactForm.querySelector("#message");
      const name = encodeURIComponent(nameInput.value.trim());
      const subject = encodeURIComponent(subjectInput.value.trim());
      const message = encodeURIComponent(
        `${messageInput.value.trim()}\n\nSender: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}`
      );

      showToast("Opening your email app...");
      window.location.href = `mailto:bharatibasumatary61040@gmail.com?subject=${subject}%20from%20${name}&body=${message}`;
      elements.contactForm.reset();
    });
  }

  function initPrintResume() {
    if (!elements.printResume) return;
    elements.printResume.addEventListener("click", () => window.print());
  }

  function initModalEvents() {
    if (!elements.modal) return;
    elements.modalClose.addEventListener("click", closeProjectModal);
    elements.modalBackdrop.addEventListener("click", closeProjectModal);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && elements.modal.classList.contains("is-open")) {
        closeProjectModal();
      }
    });
  }

  function initTestimonials() {
    elements.testimonialPrev.addEventListener("click", () => {
      state.testimonialIndex = (state.testimonialIndex - 1 + testimonialData.length) % testimonialData.length;
      updateTestimonialCarousel();
    });

    elements.testimonialNext.addEventListener("click", () => {
      state.testimonialIndex = (state.testimonialIndex + 1) % testimonialData.length;
      updateTestimonialCarousel();
    });

    if (!prefersReducedMotion) {
      window.setInterval(() => {
        state.testimonialIndex = (state.testimonialIndex + 1) % testimonialData.length;
        updateTestimonialCarousel();
      }, 5000);
    }
  }

  function initProjectSearch() {
    elements.projectSearch.addEventListener("input", (event) => {
      state.projectSearch = event.target.value || "";
      renderProjects();
    });
  }

  function setGithubLoadingState() {
    elements.githubStats.innerHTML = new Array(4)
      .fill("")
      .map(() => `<article class="glass-card github-stat skeleton" style="height: 112px;"></article>`)
      .join("");

    elements.repoList.innerHTML = new Array(4)
      .fill("")
      .map(() => `<article class="repo-item skeleton" style="height: 126px;"></article>`)
      .join("");

    elements.languageBreakdown.innerHTML = new Array(4)
      .fill("")
      .map(
        () => `
          <div class="language-item">
            <div class="skeleton" style="height: 16px; border-radius: 999px;"></div>
            <div class="skeleton" style="height: 10px; border-radius: 999px;"></div>
          </div>
        `
      )
      .join("");

    elements.activityHeatmap.innerHTML = new Array(12)
      .fill("")
      .map(() => `<div class="heat-week">${new Array(7).fill("").map(() => `<span class="heat-day skeleton"></span>`).join("")}</div>`)
      .join("");
  }

  function buildLanguageMap(repos) {
    const totals = new Map();

    repos.forEach((repo) => {
      const language = repo.language || "Other";
      totals.set(language, (totals.get(language) || 0) + 1);
    });

    return Array.from(totals.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([language, count]) => ({ language, count }));
  }

  function renderGithubStats(user, repos) {
    const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    const totalForks = repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);
    const stats = [
      { label: "Public Repos", value: user.public_repos ?? repos.length },
      { label: "Followers", value: user.followers ?? 0 },
      { label: "Stars", value: totalStars },
      { label: "Forks", value: totalForks }
    ];

    elements.githubStats.innerHTML = stats
      .map(
        (item) => `
          <article class="glass-card github-stat">
            <strong>${formatNumber(item.value)}</strong>
            <span>${escapeHtml(item.label)}</span>
          </article>
        `
      )
      .join("");
  }

  function renderRepoList(repos) {
    const topRepos = [...repos]
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 5);

    elements.repoList.innerHTML = topRepos
      .map(
        (repo) => `
          <article class="repo-item">
            <h3><a href="${repo.html_url}" target="_blank" rel="noreferrer">${escapeHtml(repo.name)}</a></h3>
            <p>${escapeHtml(repo.description || "Public repository from the current GitHub profile.")}</p>
            <div class="repo-meta">
              <span>${escapeHtml(repo.language || "Multi-language")}</span>
              <span>★ ${formatNumber(repo.stargazers_count || 0)}</span>
              <span>Updated ${new Date(repo.updated_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderLanguages(repos) {
    const languageMap = buildLanguageMap(repos);
    const total = languageMap.reduce((sum, item) => sum + item.count, 0) || 1;

    elements.languageBreakdown.innerHTML = languageMap
      .map((item) => {
        const percentage = Math.round((item.count / total) * 100);
        return `
          <div class="language-item">
            <header>
              <strong>${escapeHtml(item.language)}</strong>
              <span>${percentage}%</span>
            </header>
            <div class="progress-line"><span style="width: ${percentage}%"></span></div>
          </div>
        `;
      })
      .join("");
  }

  function buildHeatmap(events) {
    const now = new Date();
    const days = [];
    for (let i = 83; i >= 0; i -= 1) {
      const day = new Date(now);
      day.setHours(0, 0, 0, 0);
      day.setDate(now.getDate() - i);
      days.push(day);
    }

    const activityMap = new Map();
    events.forEach((event) => {
      const key = new Date(event.created_at).toDateString();
      activityMap.set(key, (activityMap.get(key) || 0) + 1);
    });

    const max = Math.max(...Array.from(activityMap.values()), 1);
    const weeks = [];

    days.forEach((day, index) => {
      const weekIndex = Math.floor(index / 7);
      if (!weeks[weekIndex]) weeks[weekIndex] = [];
      const count = activityMap.get(day.toDateString()) || 0;
      const ratio = count / max;
      const level = count === 0 ? 0 : ratio < 0.34 ? 1 : ratio < 0.58 ? 2 : ratio < 0.8 ? 3 : 4;
      weeks[weekIndex].push({ date: day, count, level });
    });

    elements.activityHeatmap.innerHTML = weeks
      .map(
        (week) => `
          <div class="heat-week">
            ${week
              .map(
                (day) => `
                  <span
                    class="heat-day"
                    data-level="${day.level}"
                    title="${day.count} public event${day.count === 1 ? "" : "s"} on ${day.date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}"
                  ></span>
                `
              )
              .join("")}
          </div>
        `
      )
      .join("");

    const totalEvents = events.length;
    elements.activityCaption.textContent = totalEvents
      ? `${formatNumber(totalEvents)} recent public events captured`
      : "No recent public events available";
  }

  async function loadGithubData() {
    setGithubLoadingState();
    const username = "bhartibasumatary61040";

    try {
      const [userResponse, repoResponse, eventResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        fetch(`https://api.github.com/users/${username}/events/public?per_page=100`)
      ]);

      if (!userResponse.ok || !repoResponse.ok) {
        throw new Error("GitHub API rate limit or network error");
      }

      const user = await userResponse.json();
      const repos = (await repoResponse.json()).filter((repo) => !repo.fork);
      const events = eventResponse.ok ? await eventResponse.json() : [];

      renderGithubStats(user, repos);
      renderRepoList(repos);
      renderLanguages(repos);
      buildHeatmap(Array.isArray(events) ? events : []);
    } catch (error) {
      elements.githubStats.innerHTML = `
        <article class="glass-card empty-state">GitHub stats could not be loaded right now. The section will work when public API access is available.</article>
      `;
      elements.repoList.innerHTML = `
        <div class="empty-state">Recent repositories are temporarily unavailable from the public API.</div>
      `;
      elements.languageBreakdown.innerHTML = `
        <div class="empty-state">Language insights are temporarily unavailable from the public API.</div>
      `;
      elements.activityHeatmap.innerHTML = `
        <div class="empty-state">Recent public activity could not be loaded.</div>
      `;
      elements.activityCaption.textContent = "Unavailable";
      console.error(error);
    }
  }

  function initAOSAndGSAP() {
    if (window.AOS) {
      window.AOS.init({
        duration: prefersReducedMotion ? 0 : 800,
        once: true,
        offset: 80,
        easing: "ease-out-cubic"
      });
    }

    if (prefersReducedMotion || !window.gsap || !window.ScrollTrigger) return;

    window.gsap.registerPlugin(window.ScrollTrigger);

    window.gsap.from(".hero-copy > *", {
      y: 24,
      opacity: 0,
      duration: 0.85,
      ease: "power2.out",
      stagger: 0.08
    });

    window.gsap.to(".blob-one", {
      y: -20,
      x: 25,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    window.gsap.to(".blob-two", {
      y: 18,
      x: -22,
      duration: 9,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    window.gsap.utils.toArray(".glass-card").forEach((card) => {
      window.gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 88%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  }

  function initMagneticElements() {
    if (prefersReducedMotion) return;
    const elementsToAnimate = Array.from(document.querySelectorAll(".magnetic"));

    elementsToAnimate.forEach((element) => {
      element.addEventListener("mousemove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });

      element.addEventListener("mouseleave", () => {
        element.style.transform = "";
      });
    });
  }

  function initRipples() {
    document.querySelectorAll(".ripple").forEach((element) => {
      element.addEventListener("click", () => {
        element.classList.remove("is-rippling");
        void element.offsetWidth;
        element.classList.add("is-rippling");
        window.setTimeout(() => element.classList.remove("is-rippling"), 600);
      });
    });
  }

  function initCursorEffects() {
    if (prefersReducedMotion || !elements.cursorDot || !elements.cursorGlow || !elements.mouseGlow) return;

    const hoverTargets = "a, button, input, textarea, .glass-card, .project-cover";

    window.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      elements.cursorDot.style.left = `${clientX}px`;
      elements.cursorDot.style.top = `${clientY}px`;
      elements.cursorGlow.style.left = `${clientX}px`;
      elements.cursorGlow.style.top = `${clientY}px`;
      elements.mouseGlow.style.left = `${clientX}px`;
      elements.mouseGlow.style.top = `${clientY}px`;
    });

    document.querySelectorAll(hoverTargets).forEach((target) => {
      target.addEventListener("mouseenter", () => {
        elements.cursorGlow.classList.add("is-hovering");
      });
      target.addEventListener("mouseleave", () => {
        elements.cursorGlow.classList.remove("is-hovering");
      });
    });
  }

  function initParticles() {
    if (prefersReducedMotion || !elements.particleCanvas) return;
    const canvas = elements.particleCanvas;
    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let particles = [];

    const createParticles = () => {
      const count = Math.min(48, Math.floor(width / 34));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35
      }));
    };

    const resize = () => {
      width = canvas.width = window.innerWidth * window.devicePixelRatio;
      height = canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      createParticles();
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > window.innerWidth) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > window.innerHeight) particle.speedY *= -1;

        context.beginPath();
        context.fillStyle = "rgba(124, 156, 255, 0.45)";
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        for (let i = index + 1; i < particles.length; i += 1) {
          const other = particles[i];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 110) {
            context.beginPath();
            context.strokeStyle = `rgba(89, 214, 255, ${0.16 - distance / 900})`;
            context.lineWidth = 1;
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
  }

  function hideLoader() {
    window.setTimeout(() => {
      elements.loader.classList.add("is-hidden");
    }, prefersReducedMotion ? 100 : 450);
  }

  function attachGlobalEvents() {
    elements.themeToggle.addEventListener("click", toggleTheme);
    elements.projectSearch.addEventListener("search", renderProjects);
    elements.year.textContent = String(new Date().getFullYear());
  }

  applySavedTheme();
  renderExperience();
  buildProjectFilters();
  renderProjects();
  renderTestimonials();
  initTypingEffect();
  initNavigation();
  initScrollProgress();
  initActiveSectionObserver();
  initCounters();
  initBackToTop();
  initContactForm();
  initPrintResume();
  initModalEvents();
  initTestimonials();
  initProjectSearch();
  initMagneticElements();
  initRipples();
  initCursorEffects();
  initParticles();
  initAOSAndGSAP();
  loadGithubData();
  attachGlobalEvents();
  hideLoader();
});
