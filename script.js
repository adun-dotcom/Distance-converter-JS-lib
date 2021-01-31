class Converter {
    constructor(showResult) {
        this.showResult = showResult;
        this.clear()
    }

    convertInput(inputValue, convertFrom, convertTo) {
        this.val = inputValue
        this.convertFrom = convertFrom
        this.convertTo = convertTo

    }


    diplayAnswer(result) {
        this.result = result
        if (this.val === "0" || this.val === "") return
        this.showResult.innerHTML = result;

    }

    clear() {
        this.showResult.innerHTML = ""
        input.value = ""
    }

}
