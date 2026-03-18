import type { Song } from "../types/types";


interface Props {
  url: string;
  song: Song
}

const fetchPostServer = async ({ url, song }: Props) => {
  fetch(url, {

    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      songId: song.id,
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })

    // Converting to JSON
    .then(response => response.json())

    // Displaying results to console
    .then(json => console.log(json));
}

export default fetchPostServer;