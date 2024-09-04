function nextSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    if (sectionId === 'surprise') {
        const bgMusic = document.getElementById('bg-music');
        bgMusic
