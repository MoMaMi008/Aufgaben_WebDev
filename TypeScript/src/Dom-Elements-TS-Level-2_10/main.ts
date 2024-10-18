const headline = document.querySelector("#headline") as HTMLElement;
const smallBtn = document.querySelector("#smallBtn") as HTMLInputElement;
const middleBtn = document.querySelector("#middleBtn") as HTMLInputElement;
const bigCrazyBtn = document.querySelector("#bigCrazyBtn") as HTMLInputElement;

smallBtn.addEventListener("click", () => {
    headline.removeAttribute("class");
    headline.classList.add("small");
    document.body.style.animation = "";
});

middleBtn.addEventListener("click", () => {
    headline.removeAttribute("class");
    headline.classList.add("middle");
    document.body.style.animation = "";
});

bigCrazyBtn.addEventListener("click", () => {
    headline.removeAttribute("class");
    headline.classList.add("big-crazy");
    document.body.style.animation = "rainbow-background 1s linear infinite reverse";
});
