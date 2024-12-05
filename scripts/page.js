function showPage(pageId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var selectedSection = document.getElementById(pageId);
    selectedSection.classList.add('active');
}