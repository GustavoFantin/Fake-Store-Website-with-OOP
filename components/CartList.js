import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {

  constructor(props) {
    super(props)
    this.state = { cart: []} 
    
    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart);

    this.cartListUl = null
    this.priceSumming = null
    this.itemCounting = null

  }

  updateCart(cart) {

    this.state.cart = cart;
    this.cartListUl.innerHTML = ``

    this.state.cart.forEach(item => {
      const cartItem = new CartItem({
        item,
        cartContext: this.props.cartContext
      })
      this.cartListUl.appendChild(cartItem.render())
    })
    
    this.priceSumming.textContent = `Total Price: CA$ ${this.props.cartContext.priceSum().toFixed(2)}`;
    this.itemCounting.textContent = `Total Items: ${this.props.cartContext.countItem()}x`;

  }




  render() {
    
  const cartListElement = document.createElement('div')
  cartListElement.className = "cart-list" 


  cartListElement.innerHTML = `
  <div class='align-cart'>
    <h2>My Cart</h2>

    <div class="assign-column">
      <span>Product:</span>
      <span>Quantity:</span>
      <span>Price:</span>
    </div>
    <ul id="cart-item-ul"></ul>
  </div>
  
  <div class="total-div">
    <h3 id="total-price-text">Total Price <span>CA$ ${this.props.cartContext.priceSum().toFixed(2)}</span></h3>
    
    <h3 id="total-items-text">Total Items <span>${this.props.cartContext.countItem()}x</span></h3>
      
  </div>
  `  
    this.cartListUl = cartListElement.querySelector('#cart-item-ul')
    this.priceSumming = cartListElement.querySelector('#total-price-text')
    this.itemCounting = cartListElement.querySelector('#total-items-text')
    
    return cartListElement
  }
}