const farbeTauschenBtn = document.querySelector("#farbeTauschenBtn");

farbeTauschenBtn?.addEventListener("click", () => {
    const red: number = Math.floor(Math.random() * 256);
    const green: number = Math.floor(Math.random() * 256);
    const blue: number = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;
});
