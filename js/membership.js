document.addEventListener("DOMContentLoaded", function() {
    const monthlyRadio = document.getElementById("monthly");
    const yearlyRadio = document.getElementById("yearly");
    const monthlyContent = document.getElementById("monthly-content");
    const yearlyContent = document.getElementById("yearly-content");
  
    function updateContent() {
      if (monthlyRadio.checked) {
        monthlyContent.style.display = "flex";
        yearlyContent.style.display = "none";
      } else {
        yearlyContent.style.display = "flex";
        monthlyContent.style.display = "none";
      }
    }
  
    monthlyRadio.addEventListener("change", updateContent);
    yearlyRadio.addEventListener("change", updateContent);
  
    // Initialize content display based on initial radio button state
    updateContent();
  });
  