class Slider {
    constructor(rangeElement, valueElement, options, rangeElement2, valueElement2, options2, type) {
        this.rangeElement = rangeElement
        this.valueElement = valueElement
        this.options = options
        this.rangeElement2 = rangeElement2
        this.valueElement2 = valueElement2
        this.options2 = options2

        // Attach a listener to "change" event
        this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
        this.rangeElement2.addEventListener('input', this.updateSlider.bind(this))
    }

    // Initialize the slider
    init() {
        this.rangeElement.setAttribute('min', options.min)
        this.rangeElement.setAttribute('max', options.max)
        this.rangeElement.value = options.cur
        this.rangeElement2.setAttribute('min', options2.min)
        this.rangeElement2.setAttribute('max', options2.max)
        this.rangeElement2.value = options2.cur

        this.updateSlider()
    }

    // Format the money
    asMoney(value) {
        return parseFloat(value)
            .toLocaleString('en-US', {maximumFractionDigits: 2})
    }


    updateSlider(newValue) {
        this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
        this.valueElement2.innerHTML = this.asMoney(this.rangeElement2.value)
        document.getElementById('total').innerHTML = this.asMoney(this.rangeElement.value * type * this.rangeElement2.value)
    }
}

let rangeElement = document.getElementById('range1')
let valueElement = document.getElementById('sum_of_deb')
let rangeElement2 = document.getElementById('range2')
let valueElement2 = document.getElementById('deb_day')

let options = {
    min: 20000,
    max: 500000,
    cur: 120000
}
let options2 = {
    min: 3,
    max: 60,
    cur: 45
}
let type = 0.05;

let slider = new Slider(rangeElement, valueElement, options, rangeElement2, valueElement2, options2, type)
slider.init()


let timeBtn = document.querySelectorAll('.tab_btn')
timeBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        timeBtn.forEach((time) => {
            time.classList.remove('active')
        })
        timeBtn[index].classList.add('active')
        type = timeBtn[index].dataset.value
        console.log(type)
        slider.updateSlider()

    })
})