const navChangeBtn = document.querySelector("#navChange") as HTMLElement;
const navHome = document.querySelector("#navHome") as HTMLElement;

navChangeBtn?.addEventListener("click", () => {
    navHome.style.backgroundColor = "orange";
    navHome.innerText = navHome.innerText.split("").reverse().join("");
});
