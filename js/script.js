

const goods = [
  { image: '', title: 'Shirt', price: 150 },
  { image: '', title: 'Socks', price: 50 },
  { image: '', title: 'Jacket', price: 350 },
  { image: '', title: 'Shoes', price: 250 },
];

const renderGoodsItem = (image = 'Здесь должна быть картинка', title = 'Наименование', price = 'Цена') => {
  return `<div class="goods-item"><div class="goods-item_top"><img class="goods-item_top__img">${image}</img><h3 class="goods-item_top__title">${title}</h3><p class="goods-item_top__price">${price}</p></div><button class="goods-item_button">Добавить</button></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.image, item.title, item.price));

  document.querySelector('.goods-list').innerHTML = goodsList.join(''); // map объединяет элементы массива в строка, которая, по умолчанию, разделяется запятыми. C помощью .join() можно указать любой разделитель, либо убрать его.
}

renderGoodsList(goods);


