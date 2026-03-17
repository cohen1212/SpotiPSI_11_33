const fetchSongs = async () => {
  const response = await fetch("http://localhost:5001/api/songs");

  if (!response.ok) {
    throw new Error("Failed to fetch songs");
  }

  return response.json();
};

export default fetchSongs;