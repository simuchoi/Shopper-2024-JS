const sellers = document.querySelector('.top-sellers').querySelector('.cards')
const earphones = document.querySelector('.trending-earphones').querySelector('.cards')

const sellersOvalBtns =  document.querySelector('.top-sellers').querySelector('.top-sellers__btns')
const earphonesOvalBtns =  document.querySelector('.trending-earphones').querySelector('.trending-earphones__btns')

sellersOvalBtns.addEventListener('click', (event) => {
    const target = event.target
    const ovalButtons = sellersOvalBtns.querySelectorAll('button')
    ovalButtons.forEach(btn => {
        btn.classList.remove('active')
    })
    target.classList.add('active')
    if (target.innerText == 'Top Picks') {
        getCards(cardSellersList, sellers, true)
    } else {
        getCards(cardEarphonesList, sellers, false)
    }
})

earphonesOvalBtns.addEventListener('click', (event) => {
    const target = event.target
    const ovalButtons = earphonesOvalBtns.querySelectorAll('button')
    ovalButtons.forEach(btn => {
        btn.classList.remove('active')
    })
    target.classList.add('active')
    if (target.innerText == 'Earbuds') {
        getCards(cardEarphonesList, earphones, true)
    } 
    
    if (target.innerText == 'Wireless') {
        getCards(cardEarphonesList, earphones, true)
    } 
    
    if (target.innerText == 'Wired') {
        getCards(cardEarphonesList, earphones, true)
    }
})


const cardSellersList = [{
    cardTitle: 'Boat Rockerz 333',
    cardReviews: 75,
    cardPrice: 20,
    background: 'card-1-bg',
    img: './img/third_page/Boat Rockerz 333.png',
    specOffer: 'save-bg-1',
    saveValue: '60' 
},{
    cardTitle: 'Boat kerz 234',
    cardReviews: 75,
    cardPrice: 40,
    background: 'card-2-bg',
    img: './img/third_page/Boat kerz 234.png',
    specOffer: 'save-bg-none',
    saveValue: '0' 
},{
    cardTitle: 'Boat Rockerz 323',
    cardReviews: 75,
    cardPrice: 30,
    background: 'card-3-bg',
    img: './img/third_page/Boat Rockerz 323.png',
    specOffer: 'save-bg-2',
    saveValue: '40' 
}]


const cardEarphonesList = [{
    cardTitle: 'Беспроводные наушники #4',
    cardReviews: 25,
    cardPrice: 20,
    background: 'card-2-bg',
    img: './img/third_page/Boat kerz 234.png',
    specOffer: 'save-bg-2',
    saveValue: '80'
},{
    cardTitle: 'Беспроводные наушники #5',
    cardReviews: 50,
    cardPrice: 30,
    background: 'card-1-bg',
    img: './img/third_page/Boat Rockerz 323.png',
    specOffer: 'save-bg-none' 
},{
    cardTitle: 'Беспроводные наушники #6',
    cardReviews: 75,
    cardPrice: 40,
    background: 'card-3-bg',
    img: './img/third_page/Boat Rockerz 333.png',
    specOffer: 'save-bg-1',
    saveValue: '40'
}]


function getCards(cardInfoList, elem) {
    elem.innerHTML = ''
    const arr = cardInfoList.map(cardInfo => {
        const tab = `<div class="card">
                    <div class="card__section ${cardInfo.background}">
                        <div class="card__save ${cardInfo.specOffer}">Save<br>${cardInfo.saveValue}%</div>
                        <img class="card__img" src="${cardInfo.img}" alt="Boat Rockerz 323.png">
                        <div class="card__info">
                            <p class="card__name">${cardInfo.cardTitle}</p>
                            <div class="card__rating">
                                <img class="rating__star" src="./svg/rate-star.svg" alt="star.svg">
                                <img class="rating__star" src="./svg/rate-star.svg" alt="star.svg">
                                <img class="rating__star" src="./svg/rate-star.svg" alt="star.svg">
                                <img class="rating__star" src="./svg/rate-star.svg" alt="star.svg">
                                <img class="rating__star" src="./svg/rate-star.svg" alt="star.svg">
                                <p class="card__reviews-text">${cardInfo.cardReviews} Reviews</p>
                            </div>
                            <p class="card__price">$${cardInfo.cardPrice}</p>
                        </div>
                    </div>
                    <button class="card__btn">Add to cart</button>
                </div> `        
            return tab
    })
    elem.insertAdjacentHTML('beforeend', arr.join(''))
}















// cards.insertAdjacentHTML('afterbegin', card)
// cards.insertAdjacentHTML('afterbegin', card)
// cards.insertAdjacentHTML('afterbegin', card)
// cards.insertAdjacentHTML('afterbegin', card)
// cards.insertAdjacentHTML('afterbegin', card)
// cards.insertAdjacentHTML('afterbegin', card)

// mobilemenu.insertAdjacentHTML('beforebegin', input)
// mobilemenu.remove('beforebegin', input)

// mobilemenu.append(div)
// mobilemenu.prepend(div)
// mobilemenu.before(div)
// mobilemenu.after(div)
// mobilemenu.replaceWith(div)

// const key = 'is_initial_modal'

// localStorage.setItem('key_1', JSON.stringify({name: 'Albert_1'}))
// localStorage.setItem('key_2', JSON.stringify({name: 'Albert_2'}))
// localStorage.setItem('key_3', JSON.stringify({name: 'Albert_3'}))
// localStorage.setItem('key_4', JSON.stringify({name: 'Albert_4'}))

// // const isInitialModal = JSON.parse(localStorage.getItem(key))

// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)    
//     console.log(JSON.parse(localStorage.getItem(key)))
// }
