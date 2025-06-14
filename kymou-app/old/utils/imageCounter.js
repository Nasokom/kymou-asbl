// Ce fichier exporte un objet qui nous permet de suivre le nombre d'images globales
let imageCounter = 0;

export function incrementImageCounter() {
  imageCounter += 1;
}

export function getImageCounter() {
  return imageCounter;
}
