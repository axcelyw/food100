const timerDegree = document.querySelector(".header__timer-extra");
      let timerDegreeSpeed = 30
      function recursiveDegree(i = 0){
          timerDegree.innerHTML = i
          i++
          if (i === 50){
              timerDegreeSpeed = 50
          }else if (i === 70){
              timerDegreeSpeed = 100
          }else if (i === 80){
              timerDegreeSpeed = 150
          }else if (i === 90){
              timerDegreeSpeed = 200
          }
          else if (i === 95){
              timerDegreeSpeed = 250
          }
          if (i <= 100){
              setTimeout(() => {
                  recursiveDegree(i)
              }, timerDegreeSpeed)
          }
          return recursiveDegree
      }
      recursiveDegree()


const product = {
plainBurger: {
        name: 'plainBurger',
        price: 10000,
        img: 'images/product2.jpg',
        amount: 0,
        get totalSum() {
            return this.price * this.amount;
        }
    },
    freshBurger: {
        name: 'freshBurger',
        price: 20500,
        img: 'images/product1.jpg',
        amount: 0,
        get totalSum() {
            return this.price * this.amount;
        }
    },
    freshCombo: {
        name: 'freshCombo',
        price: 31900,
        img: 'images/product3.jpg',
        amount: 0,
        get totalSum() {
            return this.price * this.amount;
        }
    },
}

const productBtns = document.querySelectorAll('.main__product')
      burgerSymbol = document.querySelectorAll('.main__product-btn'),
      burgerNum = document.querySelectorAll('.main__product-num'),
      burgerSum = document.querySelectorAll('.main__product-price'),
      basketBtn = document.querySelector('.addCart'),
      basketModals = document.querySelector('.receipt'),
      basketPay = document.querySelector('.receipt__window-btn')
     

basketBtn.addEventListener('click', () => {
    basketModals.classList.add('active');
    let x = basketModals;
    x.style.display='inline-block'
    x.style.opacity='1';
 })

 basketPay.addEventListener('click', () => {
    basketModals.classList.remove('active');
    let x = basketModals;
    x.style.display='none'
    x.style.opacity='0';
 } )



 productBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        addProduct(this)
    })  
 })


      
 function addProduct(btn) {
    let parent = btn.closest('.main__product')
    let parentId = parent.getAttribute('id')
    product[parentId].amount++ 
    renderBasket()
   
}

function renderBasket() {
    const productArray = []
    for(const key in product) {
         const productItem = product[key]
         const productAmount = productItem
         if(productItem.amount){
            productArray.push(productItem)
            productAmount.innerHTML = product.amount
         }else {
    
            productAmount.innerHTML = 0
         }
         
        }
        
        productArray.forEach(item => {

        })
       console.log(productArray);
}

// function cardItemProduct(obj) {
//     const {name, price, img, amount} = obj 
    
//     return `
//     <div class="receipt__window-out">
    
//     </div>
//     `
// }


      
    
      