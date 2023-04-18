gsap.to('#sideMenu', {x: -200, duration: 0})

const hideStatus = document.querySelector('#sideMenu').classList;
const darkStatus = document.querySelector('#darkener').classList;

function toggleMenu () {
    darkStatus.toggle('dark')
    console.log(hideStatus)
    let currentStatus = hideStatus.toggle('out')
    if (currentStatus == false) {
        console.log('rightmove')
        gsap.to('#sideMenu', {x: 0, duration: 0.5});
    }else {
        gsap.to('#sideMenu', {x: -200, duration: 0.5});
    }
} 

const imgGallery = document.querySelector('#imgGallery')
let currentX = 0
imgGallery.scroll(currentX, 0)

function scrolltoLeft () {
    if (currentX > 0) {
    currentX -= innerWidth
    imgGallery.scroll(currentX, 0)
    }else {
        currentX = 0
    }
    console.log('function ran')
    console.log(currentX)
} 

function scrollRight () {
    if (currentX < 3 * innerWidth) {
    currentX += innerWidth
    imgGallery.scroll(currentX , 0)
    }else {
        currentX = 3 * innerWidth 
    }
    console.log('function ran')
    console.log(currentX)
} 

let counter = 0;
const productNum = document.getElementById('counter')

function counterAdd () {
    counter++
    productNum.textContent = counter;
}

function counterSubtract () {
    if (counter != 0) {
    counter--
    productNum.textContent = counter;
    }
}

function scrolltoThumbNail(n) {
    imgGallery.scroll((n * 445), 0)
}

let itemCounter = document.querySelector('#itemCounter')
let counterStatus = itemCounter.classList
sessionStorage.setItem('cartItems', counter)


function addToCart() {
    if (counter == 0) {
        counterStatus.add('hidden')
    }else {
        counterStatus.remove('hidden')
        console.log(itemCounter)
        itemCounter.textContent = counter
    }
    sessionStorage.setItem('cartItems', counter)
}

let cartWindowStatus = document.querySelector('#cartWindow').classList
let cartStatus = document.querySelector('#items').classList
let emptyCart = document.querySelector('#emptyCart').classList
let checkOutStatus = document.querySelector('#checkOut').classList
let itemCount = document.querySelector('#itemCount')
let finalPrice = document.querySelector('#finalPrice')


function toggleCart() {
    cartWindowStatus.toggle('hidden')
    let cartItems = sessionStorage.getItem('cartItems')
    if (cartItems != 0) {
        cartStatus.remove('hidden')
        checkOutStatus.remove('hidden')
        itemCount.textContent = cartItems
        finalPrice.textContent = "$" + (cartItems * 125)
        emptyCart.add('hidden')
    }else{
        cartStatus.add('hidden')
        checkOutStatus.add('hidden')
        emptyCart.remove('hidden')
    }
}

function removeItem() {
    sessionStorage.setItem('cartItems', (sessionStorage.getItem('cartItems') - 1))
    let cartItems = sessionStorage.getItem('cartItems')
    if (cartItems != 0) {
        itemCount.textContent = cartItems
        finalPrice.textContent = "$" + (cartItems * 125)
    }else{
        cartStatus.add('hidden')
        checkOutStatus.add('hidden')
        emptyCart.remove('hidden')
    }

    if (cartItems == 0) {
        counterStatus.add('hidden')
    }else {
        counterStatus.remove('hidden')
        itemCounter.textContent = cartItems
    }
}
