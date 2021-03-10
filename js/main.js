const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// when the page loads, it shows all items
window.addEventListener("load", function () {
  showBeerItems(beer);
  showBeerBtns();
});

const showBeerItems = (beerItems) => {


  let showBeer = beerItems.map(function (item) {

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
  const categories = beer.reduce(
// all é setado como valor inicial, pois nao existe no beer
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

// cria os botões conforme os valores obtidos na categories
  const categoryBtns = categories.map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
      ${category}</button>`;
    }).join("");
  container.innerHTML = categoryBtns;
// filter-btns tem que ser selecionados depois que categoryBtns foi criado no HTML
// ja que os botoes sao criados dinamicamente pelo JS 
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filtra os itens
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
// realiza um filtro para mostrar somente a categoria selecionada 
      const beerCategory = beer.filter(function (beerItem) {
    
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