const photos = [
  { src: "portfolio/droneabitibi-08.jpg", titre: "Sentiers du lac Rouyn", lieu: "Rouyn-Noranda" },
  { src: "portfolio/droneabitibi-18.jpg", titre: "Centre-ville en hiver", lieu: "Rouyn-Noranda" },
  { src: "portfolio/droneabitibi-19.jpg", titre: "UQAT en hiver", lieu: "Rouyn-Noranda" },
  { src: "portfolio/droneabitibi-05.jpg", titre: "UQAT, Centre du Témiscamingue", lieu: "Notre-Dame-du-Nord" },

  { src: "portfolio/droneabitibi-07.jpg", titre: "Hôpital", lieu: "Rouyn-Noranda" },
  { src: "portfolio/droneabitibi-04.jpg", titre: "Parc de la Ribambelle", lieu: "Ville-Marie" },
  { src: "portfolio/droneabitibi-15.jpg", titre: "Fonderie Horne", lieu: "Rouyn-Noranda" },
  { src: "portfolio/droneabitibi-01.jpg", titre: "Stationnement du Cégep", lieu: "Rouyn-Noranda" },

  { src: "portfolio/droneabitibi-20.jpg", titre: "Lac Osisko", lieu: "Rouyn-Noranda" },
  { src: "portfolio/droneabitibi-16.jpg", titre: "UQAT, Coucher du soleil", lieu: "Rouyn-Noranda" },
  { src: "portfolio/droneabitibi-17.jpg", titre: "Avenue Larrivière", lieu: "Rouyn-Noranda" },
  { src: "portfolio/droneabitibi-02.jpg", titre: "Parc à Fleur d'Eau", lieu: "Rouyn-Noranda" },

  { src: "portfolio/droneabitibi-03.jpg", titre: "Nid de l'Épervier", lieu: "Collines Kékéko" },
  { src: "portfolio/droneabitibi-06.jpg", titre: "Pont couvert", lieu: "St-Eugène-de-Guigues" },
  { src: "portfolio/droneabitibi-14.jpg", titre: "Paddle board", lieu: "Lac St-Amand" },

  { src: "portfolio/droneabitibi-09.jpg", titre: "Lac Beaverhouse", lieu: "Dobie, Ontario" },
  { src: "portfolio/droneabitibi-11.jpg", titre: "Reboisement", lieu: "D'Alembert (Rouyn-Noranda)" },
  { src: "portfolio/droneabitibi-12.jpg", titre: "Sentier sinueux", lieu: "D'Alembert (Rouyn-Noranda)" },
  { src: "portfolio/droneabitibi-21.jpg", titre: "Village de Granada", lieu: "Granada (Rouyn-Noranda)" },
  { src: "portfolio/droneabitibi-22.jpg", titre: "Village de Bellecombe", lieu: "Bellecombe (Rouyn-Noranda)" },
];

const gallery = document.getElementById("gallery");

photos.forEach(photo => {
  gallery.innerHTML += `
    <article class="masonry-item">
      <img 
        src="${photo.src}" 
        alt="${photo.titre}" 
        loading="lazy"
        data-full="${photo.src}"
        data-title="${photo.titre}"
        data-lieu="${photo.lieu || ''}"
      >

      <div class="masonry-caption">
        <h3>${photo.titre}</h3>
        <p>${photo.lieu || ''}</p>
      </div>
    </article>
  `;
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

gallery.addEventListener("click", function(e) {
  const img = e.target.closest("img");
  if (!img) return;

  lightboxImg.src = img.dataset.full;
  lightboxImg.alt = img.alt;

  lightboxCaption.textContent = img.dataset.lieu
    ? `${img.dataset.title} — ${img.dataset.lieu}`
    : img.dataset.title;

  lightbox.classList.add("active");
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function(e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

function closeLightbox() {
  lightbox.classList.remove("active");
  lightboxImg.src = "";
}