export const scrollIntoView = (e, sectionId) => {
  e.preventDefault();
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({
      behavior: "smooth",
    });
  }
};
