class Song {
    private _title: string;
    protected _artist: string;
    _durationInSeconds: number = -1;

    get title(): string {
        return this._title;
    }

    constructor(title: string, artist: string) {
        this._title = title;
        this._artist = artist;
    }
}

export default Song;
