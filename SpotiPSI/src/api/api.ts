
interface Props {
  url: string;
}


const fetchServer = async (props: Props) => {
  const response = await fetch(props.url);

  if (!response.ok) {
    throw new Error("Failed to fetch songs");
  }

  return response.json();
};

export default fetchServer;