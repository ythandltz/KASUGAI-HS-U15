// 現在ページのnavをハイライト（aria-current付与）
const file = location.pathname.split("/").pop();
const current = (file === "" ? "index.html" : file);

document.querySelectorAll("a[data-nav]").forEach(a => {
  const href = a.getAttribute("href");
  if (href === current) a.setAttribute("aria-current", "page");
  else a.removeAttribute("aria-current");
});
