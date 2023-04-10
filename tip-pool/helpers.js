
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}
 
function appendDelBtn(tr, type){
  let delTd = document.createElement('td');
  delTd.innerText = "X";
  delTd.className = "delTd";

  delTd.addEventListener('click', removeParent);

  tr.append(delTd);
}

function removeParent(e){
  let parent = e.target.closest('tr');

  delete allServers[parent.id];

  parent.parentNode.removeChild(parent);

  updateServerTable();
}