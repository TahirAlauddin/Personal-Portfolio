function openImagePopup(imageSrc) {
    // Create a modal or popup container
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    // Create an image element
    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.alt = 'Project Image';

    // Append the image to the modal container
    modalContainer.appendChild(imageElement);

    // Add the modal container to the body
    document.body.appendChild(modalContainer);

    // Close the popup when clicked outside the image
    modalContainer.addEventListener('click', function(event) {
        if (event.target === modalContainer) {
            document.body.removeChild(modalContainer);
        }
    });
}

for (let item of document.querySelectorAll('.portfolio-item')) {
    item.addEventListener('click', (e) => {
        let src = e.target.getAttribute('src')
        openImagePopup(src)
    })
}


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

