import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props, cart) {
    super(props, cart)
    this.handleAddToCart = this.handleAddToCart.bind(this)
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.product)
    // console.log('esse eh o correto',this.props.cartContext.cart)
  }


  openModal(modal) {
    modal.showModal();  
  }

  
  closeModal(modal) {
    modal.close()
  }
  
  
 

  render() {
    const product = document.createElement('div')
    product.className = "product-item"
    // console.log(this.props.product.id);
  
    const modalId = `modal-${this.props.product.id}`


    product.innerHTML = `
      <button class='open-modal'> 
        <img src="${this.props.product.image}" width=200px>
        <h3>${this.props.product.id} ${this.props.product.title}</h3>
        <span>CA$ ${parseFloat(this.props.product.price).toFixed(2)}</span>
      </button>

      
      <dialog id="${modalId}">
        <button class="close-modal"><img src="../assets/close btn.webp"></button>
        <div class="align-modal-content">
          <div class='div-img-modal'>
            <img src="${this.props.product.image}" width=200px>
          </div>
          <div class="info-modal">
            <h3>${this.props.product.title}</h3>
            <h4>${this.props.product.description}</h4>
          </div>
        </div>
        <div class='price-modal'>
          <span>CA$ ${parseFloat(this.props.product.price).toFixed(2)}</span>
          <button class="add-cart-btn">Add to Cart <img src="../assets/basket_icon_126391.png"></button>
        </div>
      </dialog>
    `

    const modal = product.querySelector(`#${modalId}`)
    



    product.querySelector(".open-modal").addEventListener('click', () => this.openModal(modal))
    product.querySelector(".close-modal").addEventListener('click', () => this.closeModal(modal))
    
    product.querySelector('.add-cart-btn').addEventListener('click', this.handleAddToCart)

    return product
  }

  
}

