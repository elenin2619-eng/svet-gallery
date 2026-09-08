(function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  // Active nav link
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  // Contact form UI-only
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = document.getElementById("form-success");
      if (success) {
        success.classList.add("show");
        success.textContent =
          "Спасибо! Ваше сообщение принято. Мы свяжемся с вами в ближайшее время.";
      }
      form.reset();
    });
  }

  // Lightbox for works
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const lbImg = lightbox.querySelector("img");
    const lbCap = lightbox.querySelector(".lightbox-cap");
    const closeBtn = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll("[data-lightbox]").forEach((el) => {
      el.addEventListener("click", () => {
        const src = el.getAttribute("data-full") || el.querySelector("img")?.src;
        const title = el.getAttribute("data-title") || "";
        if (!src) return;
        lbImg.src = src;
        lbImg.alt = title;
        if (lbCap) lbCap.textContent = title;
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    const close = () => {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    };
    closeBtn?.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }
})();
