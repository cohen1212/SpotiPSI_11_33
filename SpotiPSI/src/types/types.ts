export type Song = {
    id: string;
    name: string;
    artist: string;
    album: string;
};

export interface Playlist {
    id: string;
    name: string;
    songIds: string[];
}