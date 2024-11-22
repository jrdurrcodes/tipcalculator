// access DOM elements
const confirmBtn = document.getElementById('confirmBtn')
const totalDisplay = document.getElementById('total')
const cartSubtotal = document.getElementById('cartSubtotal')
const menuDivs = document.querySelectorAll('.menu-div')
const receipt = document.getElementById('receipt')

//set subtotal & tax
let subtotal = 0
let tax = .07

//grab the menu types
const menuTypes = [
    'appetizers',
    'entrees',
    'drinks',
    'desserts',
    'sides'
]

// create menu items; array of objects
const menuItems = [
    {
        id: 1,
        type: 'appetizers',
        item: 'spinach dip',
        desc: 'creamy spinach and artichoke dip served with chipsgolden brown cheesesticks filled with mozerella cheese',
        imgUrl: 'spinachdip.jpeg',
        price: 10.99,
        qty: 0
    },
    {
        id: 2,
        type: 'appetizers',
        item: 'cauliflower wings',
        desc: 'deep fried onion rings with comeback sauce',
        imgUrl: 'cauliflowerwings.jpg',
        price: 8.99,
        qty: 0
    },
    {
        id: 3,
        type: 'appetizers',
        item: 'eggrolls',
        desc: 'cripsy golden brown rolls filled with blackeye peas collard and sausage',
        imgUrl: 'eggrolls.jpg',
        price: 15.99,
        qty: 0
    },
    {
        id: 4, 
        type:'appetizers',
        item:'cheesesticks',
        desc:'golden brown cheesesticks filled with mozerella cheese',
        imgUrl: 'cheesesticks.jpg  ',
        price: 8.99,
        qty: 0
    },
    {
        id: 5,
        type: 'entrees',
        item: 'chicken sandwich',
        desc: 'grilled chicken ',
        imgUrl: 'chicken sandwich.jpg',
        price: 9.99,
        qty:0
    },
    {
        id: 6,
        type: 'entrees',
        item: 'veggie burger',
        desc: 'bean veggie patty served with fries',
        imgUrl: 'veggieburger.jpg',
        price: 12.99,
        qty: 0
    },
    {
        id: 7,
        type: 'entrees',
        item: 'blackened catfish',
        desc:'grilled catfish with a buttersauce',
        imgUrl: 'blackendfish.jpg',
        price: 19.99,
        qty: 0
    },
    {
        id: 8, 
        type: 'entrees',
        item: 'quesadillias',
        desc: 'toasted tortilla filled with black beans cheese tomatoes and chicken or shrimp ',
        imgUrl: 'quesadillas.jpg',
        price:   '16.99',
        qty: 0
    },
    {
        id: 9,
        type: 'drinks',
        item: 'lemonade',
        desc: 'fresh squeezed lemons with agave nectar sweetner and lemon slices',
        imgUrl: 'lemonade.jpg',
        price: '4.99',
        qty: 0
    },
    {
        id: 10,
        type: 'drinks',
        item: 'rasberry tea',
        desc: 'brewed tea with rasberry pieces and mint leaf',
        imgUrl: 'rasberrytea.jpg',
        price: '5.99',
        qty: 0
    },
    {
        id: 11,
        type: 'drinks',
        item: 'sprite',
        desc: 'lemon-lime sparkling beverage',
        imgUrl: 'sprite.jpg',
        price: 3.99,
        qty: 0,
    },
    {
        id: 12 ,
        type: 'drinks',
        item: 'coca-cola',
        desc: 'dark bubbling soda with ice',
        imgUrl: 'cocacola.jpg',
        price: 3.98,
        qty: 0,
    },
    {
        id: 13, 
        type: 'desserts',
        item: 'strawberry cheese cake',
        desc: 'baked cheesecake with fresh strawberry topping and whip cream',
        imgUrl: 'strawberrycheesecake.jpg',
        price: 6.99,
        qty: 0
    },
    {
        id: 14, 
        type: 'desserts',
        item: 'chocolate chip cookie',
        desc: 'two medium size chunky chocolate cookies drizzlws in honey',
        imgUrl: 'chocolatechipcookie.jpg',
        price: 5.99,
        qty: 0
    },
    {
        id: 15, 
        type: 'desserts',
        item: 'banana pudding icecream',
        desc: 'vanilla wafers blended in homemade vanilla bean ice cream',
        imgUrl: 'bananapudding.jpg',
        price: 6.99,
        qty: 0
    },
    {
        id: 16, 
        type: 'desserts',
        item: 'apple pie',
        desc: 'golden brown homemade apple pie sprinkled with come ',
        imgUrl: 'applepie.jpg',
        price: 6.99,
        qty: 0
    },
    {
        id: 17, 
        type: 'sides',
        item: 'southwest corncob',
        desc:  'grilled corn with ranch and chipotle seasoning ',
        imgUrl: 'southwestgrilledcorn.jpg ',
        price: 4.99,
        qty: 0
    },
    {
        id: 18, 
        type: 'sides',
        item: 'waffle sweet potato fries',
        desc: 'waffle cut homegrown sweet potatoes',
        imgUrl: 'sweetpotatofries.jpeg.jpg',
        price: 4.99,
        qty: 0
    },
    {
        id: 19, 
        type: 'sides',
        item: 'garden salad',
        desc: 'green salad with chickpeas tomatoes avocado ',
        imgUrl: 'salad.jpg',
        price: 5.99,
        qty: 0
    },
    {
        id: 20, 
        type: 'sides',
        item: 'loaded baked potato ',
        desc: 'bake potato filled with cheese bacon chives olives onion crisp ',
        imgUrl: 'loadedfries.jpg ',
        price: 7.99,
        qty: 0
    }
]


//confirm Button
confirmBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    console.log('click')
})

//getTotal
const getTotal =()=> {

    const subTotal = parseFloat(cartSubtotal.innerText)
    const tipAmt = parseFloat(document.getElementById('tipAmt').value)
    const otherAmt = parseFloat(document.getElementById('otherAmt').value)
    const yourTip = document.getElementById('yourTip')
    const theSubtotal = document.getElementById('theSubtotal')
    const taxDisplay = document.getElementById('tax')

    let taxTotal = subtotal * tax

    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt)
    
    let total  = isNaN(tipAmt) ? subtotalt= + otherAmt + taxTotal :
        receiptTip + subtotal + taxTotal

    theSubtotal.innerText = subtotal
    taxDisplay.innerText = taxTotal.toFixed 
}

//load the menu items
//make rows
menuDivs.forEach(div => {

        const menuSubheading = document.createElement('h3')
        menuSubheading.classList.add('menu-subheading', 'text-capitalize')

        const row = document.createElement('div')
        row.classList.add('row')

        div.appendChild(menuSubheading)
        div.appendChild(row)
})

for(let i = 0; i < menuTypes.length; i++) {
    menuDivs[i].children[0].innerText = menuTypes[i]
    menuDivs[i].children[1].setAttribute('id', `${menuTypes[i]}Row`)
    console.log(menuDivs[i])
}
    

//grab the appRow
const appRow = document.getElementById('appetizersRow')
const entreesRow = document.getElementById('entreesRow')
const drinksRow =    document.getElementById('drinksRow')
const dessertsRow = document.getElementById('dessertsRow')
const sidesRow = document.getElementById('sidesRow')


//build columns and cards
menuItems.forEach(item => {
    // do stuff
    const column  = document.createElement('div')
    column.classList.add('col-sm-3')

    const card = document.createElement('div')
    card.classList.add('card', 'h-100')

    card.innerHTML = `
        <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image
        card-image-top" />
        <div class="card-body">
            <h4 class="card-title text-capitalize item-item">${item.item}</h4>
            <p class="card-text text-uppercase item-desc">${item.desc}</p>
        </div>
        <footer class="card-footer">
            <p class="card-text item-price">$${item.price}</p>
            <div class="buttons-div d-flex justify-content-around">
                <button
                    class="btn btn-danger cart-btn text-capitalize"
                    id="Btn${item.id}"
                    data-id="${item.id}"
                    data-price="${item.price}"
                    data-qty="${item.qty}"
                    data-item="${item.item}"
                >
                    add to cart
                </button>
                    <div class="qty-div">
                    <button 
                        class="btn btn-primary btn-subtract"
                        id="btnSubtract${item.qty}"
                        data-id="${item.id}"
                        data-qty="${item.qty}"
                    > - </button>
                <span class="quantity" id="quantity${item.id}">${item.qty}</span>
                <button
                    class="btn btn-primary btn-add"
                    id="btnAdd${item.id}"
                    data-id="${item.id}"
                    data-qty="${item.qty}"
                > + </button>

            </div>

        </footer>
    `


    column.appendChild(card)

    //switch(menuItems.type)
    switch (item.type) {
        case 'appetizers':
            appRow.appendChild(column)
            break
        case 'entrees':
            entreesRow.appendChild(column)
            break
        case 'drinks':
            drinksRow.appendChild(column)
            break    
        case 'desserts':
            dessertsRow.appendChild(column)
            break
        case 'sides':
            sidesRow.appendChild(column)
        default:
            console.log('Error: menu type not listed')
            break
        

    }
})
// card buttons
const cartButtons = document.querySelectorAll('.cart-btn')

// console.lod(cartButtons):
cartButtons.forEach(button => {

    const price = parseFloat(button.getAttribute('data-price'))
    const item = button.getAttribute('data-item')
    const id = parseFloat(button.getAttribute ('data-id'))

    button.addEventListener('click', ()=> {
        let qty
        for (let i = 0; i < menuItems.length; i ++) {
            menuItems[i].id === id ? qty = menuItems[i].qty : null
        }

        // console.log(button.getAttribute('data-qty'))

        if (button.getAttribute('data-qty') > 0 ) {
            addItems(price, qty, item, id)
        }
    })
})

// add items()
let receiptArray = []

    const addItems =(price, qty, item, id)=> {

    let itemObj = {
        id: id,
        item: item,
        qty: qty,
        price:  price,
        itemTotal: qty * price
        }

        receiptArray = [...receiptArray, itemObj]

        // makeReceipt
        makeReceipt (itemObj, receipt)

        subtotal+= itemObj.itemTotal
        cartSubtotal.innerText =  subtotal.toFixed(2)
    }


    // makeReceipt()
    const makeReceipt = (obj, el)=> {
        const tableRow = document.createElement('tr')
        tableRow.classList.add('receipt-item')

        const receiptChoice = document.createElement('td')
        receiptChoice.classList.add('receipt-choice', 'text-center')
        receiptChoice.innerText = obj.item

        const receiptQty = document.createElement('td')
        receiptQty.classList.add('receipt-qty', 'text-center')
        receiptQty.setAttribute('id', `qty${obj.id}`)
        receiptQty.innerText = obj.qty

        const receiptPrice = document.createElement('td')
        receiptPrice.classList.add('receipt-price', 'text-center')
        receiptPrice.innerText = obj.price

        const itemSubtotal = document.createElement('td')
        itemSubtotal.classList.add('item-subtotal', 'text-center')
        itemSubtotal.setAttribute('id', `subTotal${obj.id}`)
        itemSubtotal.innerText = obj.itemTotal.toFixed(2)

        tableRow.appendChild(receiptChoice) 
        tableRow.appendChild(receiptQty)
        tableRow.appendChild(receiptPrice)
        tableRow.appendChild(itemSubtotal)

        el.appendChild(tableRow)


    }


const btnSubtract = document.querySelectorAll('.btn-subtract')
const btnAdd = document.querySelectorAll('.btn-add')

btnSubtract.forEach(button => {
    button.addEventListener('click', ()=> {
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)

        for (let i = 0; i < menuItems.length; i ++) {
            if(menuItems[i].id === btnId &&  menuItems[i].qty > 0) {
                menuItems[i].qty-= 1
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})

btnAdd.forEach(button => {
    button.addEventListener('click', ()=> {
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quantity${btnId}`)
        console.log(spanQty)

        for (let i = 0; i < menuItems.length; i ++) {
            if(menuItems[i].id === btnId 
                && menuItems[i].qty < 20
                && cartButtons[i].dataset.id == btnId 
            ){
                menuItems[i].qty+=1
                cartButtons[i].setAttribute('data-qty', menuItems[i].qty)
                spanQty.innerText = menuItems[i].qty


            }
        }
    })
})