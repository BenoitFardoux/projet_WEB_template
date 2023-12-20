const coursGroupes = [
  {
    nom: "Informatique",
    cours: [
      {
        nom: "HTML",
        image: "../assets/images/background_image.png",
      },
      {
        nom: "Javascript",
        image: "../assets/images/background_image.png",
      },
      {
        nom: "CSS",
        image: "../assets/images/background_image.png",
      },
    ],
  },
  {
    nom: "Design",
    cours: [
      {
        nom: "IHM",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        nom: "Dessin vectoriel",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    nom: "Comptabilité",
    cours: [
      {
        nom: "Gestion d'entreprise",
        image:
          "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        nom: "Impôt Français",
        image:
          "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        nom: "Impôt Malté",
        image:
          "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1726&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

function createCategoryContainer(coursGroupe) {
  const categoriesSection = document.createElement("section");
  const categoriesTitle = document.createElement("h2");
  const coursContainer = document.createElement("div");

  for (const cours of coursGroupe.cours) {
    coursContainer.appendChild(createCoursLink(cours));
  }

  coursContainer.className = "cours-container";
  categoriesTitle.innerText = coursGroupe.nom;

  categoriesSection.appendChild(categoriesTitle);
  categoriesSection.appendChild(coursContainer);

  return categoriesSection;
}

function createCoursLink(cours) {
  const coursLink = document.createElement("a");

  coursLink.innerText = cours.nom;
  coursLink.className = "cours";
  coursLink.style.backgroundImage = `url('${cours.image}')`;
  coursLink.href = "./Cours";

  return coursLink;
}

window.addEventListener("load", () => {
  const categoryContainer = document.getElementById("categories-container");

  for (const coursGroupe of coursGroupes) {
    categoryContainer.appendChild(createCategoryContainer(coursGroupe));
  }
});
