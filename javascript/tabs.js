document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll(".timeline-tab-item").forEach(function(tab) {
    tab.addEventListener("click", function(event) {
      document.querySelectorAll(".timeline-tab-item").forEach(function(tab) {
        tab.classList.remove('active-tab');
      })
      event.currentTarget.classList.add('active-tab');
      document.querySelectorAll('.timeline-tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('active');
      })
      const id = event.currentTarget.id;
      document.getElementById(`${id}-content`).classList.add('active');
    })
  })
});
