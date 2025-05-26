import{a as u,S as p,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="50513820-fe52286b6fb0f12cd684dc96e";u.defaults.baseURL="https://pixabay.com/api/";const y=async a=>await u.get("",{params:{key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o),m=document.querySelector(".gallery");let l;const g=()=>m.querySelector(".loader").innerHTML="Loading images, please wait...",c=()=>new Promise(a=>{setTimeout(()=>a("loaded"),800)}),d=()=>m.innerHTML='<span class="loader"></span>',h=({webformatURL:a,largeImageURL:r,tags:o,likes:i,views:e,comments:t,downloads:s})=>`
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
	`,b=a=>{let r='<span class="loader"></span>';a.map(o=>r+=h(o)),document.querySelector(".gallery").innerHTML=r,l?l.refresh():l=new p(".gallery a",{captionsData:"alt",captionDelay:250})},L=document.querySelector(".form");L.addEventListener("submit",a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim()??"";if(r===""){n.error({title:"Error!",message:"Failed to load images"});return}d(),g(),y(r).then(o=>{if(o.data.hits.length>0)c().then(()=>{b(o.data.hits)});else{d(),n.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!"});return}}).catch(o=>{n.error({title:"Error!",message:"Failed to load images"}),console.log("🚀 ~ error:",o)}).finally(c)});
//# sourceMappingURL=index.js.map
