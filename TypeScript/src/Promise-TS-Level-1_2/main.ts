import EWeatherType from "./enums/EWeatherType";

const promise1 = new Promise<number>((resolve, reject) => {
    const condition: number = Math.floor(Math.random() * 10);
    if (condition <= 6) {
        resolve(condition);
    } else {
        reject("Weather forecast could not be determined");
    }
});

promise1
    .then((condition) => {
        console.log(EWeatherType[condition]);
    })
    .catch((error) => {
        console.error(error);
    });
