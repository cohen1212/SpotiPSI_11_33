
interface Props {
  url: string;
}


const fetchServer = async ({url}: Props) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch songs");
  }

  return response.json();
};

export default fetchServer;