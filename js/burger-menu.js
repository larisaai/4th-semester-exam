import { View } from "@appstract/as-core";
import Overlay from "./overlay";
import DropDownMenu from "./dropDownMenu";

export default class Header extends View {
  constructor(el) {
    super(el);

    this.body = document.querySelector("body");
    this.overlay = new Overlay(document.querySelector(".overlay"));
    this.dropdowns = [];
    this.addListener("click", ".burger-menu", this.onMobileMenuClick);
    this.overlay.subscribe("overlayClose", this.onOverlayClick.bind(this));

    this.initDropdownMaenus();
  }

  initDropdownMenus() {
    this.query(".menu-item").forEach(item => {
      this.dropdowns.push(
        new DropDownMenu(item, this.onDropdownToggle.bind(this))
      );
    });
  }
  onMobileMenuClick(e) {
    if (this.el.classList.contains("is-open")) {
      this.el.classList.remove("is-open");
      this.body.classList.remove("fixed");
      if (this.activeDropdown) {
        this.activeDropdown.close();
      }
      this.overlay.hide();
    } else {
      this.el.classList.add("is-open");
      this.overlay.show();
      setTimeout(() => {
        this.body.classList.add("fixed");
      }, 500);
    }
  }

  onOverlayClick() {
    if (this.el.classList.contains("is-open")) {
      this.onMobileMenuClick();
    } else if (this.activeDropdown) {
      this.activeDropdown.close();
      this.activeDropdown = null;
      this.overlay.hide();
    }
  }

  onDropdownToggle(dropdown, isActive) {
    const overlayActive = this.el.classList.contains("is-open");

    if (this.activeDropdown && this.activeDropdown !== dropdown) {
      this.activeDropdown.close();
    }

    if (isActive) {
      this.activeDropdown = this.dropdowns.find(item => item === dropdown);
      if (!overlayActive) {
        this.overlay.show();
      }
    } else {
      this.activeDropdown = null;
      if (!overlayActive) {
        this.overlay.hide();
      }
    }
  }
}
