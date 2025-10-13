window.addEventListener("load", () => {
    const initModal = () => {
        const triggerModalButton = document.querySelectorAll('[data-trigger-modal]')
        const ButtonCloseModal = document.querySelectorAll('[data-close-modal]')
        const modal = document.querySelectorAll('.modal');

        const openModal = (modal) => {
            modal.classList.add('show')
            body.classList.add('overflow-hidden');
        }

        const closeModal = () => {
            const modal = document.querySelector('.modal.show')
            modal.classList.remove('show');
            body.classList.remove('overflow-hidden');
        }

        //function open modal
        triggerModalButton.forEach(item => {
            const itemAttr = item.getAttribute('data-trigger-modal')
            item.addEventListener("click", () => {
                const modal = document.getElementById(itemAttr)
                openModal(modal)
            })
        })

        //function close modal
        ButtonCloseModal.forEach(item => {
            item.addEventListener("click", () => {
                closeModal()
            })
        })

        modal.forEach(item => {
            item.addEventListener('click', (event) => event.target === item ? closeModal() : null);
        })
    }

    document.querySelector('[data-trigger-modal]') ? initModal() : null
})