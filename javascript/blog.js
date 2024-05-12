// Get the value of the 'file' parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const fileParam = urlParams.get('file');

if (fileParam) {
    // Set the title of the page to correspond with the 'file' parameter
    document.title = `💾/${fileParam}`;
}

// If the 'file' parameter is present
if (fileParam) {
    // Construct the URL to fetch the corresponding HTML file
    const fileURL = `blogs/${fileParam}.html`;

    // Fetch the HTML content of the file
    fetch(fileURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(htmlContent => {
        // Insert the fetched HTML content into the div with class 'blogContent'
        const blogContentDiv = document.querySelector('.blogContent');
        blogContentDiv.innerHTML = htmlContent;
    })
    .catch(error => {
        console.error('There was a problem fetching the blog content:', error);
    });
}
