type Music = {
    artist: string;
    title: string;
    release_year: number;
    medium: string[];
    gold: boolean;
};

let myTopFour: Music[] = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true,
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true,
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true,
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true,
    },
];

myTopFour.forEach((song) => {
    const output = document.createElement("article");
    const artist = document.createElement("p");
    const title = document.createElement("p");
    const release = document.createElement("p");
    const medium = document.createElement("p");
    const gold = document.createElement("p");

    artist.innerText = `Artist: ${song.artist}`;
    title.innerText = `Title: ${song.title}`;
    release.innerText = `Release Year: ${song.release_year}`;
    medium.innerText = `Medium: ${song.medium.join(", ")}`;
    gold.innerText = `Goldbekommen?: ${song.gold}`;

    output.appendChild(artist);
    output.appendChild(title);
    output.appendChild(release);
    output.appendChild(medium);
    output.appendChild(gold);

    document.body.appendChild(output);
});
