const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".global-nav");
const navigationLinks = navigation.querySelectorAll("a");

const closeMenu = () => {
  menuButton.classList.remove("is-open");
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "メニューを開く");
};

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("is-open");
  navigation.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
});

navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("#current-year").textContent = new Date().getFullYear();

