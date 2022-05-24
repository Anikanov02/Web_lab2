'use strict';


const year = document.querySelector('.year'),
    month = document.querySelector('.month'),
    day = document.querySelector('.day'),
    hour = document.querySelector('.hour'),
    minute = document.querySelector('.minutes'),
    counter = document.querySelector('.cart__toggle__count'),
    cart = document.querySelector('.buy__cart'),
    cartList = document.querySelector('.card__list'),
    cartListHide = document.querySelector('.card__list__close'),
    feedbackHide = document.querySelector('.feedback__close'),
    feedbackWindow = document.querySelector('.feedback__window'),
    feedbackOpen = document.querySelector('.feedback'),
    digits = document.querySelector('.feedback__rate__digits'),
    digit = document.querySelectorAll('.feedback__rate__digit'),
    feedbackForm = document.querySelector('.feedback__window');






(function () {


    setInterval(() => {

        const date = new Date();
        month.textContent = `0${date.getMonth() + 1}`.slice(-2);
        year.textContent = date.getFullYear();
        day.textContent = date.getDate();
        hour.textContent = date.getHours();
        minute.textContent = `0${date.getMinutes()}`.slice(-2);
    }, 1000);
}());

let currentScore = null

feedbackOpen.addEventListener('click', () => {
    feedbackWindow.style.display = 'block';
    feedbackOpen.style.visibility = 'hidden';
});
feedbackForm.onsubmit = (e) => {
    e.preventDefault()
    if (currentScore) {
        feedbackWindow.style.display = 'none';
        feedbackOpen.style.visibility = 'visible';
    }

}

feedbackHide.addEventListener('click', () => {
    feedbackWindow.style.display = 'none';
    feedbackOpen.style.visibility = 'visible';
});

feedbackWindow.addEventListener('click', (e) => {
    if (e.target == feedbackWindow) {
        feedbackWindow.style.display = 'none';
        feedbackOpen.style.visibility = 'visible';
    }
});

digits.addEventListener('click', (e) => {

    e.target.style.opacity = 1;
    digit.forEach(element => {
        if (element != e.target) {
            element.style.opacity = "0.4";
            currentScore = e.target.textContent
            document.querySelector('.hidden_input').value = currentScore
            document.querySelector('.hidden_input').setCustomValidity('')
        }
    });

})


class listItem {
    constructor(name, price, count = 1, img, parentSelector) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.img = img;
        this.parent = document.querySelector(parentSelector);
    }
    render() {
        const element = document.createElement('div');
        element.innerHTML = `
                <div class="card__list__item">
						<img src="${this.img}" alt="" class="card__list__item__img" />
						<div
							style="
								display: flex;
								flex-direction: column;
								margin-left: 10px;
								margin-right: auto;
								justify-content: space-between;
							"
						>
							<span class="card__list__item__name">${this.name}</span>
							<span class="card__list__item__price">${this.price} грн</span>
						</div>
						<div
							style="
								display: flex;
								flex-direction: column;
								justify-content: space-between;
							"
						>
							<button class="card__list__item__delete">x</button>

						</div>
					</div>
            `;
        this.parent.append(element);
    };

}




setTimeout(() => {

    const buttons = document.querySelectorAll('.buy-button');

    const cards = document.querySelectorAll('.card');

    let generalCount = 0;


    cartListHide.addEventListener('click', () => {
        cartList.style.visibility = 'hidden';
        cart.style.visibility = 'visible';
    });

    cart.addEventListener('click', () => {
        cartList.style.visibility = 'visible';
        cart.style.visibility = 'hidden';
    });

    let buttonClick = (e) => {
        cart.style.visibility = 'visible';
        let index = 0;

        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i] == e.target) {
                index = i;
            }
        }
        new listItem(obj.menu[index].name, obj.menu[index].price, 1, obj.menu[index].img, ".card__list__details").render();
        const deleteCartItem = document.querySelectorAll('.card__list__item__delete');

        console.log(deleteCartItem);
        let deleteItem = (e) => {
            e.target.parentElement.parentElement.remove();
            counter.textContent = generalCount;
        }
        deleteCartItem.forEach(element => {
            element.addEventListener('click', deleteItem);
        });



        counter.textContent = generalCount;
    };

    setInterval(() => {
        counter.textContent = document.querySelectorAll('.card__list__item').length;
    }, 10);


    cartList.addEventListener('click', (e) => {
        if (e.target == document.querySelector('.card__list')) {
            cartList.style.visibility = 'hidden';
            cart.style.visibility = 'visible';
        }
    });

    buttons.forEach(element => {
        element.addEventListener('click', buttonClick);

    });



}, 500);







