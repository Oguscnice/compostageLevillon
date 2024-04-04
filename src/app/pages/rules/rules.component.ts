import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss'
})
export class RulesComponent {

  sectionVisible : string = "Mode d'emploi";

  differentRules : string[] = [
    "Mode d'emploi",
    "Je PEUX jeter",
    "Je NE peux PAS jeter"
  ]

  howToUse : {phase : string, picture : string}[] = [
    {
      phase : "Rendez-vous au Bac n°2",
      picture : "../../../assets/images/bacs/compostFront01ThubmnailCircle.jpg"
    },
    {
      phase : "Ouvrez le et versez vos déchêts alimentaires à l'intérieur",
      picture : "../../../assets/images/bacs/compostFront02Thubmnail.jpg"
    },
    {
      phase : "Ouvrez le Bac n°1",
      picture : "../../../assets/images/bacs/compostFront03Thubmnail.jpg"
    },
    {
      phase : "Remplissez le sceau mis à votre disposition avec l'équivalent d' 1/3 en quantité de broyat, par rapport à ce que vous venez de rendre à mère nature",
      picture : "../../../assets/images/bacs/broyat.jpg"
    },
    {
      phase : "Versez le broyat sur vos déchats.",
      picture : "../../../assets/images/bacs/compostFront04ThubmnailCricle.jpg"
    },
    {
      phase : "Mélangez le tout afin que ce soit homogène.",
      picture : "../../../assets/images/bacs/compostMelange.jpg"
    },
    {
      phase : "Pensez à refermer les bacs n°1 et 2 en repartant.",
      picture : "../../../assets/images/bacs/compostBackThubmnail.jpg"
    },
    {
      phase : "Et profitez de la vue.",
      picture : "../../../assets/images/bacs/diagonale.jpg"
    },
  ]

  canThrow : {name: string, isMealDb: boolean, picture: string}[] = [
    {
      name: "Fruits",
      isMealDb: true,
      picture: "Fruit"
    },
    {
      name: "Légumes",
      isMealDb: false,
      picture: "../../../assets/images/fruits-legumes/vegetables.jpg"
    },
    {
      name: "Coquille d'oeuf",
      isMealDb: true,
      picture: "Eggs"
    },
    {
      name: "Graines et noix",
      isMealDb: false,
      picture: "../../../assets/images/fruits-legumes/nuts.jpg"
    },
    {
      name: "Marre de café",
      isMealDb: false,
      picture: "../../../assets/images/fruits-legumes/coffee.jpg"
    },
    {
      name: "Plantes",
      isMealDb: false,
      picture: "../../../assets/images/fruits-legumes/plants.jpg"
    },
  ]

  cantThrow : {name: string, isMealDb: boolean, picture: string}[] = [
    {
      name: "Sac alimentaire grande surface",
      isMealDb: false,
      picture: "../../../assets/images/fruits-legumes/plastic-bag.jpg"
    },
    {
      name: "Aliment cuit ou cuisiné",
      isMealDb: true,
      picture: "Chicken"
    },
    {
      name: "Pain",
      isMealDb: true,
      picture: "bread"
    },
    {
      name: "Croissant / Pain au chocolat",
      isMealDb: false,
      picture: "../../../assets/images/fruits-legumes/pastries.jpg"
    },
    {
      name: "Gros Morceaux (à couper)",
      isMealDb: true,
      picture: "pineapple"
    },
    {
      name: "Papier / Carton",
      isMealDb: false,
      picture: "../../../assets/images/fruits-legumes/box.png"
    },
    {
      name: "Coton / Laine / Tissu / Fibres",
      isMealDb: false,
      picture: "../../../assets/images/fruits-legumes/towels.jpg"
    },
    {
      name: "Dêchet d'animaux (poil et déjection)",
      isMealDb: false,
      picture: "../../../assets/images/fruits-legumes/litiere.jpg"
    },
    {
      name: "Os",
      isMealDb: false,
      picture: "../../../assets/images/fruits-legumes/bone.jpg"
    },
    {
      name: "Viande",
      isMealDb: true,
      picture: "Beef Fillet"
    },
    {
      name: "Fromage",
      isMealDb: true,
      picture: "Cheese"
    },
    {
      name: "Brique Alimentaire",
      isMealDb: true,
      picture: "Soya Milk"
    },
    {
      name: "Huile",
      isMealDb: true,
      picture: "Oil"
    },
    {
      name: "Couche",
      isMealDb: false,
      picture: "../../../assets/images/fruits-legumes/couche.jpg"
    },
    {
      name: "Plastique",
      isMealDb: true,
      picture: "water"
    },
  ]

  changeVisibilitySection = (rule : string) => this.sectionVisible = rule;

}
