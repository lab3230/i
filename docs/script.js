document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".nav");

  mobileBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    // Animate hamburger icon
    const spans = mobileBtn.querySelectorAll("span");
    if (nav.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      nav.classList.remove("active"); // Close mobile menu on click

      // Reset hamburger icon
      const spans = mobileBtn.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Intersection Observer for Fade-in Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add fade-in class to elements we want to animate
  const animatedElements = document.querySelectorAll(
    ".feature-card, .curriculum-item, .hero-content, .hero-visual, .section-title"
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });

  // CSS class for visible state
  const style = document.createElement("style");
  style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
  document.head.appendChild(style);

  // Typing Effect for Code Block
  const codeBlock = document.querySelector("code.language-python");
  if (codeBlock) {
    const originalText = codeBlock.textContent;
    codeBlock.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < originalText.length) {
        codeBlock.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 20); // Typing speed
      }
    }

    // Start typing when hero section is visible
    const heroObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        typeWriter();
      }
    });
  }
  // Curriculum Data
  const curriculumData = [
    {
      step: "01",
      title: "ビジュアルエディター",
      description: "オリジナルのビジュアルエディターのサンプル実装です。",
      url: "site/UI-LayoutEditor/index.html",
    },
    {
      step: "02",
      title: "グリッドレイアウトコントロール",
      description:
        "オリジナルのグリッドレイアウトコントロールのサンプル実装です。",
      url: "site/UI-GridLayout/index.html",
    },
    {
      step: "03",
      title: "手書き入力コントロール",
      description: "手書き入力インターフェースのサンプル実装です。",
      url: "site/UI-HandWriting/index.html",
    },
    {
      step: "04",
      title: "Coming Soon...",
      description:
        "現在準備中のコンテンツです。公開までしばらくお待ちください。",
      url: "under_construction.html",
    },
  ];

  const curriculumList = document.querySelector(".curriculum-list");
  const iframe = document.getElementById("curriculum-iframe");
  const openBtn = document.getElementById("open-iframe");

  if (curriculumList && iframe) {
    // Clear existing content
    curriculumList.innerHTML = "";

    curriculumData.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = `curriculum-item ${index === 0 ? "active" : ""}`;
      li.innerHTML = `
                <span class="step">${item.step}</span>
                <div class="content">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            `;

      li.addEventListener("click", () => {
        // Remove active class from all items
        document
          .querySelectorAll(".curriculum-item")
          .forEach((i) => i.classList.remove("active"));
        // Add active class to clicked item
        li.classList.add("active");

        // Update iframe src
        iframe.src = item.url;
      });

      curriculumList.appendChild(li);
    });

    // Set initial iframe src
    if (curriculumData.length > 0) {
      iframe.src = curriculumData[0].url;
    }
  }

  if (openBtn && iframe) {
    openBtn.addEventListener("click", () => {
      if (iframe.src) {
        window.open(iframe.src, "_blank");
      }
    });
  }
});
