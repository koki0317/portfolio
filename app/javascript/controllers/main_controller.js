import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="main"
export default class extends Controller {
  static targets = ["navMenu", "skillsContentOpen", "skillsContentClose", "education", "work"]
  connect() {
    console.log("Hello")
  }

  navToggle() {
    this.navMenuTarget.classList.add("show-menu")
  }

  navClose() {
    this.navMenuTarget.classList.remove("show-menu")
  }

  Accordion
  toggleSkillsOpen() {
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

  educationClick() {
    if (this.educationTarget.className === "qualification__content") {
      this.educationTarget.classList.add("qualification__active")
      this.workTarget.classList.remove("qualification__active")
    }
  }

  workClick() {
    if (this.workTarget.className === "qualification__content") {
      this.educationTarget.classList.remove("qualification__active")
      this.workTarget.classList.add("qualification__active")
    }
  }

  modalOpen(event) {
    console.log(event.currentTarget)
    const modal = event.currentTarget.querySelector(".services__modal")
    modal.classList.toggle("active-modal")
  }
}
