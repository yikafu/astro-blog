document.addEventListener("astro:page-load", () => {
  const theme = (() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })();

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }

  window.localStorage.setItem("theme", theme || "");

  const handleToggleClick = () => {
    const elm = document.documentElement;
    elm.classList.toggle("dark");

    const isDark = elm.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const btns = document.querySelectorAll("button#themeToggle");
  btns.forEach((btn) => {
    btn ? btn.addEventListener("click", handleToggleClick) : null;
  });
});
