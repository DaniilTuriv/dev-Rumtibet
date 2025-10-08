const requestData = document.querySelector('#request-data')
const locationSelect = document.querySelector('#location-select')
const calendarInput = document.querySelector('#calendar')
const memberSelect = document.querySelector('#member-select')
const test = document.querySelector('#triger-request')

const requestConfig = {
    location: "",
    date: "",
    member: ""
}

locationSelect.addEventListener("change", () => {
    let value = locationSelect.value
    requestConfig.location = value
    console.log(requestConfig)
})

calendarInput.addEventListener("change", () => {
    let value = calendarInput.value
    requestConfig.date = value
    console.log(requestConfig)
})

memberSelect.addEventListener("change", () => {
    let value = memberSelect.value
    requestConfig.member = value
    console.log(requestConfig)
})

const setValue = () => {
    const formValue = `Локация для тура: ${requestConfig.location}\nДата похода: ${requestConfig.date}\nУчастники: ${requestConfig.member}`
    requestData.innerHTML = formValue
}

test.addEventListener("click", setValue)