export type Song = {
    id: string;
    name: string;
    artist: string;
    album: string;
};

export type Page = "allSongs" | "playlists" | "favorites";

export interface Playlist {
    id: string;
    name: string;
    songIds: string[];
}