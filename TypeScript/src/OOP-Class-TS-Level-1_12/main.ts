import IceCreamFlavor from "./classes/IceCreamFlavor";

const Ice1 = new IceCreamFlavor("schoko", 1.1, true, "Eis mit Schokoladengeschmack");
const Ice2 = new IceCreamFlavor("vanille", 1.0, true, "Eis mit Vanillegeschmack");
const Ice3 = new IceCreamFlavor("erdbeere", 1.2, false, "Eis mit Erdbeergeschmack");
const Ice4 = new IceCreamFlavor("pistazie", 1.5, false, "Eis mit Pistaziengeschmack");

const iceArr: IceCreamFlavor[] = [Ice1, Ice2, Ice3, Ice4];

iceArr.forEach((sorte) => {
    if (sorte._isPopular === true) {
        console.log(sorte._name);
    }

    sorte.getTotalPrice(3);

    sorte.printInfo();

    sorte.getLenghtOfDescription();
});
