const items = [
  { checkboxId: "ps1", quantityId: "q1", price: 200 },
  { checkboxId: "ps2", quantityId: "q2", price: 1600 },
  { checkboxId: "ps3", quantityId: "q3", price: 550 },
  { checkboxId: "ps4", quantityId: "q4", price: 250 },
  { checkboxId: "ps5", quantityId: "q5", price: 500 },
];

function enableqty(checkboxId, quantityId) {
  const checkbox = document.getElementById(checkboxId);
  const quantity = document.getElementById(quantityId);
  quantity.disabled = !checkbox.checked;
  if (!checkbox.checked) {
    quantity.value = "";
  }
}

function result() {
  let total = 0;

  for (const item of items) {
    const checkbox = document.getElementById(item.checkboxId);
    const quantity = document.getElementById(item.quantityId);

    if (checkbox.checked) {
      const qty = Number(quantity.value) ;
      if (!qty || qty < 1) {
        alert("Please enter quantity for selected items.");
        return;
      }
      total += item.price * qty;
    }
  }

  alert("Your total amount is = " + total);
}

function reset() {
  for (const item of items) {
    const checkbox = document.getElementById(item.checkboxId);
    const quantity = document.getElementById(item.quantityId);

    checkbox.checked = false;
    quantity.value = "";
    quantity.disabled = true;
  }
}
