$(document).ready(function() {
    let index = 0;
    const testimonials = $('.testimonial');
    const totalTestimonials = testimonials.length;

    // Hide all testimonials except the first one
    testimonials.hide().eq(index).show();

    function showNextTestimonial() {
        testimonials.eq(index).fadeOut(300, function() {
            index = (index + 1) % totalTestimonials;
            testimonials.eq(index).fadeIn(300);
        });
    }

    // Set interval for carousel
    setInterval(showNextTestimonial, 5000); // Change 5000 to whatever time you want each testimonial to display (in milliseconds)
});
