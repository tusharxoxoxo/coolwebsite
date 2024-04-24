window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');

    setTimeout(function() {
        preloader.style.display = 'none'; // Hide the preloader
    }, 1000); // Delay in milliseconds (1000ms = 1 second)
});