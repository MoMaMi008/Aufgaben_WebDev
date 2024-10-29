import Song from "./classes/Song";
import SongWithUnknownArtist from "./classes/SongWithUnknownArtist";

const allSongs: Song[] = [];

const song1 = new Song("We Will Rock You", "Queen");
const song2 = new Song("Numb", "Linkin Park");
const song3 = new SongWithUnknownArtist("STRANGERS");
allSongs.push(song1, song2, song3);

song1._durationInSeconds = 122;
song2._durationInSeconds = 186;

song3.setArtist("Enter Shikari / AViVA");
song3._durationInSeconds = 423;

console.log(allSongs);
