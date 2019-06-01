import { View } from "@appstract/as-core";

export default class Overlay extends View {
  constructor(el) {
    super(el);
    this.addListener("click", this.onOverlayClick.bind(this));
  }

  show() {
    this.el.classList.add("active");
  }

  hide() {
    this.el.classList.remove("active");
  }

  onOverlayClick() {
    this.emit("overlayClose");
  }
}
