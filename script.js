class Converter {
  constructor(showResult) {
      this.showResult = resultDisplay;
      this.clear()
  }

  inputValue(value) {
      this.val = value
  }


  convertInput(from, to) {
      let result;
      this.from = from
      this.to = to
      if (this.from === this.to) {
          this.result = this.val
      }
      else if (this.from === "km" && this.to === "m") {
          this.result = this.val * 1000
      }
      else if (this.from === "km" && this.to === "cm") {
          this.result = this.val * 100000
      }
      else if (this.from === "km" && this.to === "ml") {
          this.result = this.val * 0.621371192
      }

      else if (this.from === "m" && this.to === "km") {
          this.result = this.val / 10000
      }
      else if (this.from === "m" && this.to === "cm") {
          this.result = this.val * 100
      }
      else if (this.from === "m" && this.to === "ml") {
          this.result = this.val * 0.000621371192
      }

      else if (this.from === "cm" && this.to === "km") {
          this.result = this.val / 100000
      }
      else if (this.from === "cm" && this.to === "m") {
          this.result = this.val / 100
      }
      else if (this.from === "cm" && this.to === "ml") {
          this.result = this.val / 160934.4
      }

      else if (this.from === "ml" && this.to === "km") {
          this.result = this.val * 1.609344
      }
      else if (this.from === "ml" && this.to === "cm") {
          this.result = this.val * 160934.4
      }
      else if (this.from === "ml" && this.to === "m") {
          this.result = this.val * 1609.344
      }

  }

  diplayAnswer() {
      if (this.val === "0" || this.val === "") return
      this.showResult.innerHTML = `${this.val} ${this.from} = <br> ${this.result} ${this.to}`

  }

  clear() {
      this.showResult.innerHTML = ""
      input.value = ""
  }

}