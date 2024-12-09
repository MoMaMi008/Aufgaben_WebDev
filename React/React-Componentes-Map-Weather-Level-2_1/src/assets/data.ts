export interface IWeatherData {
    day: string;
    icon: string;
    tempMax: number;
    tempMin: number;
    rain: number;
}

export const data: IWeatherData[] = [
    {
        day: "Montag",
        icon: "./src/assets/icons/sonne.svg",
        tempMax: 23,
        tempMin: 18,
        rain: 0,
    },
    {
        day: "Dienstag",
        icon: "./src/assets/icons/sonne.svg",
        tempMax: 25,
        tempMin: 23,
        rain: 0,
    },
    {
        day: "Mittwoch",
        icon: "./src/assets/icons/wolke.svg",
        tempMax: 22,
        tempMin: 19,
        rain: 30,
    },
];
