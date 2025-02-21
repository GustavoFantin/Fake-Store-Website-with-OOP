export class CartContext {
  constructor() {
    this.cart = [];
    this.listeners = []
    
}

getCart() {
    return this.cart
}


//for product list

addProduct(item) {
    const found = this.cart.find(product => product.id === item.id)
    if (found) {
      this.cart = this.cart.map(product => {
        if (product.id === item.id) {
          return {
            ...product,
            quantity: product.quantity + 1
          }
        } else {
            return product
        }
    })
    } else {
      this.cart.push({
        ...item,
        quantity: 1
      }) 
    }
    console.log('cart list add',this.cart);
    console.log('olha aqui krl', this.countItem())
    this.notifyListeners()
} 

    //no carrinho, manage de todos os itens de dentro, como adicionar mais itens ou nao
    
    rmvProduct(item) {
      // console.log('I found the item',item);
      const found = this.cart.find(product => product.id === item.id)
      if (found) {
        this.cart = this.cart.map(product => {
           if (product.id === item.id) {
            return {
              ...product,
              quantity: Math.max(0, product.quantity - 1)
            }
          } else {
            return product
          }
        })
      } else {
        this.cart.push({
          ...item,
          quantity: 1
        }) 
      } 
      
      // console.log('pos remover',this.cart)
      this.notifyListeners()
  } 


  deleteItem(item) {
    this.cart = this.cart.filter(product => product.id !== item.id)
    this.notifyListeners()
  }

  priceSum() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  countItem() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }


  subscribe(listener) {
    this.listeners.push(listener) 
    // console.log(this.listeners)
  }
  
  
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.cart))
  }
}
