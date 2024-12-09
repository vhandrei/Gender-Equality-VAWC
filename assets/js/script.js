window.onload = function() {
    const modal1 = document.getElementById('modal');
    const showModalBtn1 = document.querySelector('.law-item:nth-child(1)');
    const closeBtn1 = document.getElementById('closeBtn');

    const modal2 = document.getElementById('modal2');
    const showModalBtn2 = document.querySelector('.law-item:nth-child(2)');
    const closeBtn2 = document.getElementById('closeBtn2');

    showModalBtn1.addEventListener('click', () => {
        modal1.style.display = 'block';
    });

    showModalBtn2.addEventListener('click', () => {
        modal2.style.display = 'block';
    });

    closeBtn1.addEventListener('click', () => {
        modal1.style.display = 'none';
    });
    closeBtn2.addEventListener('click', () => {
        modal2.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal1) {
            modal1.style.display = 'none';
        }
        if (e.target === modal2) {
            modal2.style.display = 'none';
        }
    });

    const modal3 = document.getElementById('modal3');
    const showModalBtn3 = document.getElementById('showModalBtn3');
    const closeBtn3 = document.getElementById('closeBtn3');

    // Show modal for Party List Law
    showModalBtn3.addEventListener('click', () => {
        modal3.style.display = 'block';
    });

    // Close modal when the close button is clicked
    closeBtn3.addEventListener('click', () => {
        modal3.style.display = 'none';
    });

    // Close modal when the user clicks outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modal3) {
            modal3.style.display = 'none';
        }
    });

    // Get the modal and button for Labor Code (1989)
    const modal4 = document.getElementById('modal4');
    const showModalBtn4 = document.getElementById('showModalBtn4');
    const closeBtn4 = document.getElementById('closeBtn4');

    // Show modal for Labor Code (1989)
    showModalBtn4.addEventListener('click', () => {
        modal4.style.display = 'block';
    });

    // Close modal when the close button is clicked
    closeBtn4.addEventListener('click', () => {
        modal4.style.display = 'none';
    });

    // Close modal when the user clicks outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modal4) {
            modal4.style.display = 'none';
        }
    });

    // Get the modal and button for Women in Nation Building Law (RA 7192)
    const modal5 = document.getElementById('modal5');
    const showModalBtn5 = document.getElementById('showModalBtn5');
    const closeBtn5 = document.getElementById('closeBtn5');

    // Show modal for Women in Nation Building Law (RA 7192)
    showModalBtn5.addEventListener('click', () => {
        modal5.style.display = 'block';
    });

    // Close modal when the close button is clicked
    closeBtn5.addEventListener('click', () => {
        modal5.style.display = 'none';
    });

    // Close modal when the user clicks outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modal5) {
            modal5.style.display = 'none';
        }
    });

    // Get modal and buttons for Comprehensive Agrarian Reform Law (1988)
    const modal6 = document.getElementById('modal6');
    const showModalBtn6 = document.getElementById('showModalBtn6');
    const closeBtn6 = document.getElementById('closeBtn6');

    // Get modal and buttons for Anti-Sexual Harassment Law (RA 7877)
    const modal7 = document.getElementById('modal7');
    const showModalBtn7 = document.getElementById('showModalBtn7');
    const closeBtn7 = document.getElementById('closeBtn7');

    // Show modal for Comprehensive Agrarian Reform Law (1988)
    showModalBtn6.addEventListener('click', () => {
        modal6.style.display = 'block';
    });

    // Show modal for Anti-Sexual Harassment Law (RA 7877)
    showModalBtn7.addEventListener('click', () => {
        modal7.style.display = 'block';
    });

    // Close modals when the close button is clicked
    closeBtn6.addEventListener('click', () => {
        modal6.style.display = 'none';
    });
    closeBtn7.addEventListener('click', () => {
        modal7.style.display = 'none';
    });

    // Close modals when the user clicks outside of them
    window.addEventListener('click', (e) => {
        if (e.target === modal6) {
            modal6.style.display = 'none';
        }
        if (e.target === modal7) {
            modal7.style.display = 'none';
        }
    });


    // Get modal and buttons for Anti-Child Labor Law (RA 7822, 1995)
    const modal8 = document.getElementById('modal8');
    const showModalBtn8 = document.getElementById('showModalBtn8');
    const closeBtn8 = document.getElementById('closeBtn8');

    // Get modal and buttons for Anti-Sexual Violence Law (RA 8353, 1997)
    const modal9 = document.getElementById('modal9');
    const showModalBtn9 = document.getElementById('showModalBtn9');
    const closeBtn9 = document.getElementById('closeBtn9');

    // Show modal for Anti-Child Labor Law (RA 7822, 1995)
    showModalBtn8.addEventListener('click', () => {
        modal8.style.display = 'block';
    });

    // Show modal for Anti-Sexual Violence Law (RA 8353, 1997)
    showModalBtn9.addEventListener('click', () => {
        modal9.style.display = 'block';
    });

    // Close modals when the close button is clicked
    closeBtn8.addEventListener('click', () => {
        modal8.style.display = 'none';
    });
    closeBtn9.addEventListener('click', () => {
        modal9.style.display = 'none';
    });

    // Close modals when the user clicks outside of them
    window.addEventListener('click', (e) => {
        if (e.target === modal8) {
            modal8.style.display = 'none';
        }
        if (e.target === modal9) {
            modal9.style.display = 'none';
        }
    });

};

// Get the button
const topButton = document.getElementById("topButton");

// Show the button when scrolled down 100px
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// Scroll to the top of the document when the button is clicked
topButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

