
document.querySelector('.hamburger').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});

// Adjust navigation display on window resize
window.addEventListener('resize', function() {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth > 768) {
        nav.style.display = ''; // Clear any inline styles for desktop view
    } else {
        if (nav.style.display === '') {
            nav.style.display = 'none'; // Ensure menu is initially hidden on mobile after resize
        }
    }
});

