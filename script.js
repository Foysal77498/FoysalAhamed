function openSite(url) {
    window.open(url, '_blank');
}

// Add interactivity: Highlight active card on click
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.link-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});
