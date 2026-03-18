import type { Song } from "../types/types";

const urlBase = "http://localhost:5001/api";
const postPlaylistApi = "/playlists"
const favoritesApi = "/favorites"

export const fetchServer = async (urlAddition: string) => {
  const response = await fetch(`${urlBase}${urlAddition}`);

  if (!response.ok) {
    throw new Error("Failed to fetch songs");
  }

  return response.json();
};

export const postPlaylist = async (name: string) => {
  const res = await fetch(`${urlBase}${postPlaylistApi}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    throw new Error("Failed to create playlist");
  }

  return res.json();
};

export const fetchPostFavorites = async (urlAddition: string, song: Song) => {
  fetch(`${urlBase}${favoritesApi}${urlAddition}`, {
    method: "POST",
    body: JSON.stringify({
      songId: song.id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })

    .then(response => response.json())

    .then(json => console.log(json));
};