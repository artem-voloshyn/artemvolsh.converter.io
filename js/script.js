// Dictionary
const measureUnits = {
  KG_GR: 1000,
  KG_MG: 1000000,
  KG_OZ: 35.2739619,
  KG_CR: 5000,
  KG_PD: 2.20462262,

  GR_KG: 0.001,
  GR_MG: 1000,
  GR_OZ: 0.0352739619,
  GR_CR: 5,
  GR_PD: 0.00220462262,

  MG_KG: 1 * 10 ** -6,
  MG_GR: 1 * 10 ** -3,
  MG_OZ: 3.52739619 * 10 ** -5,
  MG_CR: 5 * 10 ** -3,
  MG_PD: 2.20462262 * 10 ** -6,

  OZ_KG: 0.0283495231,
  OZ_GR: 28.3495231,
  OZ_MG: 28349.5231,
  OZ_CR: 141.747616,
  OZ_PD: 0.0625,

  CR_KG: 0.0005,
  CR_GR: 0.2,
  CR_MG: 200,
  CR_OZ: 0.00705479239,
  CR_PD: 0.000440924524,

  PD_KG: 0.45359237,
  PD_GR: 453.59237,
  PD_MG: 453592.37,
  PD_OZ: 16,
  PD_CR: 2267.96185,
};

// Describing Constants
const selectInput = document.getElementById("value-input"),
  selectHolder = document.getElementById("section-holder"),
  selectButton = document.getElementById("convert-button"),
  selectMeasure1 = document.getElementById("measure1"),
  selectMeasure2 = document.getElementById("measure2"),
  optionsArray = Array.from(selectMeasure1);

selectMeasure1.options[0].selected = true;

// Filling Second Select with Options
fillSelect();

function fillSelect() {
  selectMeasure2.innerHTML = "";

  optionsArray.forEach((item) => {
    if (item.selected == false) {
      selectMeasure2.append(item.cloneNode(true));
    }
  });
}
function animationCallback() {
   setTimeout(() => {
		 selectButton.style.top = -1 + "px";
	 }, 35); 
}

// Listening for change to update the Select Options List
selectMeasure1.addEventListener("change", fillSelect);

// Searching the Convert constant in Dictionary + Rendering Output
selectButton.addEventListener("click", () => {
  const inputValue = selectInput.value;

  let result =
    inputValue *
    measureUnits[`${selectMeasure1.value}_${selectMeasure2.value}`];
  selectHolder.innerHTML = result.toFixed(4);
});

// Button Animation
selectButton.addEventListener("click", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;

  let ripples = document.createElement("span");

  ripples.style.left = x + "px";
  ripples.style.top = y + "px";

  this.appendChild(ripples);

  setTimeout(() => {
    ripples.remove();
  }, 700);

  setTimeout(() => {
    selectButton.style.top = 1 + "px";
		animationCallback();
  }, 35);
});

