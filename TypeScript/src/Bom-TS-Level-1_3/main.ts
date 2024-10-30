const showPropsBtn = document.querySelector("#showPropsBtn") as HTMLButtonElement;
const output = document.querySelector("#output") as HTMLDivElement;

function showProporties() {
    const properties = {
        browserName: navigator.userAgent,
        osArchitecture: navigator.platform,
        browserVersion: navigator.appVersion,
        windowResolution: `${window.screen.width}x${window.screen.height}`,
        documentWidth: document.documentElement.clientWidth,
        documentHeight: document.documentElement.clientHeight,
        colorDepth: window.screen.colorDepth,
        pixelDepth: window.screen.pixelDepth,
    };

    for (const [key, value] of Object.entries(properties)) {
        const p = document.createElement("p");
        p.textContent = `${key}: ${value}`;
        output.appendChild(p);
    }
}

showPropsBtn.addEventListener("click", showProporties);
