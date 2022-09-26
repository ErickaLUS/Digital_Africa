const langue = {
  Français: {
    Title: " votre Start-up avec une solution numérique offerte",
    paragraphe1:
      "Vous etes une start-up participez a talent for startups By Digtal-Africa et beneficier d un accompagement gratuit pour la  réalisation de vos projets(website, application web et mobile, logiciel de gestions) par les apprenants de Kinshasa Digital  Academy",
    btn3: "Je postule",
    program: "PROGRAMME",
    inscription:
      "Voici quelques étapes à suivre pour procéder à l'inscription duchallenge Talent 4 startup",
    btn4: "Télécharge les Conditions",
    paragraph2:
      "Le document ci-dessous reprend de manière intégrale les différents critères de selection qui pourront déterminer si vous etes éligible ou non au programme Talent4startups challenge",
    titreCompteur: "Fin des inscriptions dans",
    dates: "jours",
    min: "minute",
    heur: "heure",
    seco: "seconde",
  },
  Anglais: {
    Title: "your Start-up with a free digital solution",
    paragraphe1:
      "You are a start-up participate in talent for startups By Digtal-Africa and benefit from free support for the realization of your projects (website, web and mobile application, management software) by the learners of Kinshasa Digital Academy",
    btn3: "I postulate",
    program: "PROGRAM",
    inscription:
      "Here are some steps to follow to register for the Talent 4 startup challenge",
    btn4: "Download the Terms",
    paragraph2:
      "The document below summarizes in full the various selection criteria that may determine whether or not you are eligible for the Talent4startups challenge program",
    dates: "Days",
    min: "Minutes",
    heur: "hours",
    seco: "seconds",
  },
};
const Title = document.querySelector(".Title");
const paragraphe1 = document.querySelector(".paragraphe1");
const btn3 = document.querySelector(".btn3");
const program = document.querySelector(".program");
const inscription = document.querySelector(".inscription");
const btn4 = document.querySelector(".btn4");
const paragraph2 = document.querySelector(".paragraph2");
const buttons = document.querySelector(".buttons");
const btnEng = document.querySelector("#btn1");
const btnFr = document.querySelector("#btn2");
const dates = document.querySelector("#dates");
const min = document.querySelector("#min");
const heur = document.querySelector("#heur");
const seco = document.querySelector("#seco");
//mettre en anglais
btnEng.addEventListener("click", () => {
  Title.textContent = langue.Anglais.Title;
  paragraphe1.textContent = langue.Anglais.paragraphe1;
  btn3.textContent = langue.Anglais.btn3;
  program.textContent = langue.Anglais.program;
  inscription.textContent = langue.Anglais.inscription;
  btn4.textContent = langue.Anglais.btn4;
  paragraph2.textContent = langue.Anglais.paragraph2;
  dates.textContent = langue.Anglais.dates;
  min.textContent = langue.Anglais.min;
  heur.textContent = langue.Anglais.heur;
  seco.textContent = langue.Anglais.seco;
});
//mettre en franchais
btnFr.addEventListener("click", () => {
  Title.textContent = langue.Français.Title;
  paragraphe1.textContent = langue.Français.paragraphe1;
});
