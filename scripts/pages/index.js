import { PhotographerApi } from "../controleurApi/PhotographerApi.js";
import { PhotographerModel } from "../models/Photographer.js";
import { PhotographerTemplate } from "../templates/Photographer.js";

class App {
  constructor() {
    this.photographers;
  }

  async init() {
    const photographerApi = new PhotographerApi();
    this.photographers = await photographerApi.getPhotographers();
    this.displayData();
  }

  //Méthode displayData::récupère l'élément DOM
  async displayData() {
    const photographersSection = document.querySelector(
      ".photographer_section"
    );

    //la méthode forEach pour itérer sur chaque élément (photographe) du tableau this.photographers.
    this.photographers.forEach((photographer) => {
      // Pour chaque photographe, crée une instance de PhotographerTemplate
      const photographerModel = new PhotographerModel(photographer);
      const photographerTemplate = new PhotographerTemplate(photographerModel);
      // Appelle la méthode
      const userCardDOM = photographerTemplate.getDOM();

      // Ajoute l'élément DOM du photographe à la section des photographes dans le document
      photographersSection.appendChild(userCardDOM);
    });
  }
}

//Création de l'Instance de l'Application et Appel de la Méthode init
const app = new App();
app.init();
