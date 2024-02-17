document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data
  fetch('blogs/comingSoon/comingsoon.json')
    .then(response => response.json())
    .then(jsonData => {
      const blogImages = document.querySelectorAll(".blogImage");
      const blogDescriptions = document.querySelectorAll(".blogDescription");

      // Update HTML content with fetched JSON data
      blogImages.forEach(imageElement => {
        imageElement.setAttribute("src", jsonData.item.imageURL);
      });

      blogDescriptions.forEach(descriptionElement => {
        descriptionElement.textContent = jsonData.item.description;
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});