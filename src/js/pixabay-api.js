import axios from "axios"
import { PIXABAY_API_KEY } from "./settings"
axios.defaults.baseURL = "https://pixabay.com/api/"
export const getImagesByQuery = async query => {
	const data = await axios
		.get("", {
			params: {
				key: PIXABAY_API_KEY,
				q: query,
				image_type: "photo",
				orientation: "horizontal",
				safesearch: true,
			},
		})
		.then(data => data)
	return data
}
