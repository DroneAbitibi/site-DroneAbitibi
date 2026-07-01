const photos = [
  { src: "portfolio/portfolio-21.jpg", titre: "Centre-ville en hiver", lieu: "Rouyn-Noranda" },
  { src: "portfolio/uqat-01.jpg", titre: "UQAT en hiver", lieu: "Rouyn-Noranda" },
  { src: "portfolio/uqat-02.jpg", titre: "UQAT, Centre du Témiscamingue", lieu: "Notre-Dame-du-Nord" },
  { src: "portfolio/portfolio-09.jpg", titre: "Hôpital", lieu: "Rouyn-Noranda" },

  { src: "portfolio/portfolio-04.jpg", titre: "Parc de la Ribambelle", lieu: "Ville-Marie" },
  { src: "portfolio/portfolio-01.jpg", titre: "Stationnement du Cégep", lieu: "Rouyn-Noranda" },
  { src: "portfolio/portfolio-18.jpg", titre: "Fonderie Horne", lieu: "Rouyn-Noranda" },
  { src: "portfolio/portfolio-07.jpg", titre: "Lac Osisko", lieu: "Rouyn-Noranda" },

  { src: "portfolio/portfolio-19.jpg", titre: "UQAT, Coucher du soleil", lieu: "Rouyn-Noranda" },
  { src: "portfolio/larriviere-01.jpg", titre: "Avenue Larrivière", lieu: "Rouyn-Noranda" },
  { src: "portfolio/portfolio-02.jpg", titre: "Parc à Fleur d'Eau", lieu: "Rouyn-Noranda" },
  { src: "portfolio/portfolio-03.jpg", titre: "Nid de l'Épervier", lieu: "Collines Kékéko" },

  { src: "portfolio/portfolio-06.jpg", titre: "Pont couvert", lieu: "St-Eugène-de-Guigues" },
  { src: "portfolio/pont-normetal-01.jpg", titre: "Pont couvert", lieu: "Normétal" },
  { src: "portfolio/lac-paddle-01.jpg", titre: "Paddle board", lieu: "Lac St-Amand" },
  { src: "portfolio/maison-lac.jpg", titre: "Maison au bord du lac", lieu: "Témiscamingue" },

  { src: "portfolio/portfolio-10.jpg", titre: "Sentiers du lac Rouyn", lieu: "Rouyn-Noranda" },
  { src: "portfolio/portfolio-11.jpg", titre: "Lac Beaverhouse", lieu: "Dobie, Ontario" },
  { src: "portfolio/reboisement-01.jpg", titre: "Reboisement", lieu: "D'Alembert (Rouyn-Noranda)" },
  { src: "portfolio/portfolio-14.jpg", titre: "Sentier sinueux", lieu: "D'Alembert (Rouyn-Noranda)" }
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