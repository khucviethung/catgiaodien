    // JS EVENT của carousel
    document.addEventListener('DOMContentLoaded', () => {
        var myCarousel = document.querySelector('#carouselInterval');
        var carousel = new bootstrap.Carousel(myCarousel, {
        interval: false, // Disable auto-slide
        });
    
        // Custom navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => {
        carousel.prev();
        });
    
        document.getElementById('next-btn').addEventListener('click', () => {
        carousel.next();
        });
  

    
    // JS CHUYỂN TRANG page navigation
    // Lấy tất cả các phần tử left-content
    const acticles = document.querySelectorAll('#articles-of-leftcontent article');
    const pageInfo = document.getElementById('page-info');
    const buttonNavigation = document.getElementById('buttonNavigation');
    let currentPage = 1;
    const itemsPerPage = 4;
    const totalPages = Math.ceil(acticles.length / itemsPerPage);

   
    function activePage(page) {
        acticles.forEach((item, index) => {
            item.style.display = 'none';
            const start = (page - 1) * itemsPerPage;
            const end = page * itemsPerPage;
            if (index >= start && index < end ) {
                item.style.display = 'block';    // tạo thành 1 block mới khi ở trang mới
                buttonNavigation.textContent = "Previous";
            }
            else{
                item.style.display = 'hidden'
                buttonNavigation.textContent = "Next"     
            }
        });
        pageInfo.textContent = `Page ${page} of ${totalPages}`;
    }

    buttonNavigation.addEventListener('click', () => {
        buttonNavigation.disabled = true; // Vô hiệu hóa nút khi đã bấm nút 1 lần

        // set timeout delay khi chuyển trang
        setTimeout(() => {
            if (currentPage < totalPages) {
                currentPage ++;
                buttonNavigation.textContent = "Previous";
                console.log(`page ${currentPage}`, "Clicked to page 2");
            } else if (currentPage === totalPages) {
                currentPage = 1;
                console.log(`page ${currentPage}`, "Back to page 1");
                buttonNavigation.textContent = "Next";
            }
            activePage(currentPage);
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scoll to top when change page
            buttonNavigation.disabled = false; // Enable nút sau khi delay
        }, 600); // 0,6s delay
        
    });
    
});



