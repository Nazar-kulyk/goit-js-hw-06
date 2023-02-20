const categoryList = document.querySelector("ul#categories");
const categoryItem = categoryList.querySelectorAll("li.item");
console.log(`Numbers of categories: ${categoryItem.length}`);

categoryItem.forEach((item) => {
  const categoryTitle = item.querySelector("h2");
  const categoryElements = item.querySelectorAll("li");
  console.log(
    `Category: ${categoryTitle.textContent}, Elements: ${categoryElements.length}`
  );
});
