const popup = document.createElement('section')

const WELCOME_POPUP_KEY = 'WELCOME_POPUP_KEY'
const showPopup = JSON.parse(localStorage.getItem(WELCOME_POPUP_KEY))

function alertPopup () {
    popup.className = 'welcome-popup'
    const content = `<div class="welcome-popup__wrapper">
                        <span class="welcome-popup__text">Добро пожаловать <br> на маркетплейс!</span>
                        <button class="welcome-popup__btn skip" id="neverMind">Продолжить</button>
                        <button class="welcome-popup__btn mark" id="dontShowAgain">Не показывать снова</button>
                    </div>`
    
    popup.insertAdjacentHTML('afterbegin', content)
    document.body.style.overflow = 'hidden'
    document.body.prepend(popup)
    
    const closeBtn = document.getElementById('dontShowAgain')
    closeBtn.addEventListener('click', (event) => {
        localStorage.setItem(WELCOME_POPUP_KEY, JSON.stringify(true))
        popup.remove()
        document.body.style.overflow = 'auto'
    })    

    const continueBtn = document.getElementById('neverMind')
    continueBtn.addEventListener('click', (event) => {
        localStorage.setItem(WELCOME_POPUP_KEY, JSON.stringify(false)) 
        popup.remove()
        document.body.style.overflow = 'auto'
    })
}

if(!showPopup) {
    setTimeout(alertPopup, 1000)
}

// setInterval()

// localStorage.clear()