import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
const gallery = document.querySelector(".gallery")
let globalLightbox
export const showLoader = () =>
	(gallery.querySelector(".loader").innerHTML =
		"Loading images, please wait...")
export const hideLoader = () => {
	return new Promise(res => {
		setTimeout(() => res("loaded"), 800)
	})
}
export const clearGallery = () =>
	(gallery.innerHTML = `<span class="loader"></span>`)
export const createMarkup = ({
	webformatURL,
	largeImageURL,
	tags,
	likes,
	views,
	comments,
	downloads,
}) => {
	return `
	<li class="gallery-item">
		<a href="${largeImageURL}">
			<img src="${webformatURL}" data-src="${largeImageURL}" alt="${tags}" />
		</a>
		<div class="info">
			<p>
				<b>Likes</b>
				${likes}
			</p>
			<p>
				<b>Views</b>
				${views}
			</p>
			<p>
				<b>Comments</b>
				${comments}
			</p>
			<p>
				<b>Downloads</b>
				${downloads}
			</p>
		</div>
	</li>
	`
}
export const createGallery = images => {
	let itemsMarkup = `<span class="loader"></span>`
	images.map(item => (itemsMarkup += createMarkup(item)))
	document.querySelector(".gallery").innerHTML = itemsMarkup
	if (!globalLightbox) {
		globalLightbox = new SimpleLightbox(".gallery a", {
			captionsData: "alt",
			captionDelay: 250,
		})
	} else globalLightbox.refresh()
}
