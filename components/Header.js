import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
     const header = document.createElement('div')
     header.classList = 'header-container';
     header.innerHTML = `
    <div class='logo-div'>
      <span class="site-fname">${this.props.siteFname}</span><span class="site-lname">${this.props.siteLname}</span>
    </div>
    <button class="opening-btn"><img src="../assets/basket_icon_126391.png" width=30px></button>
     `
  
     const openingBtn = header.querySelector('.opening-btn');
    
    openingBtn.addEventListener('click', () => {
      // 🔹 Removendo o ponto do nome da classe no toggle()
      document.querySelector('.cart-div').classList.toggle('cart-open');
    });

    return header;
  }
}