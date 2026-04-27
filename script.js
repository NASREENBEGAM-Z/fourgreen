document.addEventListener('DOMContentLoaded', () => {
    const btnBuy = document.getElementById('btn-buy');
    const btnSell = document.getElementById('btn-sell');
    const navBuySell = document.getElementById('nav-buy-sell');
    
    const modal = document.getElementById('buy-sell-modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const budgetLabel = document.getElementById('budget-label');
    const form = document.getElementById('property-form');

    function openModal(mode) {
        if (!modal) return;
        if (mode === 'buy') {
            modalTitle.textContent = 'Submit Buy Requirement';
            budgetLabel.textContent = 'Expected Budget';
            if (btnBuy) btnBuy.classList.add('active');
            if (btnSell) btnSell.classList.remove('active');
        } else if (mode === 'sell') {
            modalTitle.textContent = 'Submit Selling Details';
            budgetLabel.textContent = 'Expected Price';
            if (btnSell) btnSell.classList.add('active');
            if (btnBuy) btnBuy.classList.remove('active');
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function close() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (form) form.reset();
    }

    if (btnBuy) {
        btnBuy.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('buy');
        });
    }

    if (btnSell) {
        btnSell.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('sell');
        });
    }

    if (navBuySell) {
        navBuySell.addEventListener('click', (e) => {
            e.preventDefault();
            openModal('buy'); // Default to buy when clicking nav link
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', close);
    }

    if (modal) {
        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                close();
            }
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const propertyType = document.getElementById('property-type').value;
            const location = document.getElementById('location').value;
            const budget = document.getElementById('budget').value;
            const details = document.getElementById('details').value;
            const mode = modalTitle.textContent.includes('Buy') ? 'Buy' : 'Sell';
            
            const message = `*New Property ${mode} Requirement*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Type:* ${propertyType}\n*Location:* ${location}\n*Budget/Price:* ${budget}\n*Details:* ${details || 'None'}`;
            const whatsappUrl = `https://wa.me/917845711997?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
            close();
        });
    }

    // Contact Modal Logic
    const contactBtns = document.querySelectorAll('.nav-contact');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = document.getElementById('close-contact-modal');
    const contactForm = document.getElementById('contact-form');

    function openContactModal() {
        if (!contactModal) return;
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeContact() {
        if (!contactModal) return;
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
        if (contactForm) contactForm.reset();
    }

    contactBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openContactModal();
        });
    });

    if (closeContactModal) {
        closeContactModal.addEventListener('click', closeContact);
    }

    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                closeContact();
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const phone = document.getElementById('contact-phone').value;
            const messageInput = document.getElementById('contact-message').value;
            
            const message = `*New Contact Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone || 'Not provided'}\n*Message:* ${messageInput}`;
            const whatsappUrl = `https://wa.me/917845711997?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
            closeContact();
        });
    }

    // Mobile Menu Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            } else {
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });
    }
});
