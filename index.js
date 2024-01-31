let flavorQuantities = {
  vanilla: 0,
  strawberry: 0,
  coffee: 0,
  mudpie: 0,
  blueberry: 0,
  redVelvet: 0,
  orangeSherbert: 0
};

function addFlavor(flavor) {
  if (flavor in flavorQuantities) {
      flavorQuantities[flavor]++;
      document.getElementById(`quantity-${flavor}`).innerText = flavorQuantities[flavor];
  }
}

function subtractFlavor(flavor) {
  if (flavor in flavorQuantities && flavorQuantities[flavor] > 0) {
      flavorQuantities[flavor]--;
      document.getElementById(`quantity-${flavor}`).innerText = flavorQuantities[flavor];
  }
}

function resetFlavors() {
  for (let flavor in flavorQuantities) {
      flavorQuantities[flavor] = 0;
      document.getElementById(`quantity-${flavor}`).innerText = 0;
  }
}

