export const scrollIntoView = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({
      behavior: "smooth",
    });
  }
};
