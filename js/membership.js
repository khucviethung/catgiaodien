document.addEventListener('DOMContentLoaded', () => {
  const monthlyBtn = document.getElementById('monthly-btn');
  const yearlyBtn = document.getElementById('yearly-btn');
  const monthlyPricing = document.getElementById('monthly');
  const yearlyPricing = document.getElementById('yearly');

  monthlyBtn.addEventListener('click', () => {
    monthlyBtn.classList.add('active');       // thêm nút monthly vào khi click
    yearlyBtn.classList.remove('active');     // remove yearly button khi đã click monthly
    monthlyPricing.classList.add('active');   // thêm content vào khi bấm monthly
    yearlyPricing.classList.remove('active'); // remove monthly content khi đã click monthly
  });

  yearlyBtn.addEventListener('click', () => {
    yearlyBtn.classList.add('active');         // ngược lại 
    monthlyBtn.classList.remove('active');
    yearlyPricing.classList.add('active');
    monthlyPricing.classList.remove('active');
  });

  
});
