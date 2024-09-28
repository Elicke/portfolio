document.addEventListener('DOMContentLoaded', function() {
    const homeIcon = document.getElementById('home-icon');
    
    homeIcon.addEventListener('click', function(e) {
        e.preventDefault();
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});