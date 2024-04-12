function fetchNewFoxImage(imgElement) {
  fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((data) => {
      imgElement.src = data.image;
    })
    .catch((error) =>
      console.error(
        "Erreur lors du chargement d’une nouvelle image de renard",
        error
      )
    );
}

function addClickEventToImage(imgElement) {
  imgElement.addEventListener("click", function () {
    fetchNewFoxImage(imgElement);
  });
}

document.querySelectorAll(".photos img").forEach(addClickEventToImage);

document.getElementById("addFox").addEventListener("click", function () {
  fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((data) => {
      const newFoxImage = document.createElement("img");
      newFoxImage.src = data.image;
      newFoxImage.alt = "Image d'un renard";
      addClickEventToImage(newFoxImage); // Ajoutez l'événement click à la nouvelle image

      const newFigure = document.createElement("figure");
      newFigure.classList.add("photos");
      newFigure.appendChild(newFoxImage);

      document.querySelector(".photosWrap").appendChild(newFigure);
    })
    .catch((error) =>
      console.error(
        "Erreur lors de l’ajout d’une nouvelle image de renard:",
        error
      )
    );
});
