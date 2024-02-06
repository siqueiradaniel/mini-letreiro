document.addEventListener("DOMContentLoaded", function() {
    // Initial setup
    let currentPage = 2;
    showPage(currentPage);

    // Switch pages every minute
    setInterval(function() {
        currentPage = currentPage === 1 ? 2 : 2; // Alterar para 1
        showPage(currentPage);
    }, 60);

    function showPage(pageNumber) {
        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        // Show the selected page
        const currentPageElement = document.getElementById(`page${pageNumber}`);
        currentPageElement.classList.add('active');
    }
});
