function TestimonialCarousel() {
  let index = 0;
  const testimonials = document.querySelectorAll<HTMLElement>('.testimonial');
  const totalTestimonials = testimonials.length;
  let itemsToShow = window.innerWidth < 768 ? 1 : 2;

  function updateTestimonialsVisibility() {
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i >= index && i < index + itemsToShow ? 'flex' : 'none';
    });
  }

  updateTestimonialsVisibility();

  function showNextTestimonial() {
    testimonials[index].style.opacity = '0';

    setTimeout(() => {
      testimonials[index].style.display = 'none';
      index = (index + itemsToShow) % totalTestimonials;
      updateTestimonialsVisibility();
      testimonials[index].style.opacity = '1';
    }, 300); // Match the duration of the fade-out animation
  }

  // Set interval for carousel
  const intervalId = setInterval(showNextTestimonial, 5000); // Change 5000 to whatever time you want each pair of testimonials to display (in milliseconds)

  // Update items to show on window resize
  window.addEventListener('resize', () => {
    itemsToShow = window.innerWidth < 1200 ? 1 : 2;
    updateTestimonialsVisibility();
  });

  // Clean up the interval when the component unmounts
  return () => clearInterval(intervalId);
}

export default TestimonialCarousel;
