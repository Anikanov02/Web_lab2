const obj = { 
     "menu":[{
       "img": "img/1page/1.png",
       "altimg": "burger",
       "name":  "Бургер",
       "price" : 70
    },
    {
       "img": "img/1page/2.png",
       "altimg": "borsch",
       "name":  "Борщ",
       "price" : 100 
    },{
        "img": "img/1page/3.png",
       "altimg": "vareniki",
       "name":  "Вареники",
       "price" : 37
    },{
        "img": "img/1page/4.png",
       "altimg": "shashlik",
       "name":  "Шашлык",
       "price" : 120
    },{
        "img": "img/1page/5.png",
       "altimg": "steik",
       "name":  "Стейк из свинины",
       "price" : 180
    },{
       "img": "img/1page/6.png",
       "altimg": "Sinnabon",
       "name":  "Синнабон",
       "price" : 50
    },{
        "img": "img/1page/7.png",
       "altimg": "Pizza Texas",
       "name":  "Пицца Техас",
       "price" : 130
    }
]
};

class myDish{
        constructor(name,price,alt,img,parentSelector){
            this.name = name;
            this.price = price;
            this.img = img;
            this.alt = alt;
            this.parent = document.querySelector(parentSelector);
        }
        render(){
            const element = document.createElement('div');
            element.innerHTML =`
                <div class="card">
                    <a href=""><img src=${this.img} alt=${this.alt} class="cardimg" /></a>
                    <p class="name">${this.name}</p>
                    <p class="price">${this.price} <span>грн</span></p>
                    <button class="buy-button">Order</button>
                </div>
            `;
            this.parent.append(element);
        }
    }
    
    

    


        obj.menu.forEach(obj => {
            new myDish(obj.name,obj.price,obj.alt,obj.img,'.rests').render();
        });