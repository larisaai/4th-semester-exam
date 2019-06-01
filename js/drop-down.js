import { View } from "@appstract/as-core";

export default class DropDownMenu extends View {
  constructor(el, callback) {
    super(el);
    this.callback = callback;
    this.addListener(
      "click",
      ".drop-down-arrow",
      this.onDropdownToggle.bind(this)
    );
  }

  onDropdownToggle() {
    if (this.el.classList.contains("active")) {
      this.close();
      this.callback(this, false);
    } else {
      this.el.classList.add("active");
      this.callback(this, true);
    }
  }

  close() {
    this.el.classList.remove("active");
  }
}
