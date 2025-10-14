let cards = document.querySelector('.cards')
let filt = products.filter((el) => el.discount > 0)
let slicepr = filt.slice(filt.length - 4, filt.length)



slicepr.map((el) => {
    cards.innerHTML += `
    <a href="./one_product_dr.html?id=${el.id}">
        <div class="hover:shadow-2xl duration-500">
            <div class="p-[20px] max-w-[500px] bg-[#FFFFFF] rounded-[10px] overflow-hidden">
                <div class="relative w-full h-[200px]">
                    <img class="w-full h-full object-cover" src="${el.images[0]}" alt="">
                    <p
                        class="absolute text-[13px] sm:text-[16px] bottom-[5px] sm:bottom-[30px] rounded-[5px] bg-[orangered] left-[5px] sm:left-[20px] text-[white]  w-[40px] sm:w-[56px] p-[5px] sm:p-[8px] text-center">
                        ${el.discount}%</p>
                </div>
                <div class="flex items-center justify-between my-[8px]">
                    <h3 class="text-[16px] sm:text-[18px] font-bold">${el.price}$</h3>
                    <h3 class="text-[16px] sm:text-[18px] text-[#606060] line-through">${el.price - el.price * el.discount / 100}$</h3>
                </div>
                <p class="text-[12px] sm:text-[16px] h-[53px] sm:h-[56px] overflow-hidden text-ellipsis">${el.description}</p>
                <div class="stars flex items-center gap-[4px] my-[8px]">
                    
                </div>
                <button
                    class="w-full text-[13px] sm:text-[16px]  py-[4px] sm:py-[8px] border-[1px] border-[#70C05B] rounded-[4px] text-[#70C05B] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-300">В
                    корзину</button>
            </div>
        </div> </a>    
    `
})


let lmnn = document.getElementsByClassName('stars')
let count = 0;
let index = 0;

slicepr.map((el) => {
    let check = ''
    for(let j = 1; j <= el.rating; j+=0.5){
        if(Number.isInteger(j)){
            check += '<img class="w-[13px] sm:w-[16px]" src="./images/general/star-solid-full.svg" alt="">'
        }
        if(j == el.rating && !Number.isInteger(j)){
            check += '<img class="w-[13px] sm:w-[16px]" src="./images/general/star-half-solid-full.svg" alt="">'
        }
    }
    lmnn[index].innerHTML += check
    index++
})


cards_2 = document.querySelector(".cards_2")
lmn = products.slice(0, 4)

lmn.map((el) => {
    cards_2.innerHTML += `
    <a href="./one_product_dr.html?id=${el.id}">
    <div class="hover:shadow-2xl duration-500">
            <div class="p-[20px] max-w-[500px] bg-[#FFFFFF] rounded-[10px] overflow-hidden">
                <div class="relative w-full h-[200px]">
                    <img class="w-full h-full object-cover" src="${el.images[0]}" alt="">
                    <p
                        class="absolute text-[13px] sm:text-[16px] bottom-[5px] sm:bottom-[30px] rounded-[5px] bg-[orangered] left-[5px] sm:left-[20px] text-[white]  w-[40px] sm:w-[56px] p-[5px] sm:p-[8px] text-center">
                        ${el.discount}%</p>
                </div>
                <div class="flex items-center justify-between my-[8px]">
                    <h3 class="text-[16px] sm:text-[18px] font-bold">${el.price}$</h3>
                    <h3 class="text-[16px] sm:text-[18px] text-[#606060] line-through">${el.price - el.price * el.discount / 100}$</h3>
                </div>
                <p class="text-[12px] sm:text-[16px] h-[53px] sm:h-[56px] overflow-hidden text-ellipsis">${el.description}</p>
                <div class="rating flex items-center gap-[4px] my-[8px]">
                    
                </div>
                <button
                    class="w-full text-[13px] sm:text-[16px]  py-[4px] sm:py-[8px] border-[1px] border-[#70C05B] rounded-[4px] text-[#70C05B] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-300">В
                    корзину</button>
            </div>
        </div>  </a>  `
})


let lmnn_2 = document.getElementsByClassName('rating')
let index_2 = 0;

lmn.map((el) => {
    let check = ''
    for(let j = 1; j <= el.rating; j+=0.5){
        if(Number.isInteger(j)){
            check += '<img class="w-[13px] sm:w-[16px]" src="./images/general/star-solid-full.svg" alt="">'
        }
        if(j == el.rating && !Number.isInteger(j)){
            check += '<img class="w-[13px] sm:w-[16px]" src="./images/general/star-half-solid-full.svg" alt="">'
        }
    }
    lmnn_2[index_2].innerHTML += check
    index_2++
})


cards_3 = document.querySelector('.cards_3')
lmn2 = products.slice(products.length - 4, products.length)
lmn2.map((el) => {
    cards_3.innerHTML += `
    <a href="./one_product_dr.html?id=${el.id}">
    <div class="hover:shadow-2xl duration-500">
            <div class="p-[20px] max-w-[500px] bg-[#FFFFFF] rounded-[10px] overflow-hidden">
                <div class="relative w-full h-[200px]">
                    <img class="w-full h-full object-cover" src="${el.images[0]}" alt="">
                    <p
                        class="absolute text-[13px] sm:text-[16px] bottom-[5px] sm:bottom-[30px] rounded-[5px] bg-[orangered] left-[5px] sm:left-[20px] text-[white]  w-[40px] sm:w-[56px] p-[5px] sm:p-[8px] text-center">
                        ${el.discount}%</p>
                </div>
                <div class="flex items-center justify-between my-[8px]">
                    <h3 class="text-[16px] sm:text-[18px] font-bold">${el.price}$</h3>
                    <h3 class="text-[16px] sm:text-[18px] text-[#606060] line-through">${el.price - el.price * el.discount / 100}$</h3>
                </div>
                <p class="text-[12px] sm:text-[16px] h-[53px] sm:h-[56px] overflow-hidden text-ellipsis">${el.description}</p>
                <div class="rating_2 flex items-center gap-[4px] my-[8px]">
                    
                </div>
                <button
                    class="w-full text-[13px] sm:text-[16px]  py-[4px] sm:py-[8px] border-[1px] border-[#70C05B] rounded-[4px] text-[#70C05B] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-300">В
                    корзину</button>
            </div>
        </div> 
        </a>
    `
})

let lmnn_3 = document.getElementsByClassName('rating_2')
let index_3 = 0;

lmn2.map((el) => {
    let check = ''
    for(let j = 1; j <= el.rating; j+=0.5){
        if(Number.isInteger(j)){
            check += '<img class="w-[13px] sm:w-[16px]" src="./images/general/star-solid-full.svg" alt="">'
        }
        if(j == el.rating && !Number.isInteger(j)){
            check += '<img class="w-[13px] sm:w-[16px]" src="./images/general/star-half-solid-full.svg" alt="">'
        }
    }
    lmnn_3[index_3].innerHTML += check
    index_3++
})
