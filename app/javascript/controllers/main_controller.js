import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="main"
export default class extends Controller {
  static targets = ["navMenu", "skillsContent"]

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
  toggleSkills() {
    console.log(this.skillsContentTarget)
  }

}
