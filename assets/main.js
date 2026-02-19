(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('a[data-nav]').forEach(a=>{
    if(a.getAttribute("href") === path){
      a.setAttribute("aria-current","page");
    }
  });
})();