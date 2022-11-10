const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: `,document.querySelectorAll(".item").length);

const showNambersCategory = document.querySelectorAll('#categories>li');
showNambersCategory.forEach(el => {

  console.log(`Categorie: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.children.length}`,
  );
});

