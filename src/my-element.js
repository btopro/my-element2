import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class myElement extends DDDSuper(LitElement) {

  static get tag() {
    return "my-element";
  }

  constructor() {
    super();
    this.title = "";
    this.cool = false;
  }

  static get properties() {
    return {
      title: { type: String },
      cool: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--my-element-font-size, var(--ddd-font-size-s));
      }
      :host([cool]) {
        font-size: var(--my-element-font-size, var(--ddd-font-size-xl));
        background-color: orange;
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
    `];
  }

  render() {
    return html`
<div class="wrapper">
  <div>${this.title}</div>
  <div>${this.cool ? html`<strong>Really cool</strong>` : ``}</div>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(myElement.tag, myElement);