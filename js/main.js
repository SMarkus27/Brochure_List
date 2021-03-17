const btnContainer = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");  


window.addEventListener('load',()=>{
  showBeerItems(beer);
  showBeerBtns();

});

const showBeerItems = (beerItems) => {
  let showBeer = beerItems.map((item)=>{
    return `<article class="beer-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
      </article>`;

  });
  showBeer = showBeer.join("");
  sectionCenter.innerHTML = showBeer;
}
const showBeerBtns = () => {

  const categories = beer.reduce((values,item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["all"]
);
  const categoryBtns = categories.map( (category) => {
    return `<button class="filter-btn" type="button" data-id=${category}>
    ${category}</button>`;
  }).join("");
  btnContainer.innerHTML = categoryBtns;

const filterBtns = btnContainer.querySelectorAll(".filter-btn");
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    const beerCategory = beer.filter( (beerItem) => {
  
      if (beerItem.category === category) {
        return beerItem;
        
      }
    });
    if (category === "all") {
      showBeerItems(beer);
    } else {
      showBeerItems(beerCategory);
    }
  });
});

}