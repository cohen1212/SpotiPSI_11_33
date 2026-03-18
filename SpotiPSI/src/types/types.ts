export type Song = {
    id: string;
    name: string;
    artist: string;
    album: string;
};

export type Page = "allSongs" | "playlists" | "favorites";