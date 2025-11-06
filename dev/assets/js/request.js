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
})

calendarInput.addEventListener("change", () => {
    let value = calendarInput.value
    requestConfig.date = value
})

memberSelect.addEventListener("change", () => {
    let value = memberSelect.value
    requestConfig.member = value
})

const setValue = () => {
    const formValue = `Локация для тура: ${requestConfig.location}\nДата похода: ${requestConfig.date}\nУчастники: ${requestConfig.member}`
    requestData.innerHTML = formValue
}

triggerRequest.addEventListener("click", setValue)

const modalLocationSelect = document.querySelector('#modal-location-select')
const mobileCalendar = document.querySelector('#mobile-calendar')
const modalMemberSelect = document.querySelector('#modal-member-select')
const programUserName = document.querySelector('#program-user-name')
const programEMail = document.querySelector('#program-e-mail')
const programTelephone = document.querySelector('#program-telephone')
const submitButton = document.querySelector('#submit-button')
const stepsNav = document.querySelector('.steps__nav')
const stepNavButtonFirst = document.querySelector('.btn_step-first')
const stepNavButtonSecond = document.querySelector('.btn_step-second')
const layoutStepFirst = document.querySelector('.steps__first-step')
const layoutStepSecond = document.querySelector('.steps__second-step')
const requiredFieldStepFirst = layoutStepFirst.querySelectorAll('[data-required-field]')
const requiredFieldStepSecond = layoutStepSecond.querySelectorAll('[data-required-field]')

submitButton.setAttribute('data-checked-button', '1')
const submitButtonFirstStep = document.querySelector('[data-checked-button="1"]')

const formConfig = {
    errorMessage: "Усі поля обов'язкові. Будь ласка, заповніть поля.",
    validMessage: "Обов'язкове поле заповнене ✓"
}

const createErrorMsg = (field, text) => {
    field.closest(".input-box").classList.add("error-field")
    field.closest(".input-box").classList.remove("valid-field")
    const errorMsg = `<div class="message">${text}</div>`
    const message = field.closest('.input-box').querySelector('.message')
    message ? null : field.closest(".input-box").insertAdjacentHTML("beforeend", errorMsg)
    if (message) {
        message.classList.remove('message__valid')
        message.innerHTML = formConfig.errorMessage
    } else {
        null
    }
}

const destroyErrorMsg = (field, text) => {
    field.closest('.input-box').classList.remove("error-field")
    field.closest(".input-box").classList.add("valid-field")
    const message = field.closest('.input-box').querySelector('.message')
    if (message) {
        message.classList.add('message__valid')
        message.innerHTML = formConfig.validMessage
    } else {
        const validMsg = `<div class="message message__valid">${text}</div>`
        field.closest(".input-box").insertAdjacentHTML("beforeend", validMsg)
    }
}

const validatorFieldsEvent = (arr, event) => {
    arr.forEach(field => {
        field.addEventListener(event, () => {
            field.value === "" ? createErrorMsg(field, formConfig.errorMessage) : destroyErrorMsg(field, formConfig.validMessage)
        })
    })
}

const validatorFieldsBtn = (arr) => {
    arr.forEach(field => {
        field.value === "" ? createErrorMsg(field, formConfig.errorMessage) : destroyErrorMsg(field, formConfig.validMessage)
    })
}

const layoutStepTwo = document.querySelector('.steps__second-step')

const showNav = () => {
    stepsNav.classList.add('steps__nav_show')
}

const showFirstStep = () => {
    submitButton.setAttribute('data-checked-button', '1')
    layoutStepFirst.classList.remove('steps__second-step_hidden')
    layoutStepSecond.classList.add('steps__second-step_hidden')
}

const showSecondStep = () => {
    if (modalLocationSelect.value === "" || mobileCalendar.value === "" || modalMemberSelect.value === "") {
        validatorFieldsBtn(requiredFieldStepFirst)
    } else {
        layoutStepFirst.classList.add('steps__second-step_hidden')
        layoutStepSecond.classList.remove('steps__second-step_hidden')
    }
}

stepNavButtonFirst.addEventListener('click', showFirstStep)
stepNavButtonSecond.addEventListener('click', showSecondStep)

const stepSecond = () => {
    showNav()
    showSecondStep()
    submitButton.setAttribute('data-checked-button', '2')
    const submitButtonSecondStep = document.querySelector('[data-checked-button="2"]')
    submitButtonSecondStep.addEventListener('click', () => {
        if (programUserName.value === "" || programEMail.value === "" || programTelephone.value === "") {
            validatorFieldsBtn(requiredFieldStepSecond)
        }
    })
    
    if (modalLocationSelect.value !== "" && mobileCalendar.value !== "" && modalMemberSelect.value !== "" && programUserName.value !== "" && programEMail.value !== "" && programTelephone.value !== "") {
        submitButton.setAttribute('type', 'submit')
    }
}

const checkedValue = () => {
    if (modalLocationSelect.value === "" || mobileCalendar.value === "" || modalMemberSelect.value === "") {
        validatorFieldsBtn(requiredFieldStepFirst)
    } else {
        validatorFieldsEvent(requiredFieldStepSecond, 'input')
        stepSecond()
    }
}

validatorFieldsEvent(requiredFieldStepFirst, 'change')
submitButtonFirstStep.addEventListener('click', checkedValue)