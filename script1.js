document.addEventListener('DOMContentLoaded', function() {
    let currentPageIndex = 1;
    const totalPages = document.querySelectorAll('.about-page').length;

    // Display the default page when the DOM is loaded
    showPage(currentPageIndex);

    // Event listeners for navigation buttons
    document.getElementById('prevButton').addEventListener('click', function() {
        if (currentPageIndex > 1) {
            currentPageIndex--;
            showPage(currentPageIndex);
        }
    });

    document.getElementById('nextButton').addEventListener('click', function() {
        if (currentPageIndex < totalPages) {
            currentPageIndex++;
            showPage(currentPageIndex);
        }
    });
});

function showPage(pageIndex) {
    document.querySelectorAll('.about-page').forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(`page${pageIndex}`).style.display = 'block';
}
