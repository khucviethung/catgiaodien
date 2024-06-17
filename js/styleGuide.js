document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('button-toggle');
    const content = document.getElementById('show-content');
    const btn2 = document.getElementById('button-toggle-2');
    const content2 = document.getElementById('show-content-2');

    btn.addEventListener('click', () => {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        btn.querySelector('.toggle-card-icon svg').classList.toggle('open');  // selector icon svg add class open vào svg khi mở ra
    });

    btn2.addEventListener('click', () => {
        content2.style.display = content2.style.display === 'block' ? 'none' : 'block';
        btn2.querySelector('.toggle-card-icon svg').classList.toggle('open');  // selector icon svg add class open vào svg khi mở ra
    });
});