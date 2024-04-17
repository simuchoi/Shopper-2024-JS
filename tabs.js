const sellers = document.querySelector('.top-sellers').querySelector('.cards')
const earphones = document.querySelector('.trending-earphones').querySelector('.cards')

const sellersBtns =  document.querySelector('.top-sellers').querySelector('.top-sellers__btns')
const earphonesBtns =  document.querySelector('.trending-earphones').querySelector('.trending-earphones__btns')

sellersBtns.addEventListener('click', (event) => {
    const target = event.target
    const ovalButtons = sellersBtns.querySelectorAll('button')
    ovalButtons.forEach(btn => {
        btn.classList.remove('active')
    })
    target.classList.add('active')
    getCards(cardEarphonesList, sellers)
})

earphonesBtns.addEventListener('click', (event) => {
    const target = event.target
    const ovalButtons = earphonesBtns.querySelectorAll('button')
    ovalButtons.forEach(btn => {
        btn.classList.remove('active')
    })
    target.classList.add('active')
})


const cardSellersList = [{
    cardTitle: 'Беспроводные наушники #1',
    cardReviews: 50,
    cardPrice: 30,
},{
    cardTitle: 'Беспроводные наушники #2',
    cardReviews: 75,
    cardPrice: 40,
},{
    cardTitle: 'Беспроводные наушники #3',
    cardReviews: 100,
    cardPrice: 50,
}]


const cardEarphonesList = [{
    cardTitle: 'Беспроводные наушники #4',
    cardReviews: 50,
    cardPrice: 30,
},{
    cardTitle: 'Беспроводные наушники #5',
    cardReviews: 75,
    cardPrice: 40,
},{
    cardTitle: 'Беспроводные наушники #6',
    cardReviews: 100,
    cardPrice: 50,
}]


function getCards(cardInfoList, elem) {
    const arr = cardInfoList.forEach(cardInfo => {
    const card = `<div class="card">
                    <div class="card__section card-1-bg">
                        <div class="card__save save-bg-1">Save<br>60%</div>
                        <img class="card__img" src="./img/third_page/Boat Rockerz 333.png" alt="Boat Rockerz 323.png">
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
            elem.insertAdjacentHTML('beforeend', card)
    })
}

getCards(cardSellersList, sellers)
getCards(cardEarphonesList, earphones)














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
