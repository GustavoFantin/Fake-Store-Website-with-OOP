import { Component } from "../common/Component.js";
import { ProductList } from "./ProductList.js";
import { CartList } from "./CartList.js";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";


export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.classList.add('container')
    appContainer.innerHTML = `
    <header></header>
    <div class="cart-div"></div>
    <div class='wrapper'></div>
    <footer></footer>
    `
    
    
    const productList = new ProductList({
      cartContext: this.props.cartContext
    })

    const cartList = new CartList({
      cartContext: this.props.cartContext
    })

    const header = new Header({
      siteFname: "Shop", 
      siteLname: "Haven"
    })

    const footer = new Footer({
      siteOwner: 'Gustavo Fantin'
    })

    
    appContainer.querySelector('header').appendChild(header.render())// for header
    productList.mount(appContainer.querySelector('.wrapper')) //for product list
    appContainer.querySelector('.cart-div').appendChild(cartList.render()) //for cart list
    appContainer.querySelector('footer').appendChild(footer.render())

    
    
    return appContainer
  }

}