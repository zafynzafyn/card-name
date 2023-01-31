const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const color = e.currentTarget.classList; 
    
    if (color.contains("btn1")) {
      theme.style.setProperty("--theme--color", " #042d29"); 
    } else if (color.contains("btn2")) {
      theme.style.setProperty("--theme--color", "#3E0C15"); 
    } else if (color.contains("btn3")) {
      theme.style.setProperty("--theme--color", "#96540D"); 
    } else if (color.contains("btn4")) {
      theme.style.setProperty("--theme--color", "#B37538"); 
    } else {
      theme.style.setProperty("--theme--color", "#2F3229"); 
    }
  });
});
