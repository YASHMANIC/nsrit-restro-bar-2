
const orderButton = document.getElementById('orderButton');
const orderStatus = document.getElementById('orderStatus');
orderButton.addEventListener('click', function() {
  orderStatus.textContent = 'Your order is getting ready...';

});
