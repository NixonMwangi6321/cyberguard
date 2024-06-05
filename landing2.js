document.addEventListener('DOMContentLoaded', () => {
    const teamCarousel = document.querySelector('.team-carousel');
    const teamMembers = document.querySelectorAll('.team-member');

    let angle = 0;
    const radius = 300;
    const rotateSpeed = 0.02;
    let rotation = 0;

    function rotateCarousel() {
        rotation += rotateSpeed;
        teamMembers.forEach((member, index) => {
            const theta = 2 * Math.PI * index / teamMembers.length;
            const x = radius * Math.cos(theta + rotation);
            const y = radius * Math.sin(theta + rotation);
            member.style.transform = `translate(${x}px, ${y}px)`;
        });
        requestAnimationFrame(rotateCarousel);
    }

    rotateCarousel();
});
