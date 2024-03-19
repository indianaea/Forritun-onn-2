document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        menuBtn.classList.toggle('hidden'); // Toggle the visibility of the button as well.
    });

    document.addEventListener('click', function (e) {
        // Check if the click is outside of the mobileMenu and if the mobileMenu is currently shown.
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuBtn.classList.remove('hidden'); // Show the hamburger button again.
        }
    });
});
