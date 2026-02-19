// assets/main.js
(() => {
  function normalizePath(p) {
    // 例: "/staff.html" -> "staff.html", "/staff/" -> "staff", "" -> "index.html"
    let s = (p || "").split("?")[0].split("#")[0];

    // 最後の要素だけ
    s = s.split("/").filter(Boolean).pop() || "";

    // ルート表示は index 扱い
    if (s === "") return "index.html";

    // 拡張子なしURL（/staff など）でも合わせるため、比較用に ".html" も用意
    return s;
  }

  function run() {
    const current = normalizePath(location.pathname);

    document.querySelectorAll("a[data-nav]").forEach((a) => {
      const href = a.getAttribute("href") || "";
      const hrefNorm = normalizePath(href);

      const match =
        hrefNorm === current ||
        hrefNorm + ".html" === current ||
        hrefNorm === current.replace(/\.html$/, "") ||
        hrefNorm + ".html" === current.replace(/\.html$/, ".html"); // 念のため

      if (match) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  // DOMができてから確実に実行
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
