


interface Props {
  url: string;
}


export const fetchServer = async ({ url }: Props) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch songs");
  }

  return response.json();
};

export const postPlaylist = async (name: string) => {
  const res = await fetch("http://127.0.0.1:5001/api/playlists", {
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