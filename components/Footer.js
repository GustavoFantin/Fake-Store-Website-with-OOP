import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('div')
    footer.classList = 'footer-container'
    footer.innerHTML = `
    <img src='../assets/logo.svg' width=100px>
    <span>2025 Copyright - ${this.props.siteOwner}. All rights reserved.</span>
    `

    return footer
  }
}