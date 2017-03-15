var hamburger = document.getElementById('hamburger');
var nav = document.getElementById('nav');

hamburger.onclick = function() {
  hamburger.classList.toggle('active');
  nav.classList.toggle('collapsed');
}

var toasts = document.getElementById('toasts');
function createToast (text, type) {
  var toast = document.createElement('article');
  toast.classList.add('toast');
  toast.classList.add(type);

  var toastAutoHide = setTimeout(function () {
    toast.classList.add('hidden');
  }, 3000);

  var toastAutoClose = setTimeout(function () {
    toasts.removeChild(toast);
  }, 4000);

  var toastText = document.createElement('p');
  toastText.classList.add('toast-text');
  toastText.appendChild(document.createTextNode(text));

  var toastClose = document.createElement('button');
  toastClose.classList.add('toast-close');
  toastClose.onclick = function () {
    clearTimeout(toastAutoHide);
    clearTimeout(toastAutoClose);
    toasts.removeChild(toast);
  }

  toast.appendChild(toastText);
  toast.appendChild(toastClose);

  toasts.appendChild(toast);
}

var orderBtns = document.getElementsByClassName('item-btn-order');
for (var i = 0; i < orderBtns.length; i++) {
  orderBtns[i].onclick = function(event) {
    if (event.target.classList.contains('disabled')) {
      createToast('Sorry, this product is currently out of stock.', 'negative');
    } else {
      createToast('Product has been added to your cart.', 'positive');
    }
  }
}
