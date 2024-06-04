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
  

    
    // page navigation
    // Lấy tất cả các phần tử left-content
    const sections = document.querySelectorAll('.row-container');
    const controlNavigation = document.getElementById('#pagination-controls')
    const pageInfo = document.getElementById('page-info');
    const buttonNavigation = document.getElementById('buttonNavigation');
    let currentPage = 1;
    const itemsPerPage = 4;
    const totalPages = Math.ceil(sections.length / itemsPerPage);

   
    function activePage(page) {
        sections.forEach((section, index) => {
            section.style.display = 'none';
            const start = (page - 1) * itemsPerPage;
            const end = page * itemsPerPage;
            if (index >= start && index < end ) {
                section.style.display = 'flex';
                buttonNavigation.textContent = "Previous";
            }
            else{
                section.style.display = 'hidden'
                buttonNavigation.textContent = "Next"     
            }
        });
        pageInfo.textContent = `Page ${page} of ${totalPages}`;
    }

    buttonNavigation.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage ++ ;
        }
        else if(currentPage > totalPages){
            currentPage -- ;
        }
        else {    
            currentPage = 1;
        }
        activePage(currentPage);
        
    });

    activePage(currentPage);
});



