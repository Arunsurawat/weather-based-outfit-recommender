import axios from "axios";

export const getCitySuggestions = async (query: string): Promise<string[]> => {
  if (!query || query.length < 2) return [];

  const response = await axios.get("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", {
    params: {
      namePrefix: query,
      limit: 5,
      sort: "-population"
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY!,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
    }
  });

  return response.data.data.map((item: any) => `${item.city}, ${item.countryCode}`);
};
