import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="main"
export default class extends Controller {
  static targets = ["navMenu", "skillsContentOpen", "skillsContentClose"]

  connect() {
    console.log("Hello")
  }

  navToggle() {
    this.navMenuTarget.classList.add("show-menu")
  }

  navClose() {
    this.navMenuTarget.classList.remove("show-menu")
  }

  //Accordion
  toggleSkillsOpen() {
    // let itemClass = this.skillsContentOpenTarget.classList.value
    // console.log(itemClass)
    // if (itemClass === "skills__content skills__open") {
    //   console.log("close")
    //   itemClass = "skills__content skills__close"
    // } else {
    //   console.log("open")
    //   itemClass = "skills__content skills__open"
    // }
    if (this.skillsContentOpenTarget.classList.value === "skills__content skills__open") {
      return this.skillsContentOpenTarget.classList.value = "skills__content skills__close"
    } else {
      return this.skillsContentOpenTarget.classList.value = "skills__content skills__open"
    }
  }

  toggleSkillsClose() {
    if (this.skillsContentCloseTarget.classList.value === "skills__content skills__close") {
      return this.skillsContentCloseTarget.classList.value = "skills__content skills__open"
    } else {
      return this.skillsContentCloseTarget.classList.value = "skills__content skills__close"
    }
  }
}
