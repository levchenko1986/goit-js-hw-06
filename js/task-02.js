const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elementsIngredients = document.querySelector('#ingredients');

const elements = ingredients.map((el, idx) => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredients[idx];
  liEl.classList.add('item');
  return liEl;
});
elementsIngredients.append(...elements);
