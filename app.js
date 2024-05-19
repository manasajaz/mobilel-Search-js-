const arr = [
  {
    brand: "Samsung",
    model: "A30",
    price: 40000,
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "A10",
    price: 200000,
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "A20",
    price: 30000,
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Vivo",
    model: "Y20",
    price: 20000,
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "Y11",
    price: 20,
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "Y15",
    price: 30000,
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
  },
  {
    brand: "Motorola",
    model: "123",
    price: 50000,
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Motorola",
    model: "45",
    price: 50000,
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Iphone",
    model: "12",
    price: 300000,
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "13",
    price: 400000,
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "X",
    price: 200000,
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
];

let BrandSelect = document.getElementById("BrandSelect");
let ModelSelect = document.getElementById("ModelSelect");
let priceSelect = document.getElementById("priceSelect");

let brands = arr.map((x) => x.brand);
// console.log(brands);
///====== ye duplication ko khtm krta hai =====////////////
brands = [...new Set(brands)];
console.log(brands);

BrandSelect.innerHTML += brands.map(
  (x) => `<option value="${x}">${x}</option>`
);

let selectBrand = () => {
  let selectedBrand = BrandSelect.value;
  let models = arr.filter((x) => x.brand == selectedBrand);
  console.log(models);

  ModelSelect.innerHTML = "";
  ModelSelect.innerHTML += models.map(
    (x) => `<option value="${x.model}">${x.model}</option>`
  );
};
BrandSelect.addEventListener("change", selectBrand);

let selectModel = () => {
  let selectedModel = ModelSelect.value;
  let price = arr.filter((x) => x.model == selectedModel);
  console.log(price);

  priceSelect.innerHTML = "";
  priceSelect.innerHTML += `
  <li>${price.map(
    (x) =>
      `price of ${x.brand} ${x.model}  is ${x.price}  camera ${x.camera}  ram ${x.ram}  rom${x.rom} `
  )}
  </li>`;
};
ModelSelect.addEventListener("change", selectModel);

//////////===============================////////////////////

/////=========   find  ===========//////////

// let obj = arr.find((x) => x.brand == "Iphone");
// console.log(obj);

/////=========   findIndex  ===========//////////

// let obj1 = arr.findIndex((x) => x.brand == "Iphone");
// console.log(obj1);

/////=========   flat  ===========//////////

// let array = [1, [2], 2, [3, [12]]];
// let flatmethod = array.flat(Infinity);
// console.log(flatmethod);

/////=========   Reduce use for calculate amount  important ===========//////////

// let sum = arr.reduce((x, y) => {
//   console.log(x, y);
//   return x + y.price;
// }, 0);
// console.log(sum);

/////=========   some ===========//////////

// let anyObjectSelected = arr.some((x) => x.ram == "8gb");
// console.log(anyObjectSelected);

/////=========   every ===========//////////

// let everyObjectSelected = arr.every((x) => x.ram == "8gb");
// console.log(everyObjectSelected);
