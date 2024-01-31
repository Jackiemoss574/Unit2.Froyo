let flavorQuantities = {
  vanilla: 0,
  strawberry: 0,
  coffee: 0,
  mudpie: 0,
  blueberry: 0,
  redvelvet: 0,
  orangesherbert: 0
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

function showOrderSummary() {
  let summaryText = '';
  let totalQuantity = 0;
  for (let flavor in flavorQuantities) {
      totalQuantity += flavorQuantities[flavor];
      if (flavorQuantities[flavor] > 0) {
          summaryText += `${flavor.charAt(0).toUpperCase() + flavor.slice(1)}: ${flavorQuantities[flavor]} \n`;
      }
  }
  summaryText += `Total: ${totalQuantity}`;
  document.getElementById('orderSummary').innerText = summaryText;
}
window.onload = function() {
  let userFlavors = prompt("Enter your desired froyo flavors, separated by commas:");
  // Process the userFlavors string as needed
};
