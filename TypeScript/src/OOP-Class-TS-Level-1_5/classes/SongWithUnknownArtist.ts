import Song from "./Song";

class SongWithUnknownArtist extends Song {
    constructor(title: string) {
        super(title, "unknown");
    }

    setArtist(artist: string) {
        this._artist = artist;
    }
}

export default SongWithUnknownArtist;
