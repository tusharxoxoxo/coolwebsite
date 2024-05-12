// Wait for the DOM content to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Function to show all blogs
    function showAllBlogs() {
        var blogs = document.querySelectorAll('.blog');
        blogs.forEach(function(blog) {
            blog.style.display = 'flex';
        });
    }

    // Function to show blogs belonging to a specific category
    function showCategory(category) {
        var blogs = document.querySelectorAll('.blog');
        blogs.forEach(function(blog) {
            var blogCategory = blog.getAttribute('data-category');
            if (blogCategory === category || category === 'ALL') {
                blog.style.display = 'flex';
            } else {
                blog.style.display = 'none';
            }
        });
    }

    // Event listener for navigation items
    var navItems = document.querySelectorAll('.blogNav');
    navItems.forEach(function(navItem) {
        navItem.addEventListener("click", function() {
            var category = this.querySelector('.blogNavText').textContent.trim();
            showCategory(category);
        });
    });
});
