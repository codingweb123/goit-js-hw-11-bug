import { getImagesByQuery } from "./js/pixabay-api"
import {
	clearGallery,
	createGallery,
	showLoader,
	hideLoader,
} from "./js/render-functions"
import { Loading } from "notiflix"
import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css"
const form = document.querySelector(".form")
form.addEventListener("submit", e => {
	e.preventDefault()
	const query = e.target.elements["search-text"].value.trim() ?? ""
	if (query === "") {
		iziToast.error({
			title: "Error!",
			message: "Failed to load images",
		})
		return
	}
	clearGallery()
	Loading.dots()
	getImagesByQuery(query)
		.then(data => {
			if (data.data.hits.length > 0) {
				createGallery(data.data.hits)
			} else {
				clearGallery()
				iziToast.error({
					title: "Error!",
					message:
						"Sorry, there are no images matching your search query. Please try again!",
				})
				return
			}
		})
		.catch(error => {
			iziToast.error({
				title: "Error!",
				message: "Failed to load images",
			})
			console.log("🚀 ~ error:", error)
		})
		.finally(Loading.remove)
})
