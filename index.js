import{a as d,S as f,i as n,n as c}from"./assets/vendor-BFi0r7Mr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="50513820-fe52286b6fb0f12cd684dc96e";d.defaults.baseURL="https://pixabay.com/api/";const m=async a=>await d.get("",{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o),y=document.querySelector(".gallery");let l;const u=()=>y.innerHTML='<span class="loader"></span>',g=({webformatURL:a,largeImageURL:r,tags:o,likes:i,views:e,comments:t,downloads:s})=>`
	<li class="gallery-item">
		<a href="${r}">
			<img src="${a}" data-src="${r}" alt="${o}" />
		</a>
		<div class="info">
			<p>
				<b>Likes</b>
				${i}
			</p>
			<p>
				<b>Views</b>
				${e}
			</p>
			<p>
				<b>Comments</b>
				${t}
			</p>
			<p>
				<b>Downloads</b>
				${s}
			</p>
		</div>
	</li>
	`,h=a=>{let r='<span class="loader"></span>';a.map(o=>r+=g(o)),document.querySelector(".gallery").innerHTML=r,l?l.refresh():l=new f(".gallery a",{captionsData:"alt",captionDelay:250})},b=document.querySelector(".form");b.addEventListener("submit",a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim()??"";if(r===""){n.error({title:"Error!",message:"Failed to load images"});return}u(),c.Loading.dots(),m(r).then(o=>{if(o.data.hits.length>0)h(o.data.hits);else{u(),n.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"});return}}).catch(o=>{n.error({title:"Error!",message:"Failed to load images"}),console.log("🚀 ~ error:",o)}).finally(c.Loading.remove)});
//# sourceMappingURL=index.js.map
