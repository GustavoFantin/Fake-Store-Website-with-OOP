import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {

  constructor(props) {
    super(props)
    this.state = { products: [] }
  }
  
  mount(container) {
    fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
      .then(data => {
        this.state.products = data
        container.appendChild(this.render())
        // console.log(data)
      })
      .catch(err => console.error(err))
  }
  
  
  
  
  render() {
    const productList = document.createElement('div')
    productList.className = "product-list"
    productList.innerHTML = `<h1>My Products:</h1>`
    
    this.state.products.forEach(product => {
      const productItem = new ProductItem({
        product,
        cartContext: this.props.cartContext
      })
      // console.log(productItem.render());
      
      productList.appendChild(productItem.render())
    })

    

    return productList
  }
}