const photos = [
  { src: "portfolio/droneabitibi-31.jpg", titre: "Rivière Duparquet", lieu: "Gallichan, Abitibi-Ouest, Qc" },
  { src: "portfolio/droneabitibi-30.jpg", titre: "Rue principale", lieu: "Duparquet, Abitibi-Ouest, Qc" },
  { src: "portfolio/droneabitibi-29.jpg", titre: "Rapides windfall", lieu: "Cléricy, Rouyn-Noranda, Qc" },
  
  { src: "portfolio/droneabitibi-28.jpg", titre: "Rang de Saint-Agnès", lieu: "Bellecombe, Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-27.jpg", titre: "Village de Granada", lieu: "Granada, Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-26.jpg", titre: "Vue sur le Lac Dufault", lieu: "D'Alembert, Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-25.jpg", titre: "Mont Chaudron", lieu: "Arntfield, Rouyn-Noranda, Qc" },
  
  { src: "portfolio/droneabitibi-24.jpg", titre: "Inspection d'une tour en construction", lieu: "Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-23.jpg", titre: "Exercice militaire", lieu: "D'Alembert, Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-22.jpg", titre: "UQAT, Campus de Rouyn-Noranda", lieu: "Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-21.jpg", titre: "Centre-ville en hiver", lieu: "Rouyn-Noranda, Qc" },

  { src: "portfolio/droneabitibi-20.jpg", titre: "Avenue Larrivière", lieu: "Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-19.jpg", titre: "UQAT, Coucher du soleil", lieu: "Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-18.jpg", titre: "Fonderie Horne", lieu: "Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-17.jpg", titre: "Grande place Edmund-Horne", lieu: "Rouyn-Noranda, Qc" },


  { src: "portfolio/droneabitibi-15.jpg", titre: "Ancien parc à résidus miners", lieu: "Normétal, Abitibi-Ouest, Qc" },
  { src: "portfolio/droneabitibi-14.jpg", titre: "Paddle board", lieu: "Lac St-Amand, Béarn, Témiscamingue, Qc" },
  { src: "portfolio/droneabitibi-13.jpg", titre: "Sentier sinueux", lieu: "D'Alembert, Rouyn-Noranda, Qc" },

  { src: "portfolio/droneabitibi-12.jpg", titre: "Reboisement", lieu: "D'Alembert, Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-11.jpg", titre: "Lac Beaverhouse", lieu: "Dobie, Ontario" },
  { src: "portfolio/droneabitibi-10.jpg", titre: "Chutes du lac Rouyn", lieu: "Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-09.jpg", titre: "Hôpital", lieu: "Rouyn-Noranda, Qc" },

  { src: "portfolio/droneabitibi-08.jpg", titre: "Carrefour giratoire", lieu: "Évain, Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-07.jpg", titre: "Lac Osisko", lieu: "Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-06.jpg", titre: "Pont couvert", lieu: "St-Eugène-de-Guigues, Témiscamingue, Qc" },
  { src: "portfolio/droneabitibi-05.jpg", titre: "UQAT, Centre du Témiscamingue", lieu: "Notre-Dame-du-Nord, Témiscamingue, Qc" },
  
  { src: "portfolio/droneabitibi-04.jpg", titre: "Parc de la Ribambelle", lieu: "Ville-Marie, Témiscamingue, Qc" },
  { src: "portfolio/droneabitibi-03.jpg", titre: "Nid de l'Épervier", lieu: "Collines Kékéko, Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-02.jpg", titre: "Parc à Fleur d'Eau", lieu: "Rouyn-Noranda, Qc" },
  { src: "portfolio/droneabitibi-01.jpg", titre: "Stationnement du Cégep", lieu: "Rouyn-Noranda, Qc" },
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