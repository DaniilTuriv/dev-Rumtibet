const requestData = document.querySelector('#request-data')
const locationSelect = document.querySelector('#location-select')
const calendarInput = document.querySelector('#calendar')
const memberSelect = document.querySelector('#member-select')
const triggerRequest = document.querySelector('#trigger-request')

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

triggerRequest.addEventListener("click", setValue)

const modalLocationSelect = document.querySelector('#modal-location-select')
const mobileCalendar = document.querySelector('#mobile-calendar')
const modalMemberSelect = document.querySelector('#modal-member-select')
const submitButton = document.querySelector('#submit-button')
const message = document.querySelector('.message')
const stepsNav = document.querySelector('.steps__nav')
const stepNavButtonFirst = document.querySelector('.btn_step-first')
const stepNavButtonSecond = document.querySelector('.btn_step-second')
const layoutStepFirst = document.querySelector('.steps__first-step')
const layoutStepTwo = document.querySelector('.steps__second-step')

const formConfig = {
    emptyMessage: "",
    errorMessage: "Усі поля обов'язкові. Будь ласка, заповніть поля.",
    validMessage: "Усі обов'язкові поля заповнені ✓"
}

const errorMessage = () => {
    message.classList.remove('message__hidden')
    message.classList.remove('message__valid')
    message.innerHTML = formConfig.errorMessage
}

const validMessage = () => {
    message.classList.remove('message__hidden')
    message.classList.add('message__valid')
    message.innerHTML = formConfig.validMessage
    setTimeout(removeValidMessage, 2000)
}

const removeValidMessage = () => {
    message.classList.add('message__hidden')
    message.innerHTML = formConfig.emptyMessage
}

const showNav = () => {
    stepsNav.classList.add('steps__nav_show')
}

const showFirstStep = () => {
    layoutStepFirst.classList.remove('steps__second-step_hidden')
    layoutStepTwo.classList.add('steps__second-step_hidden')
}

const showSecondStep = () => {
    layoutStepFirst.classList.add('steps__second-step_hidden')
    layoutStepTwo.classList.remove('steps__second-step_hidden')
}

stepNavButtonFirst.addEventListener('click', showFirstStep)
stepNavButtonSecond.addEventListener('click', showSecondStep)

const stepSecond = () => {
    validMessage()
    showNav()
    showSecondStep()
}

const checkedValue = () => {
    if (modalLocationSelect.value === "" || mobileCalendar.value === "" || modalMemberSelect.value === "") {
        errorMessage()
    } else {
        stepSecond()
    }
}

submitButton.addEventListener('click', checkedValue)