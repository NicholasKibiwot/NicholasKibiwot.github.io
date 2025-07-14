/* Simple scroll-spy: highlight active nav link */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#topnav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < 80 && rect.bottom >= 80) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.style.borderBottomColor =
      link.getAttribute("href") === `#${current}` ? "var(--accent)" : "transparent";
  });
});