function placeOrder() {
    let selectedItems = document.querySelectorAll('input[type="checkbox"]:checked');
  
    if (selectedItems.length === 0) {
      alert('Please select at least one item to order.');
      return;
    }
  
    let orderId = generateOrderId();
    let orderPromise = createOrderPromise();
  
    orderPromise.then(() => {
      displayOrderResult(orderId);
    });
  }
  
  function generateOrderId() {
    // Generate a random order id (you can implement a more sophisticated logic)
    return 'ORDER' + Math.floor(Math.random() * 1000);
  }
  
  function createOrderPromise() {
    return new Promise((resolve) => {
      let randomSeconds = Math.floor(Math.random() * 5) + 1;
      setTimeout(() => {
        resolve();
      }, randomSeconds * 1000);
    });
  }

  function displayOrderResult(orderId) {
    let orderResultDiv = document.getElementById('orderResult');
    let selectedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    let foodImagesHTML = '';
  
    selectedItems.forEach((item) => {
      switch (item.value) {
        case 'Burger':
          foodImagesHTML += `<img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Burger" class="foodImage">`;
          break;
        case 'Fries':
          foodImagesHTML += `<img src="https://www.thedailymeal.com/img/gallery/the-mcdonalds-fries-scandal-youve-forgotten-about/intro-1658169563.jpg" alt="Fries" class="foodImage">`;
          break;
        case 'Cold-Drink':
          foodImagesHTML += `<img src=https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/657c91fdb3565d435bd338f8/image-2668-1687170315.jpg" alt="Drink" class="foodImage">`;
          break;
          case 'Coffee':
          foodImagesHTML += `<img src="https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg" alt="Drink" class="foodImage">`;
          break;
      }
    });
  
    orderResultDiv.innerHTML = `${foodImagesHTML}<div class="orderId">${orderId}</div>`;
  }