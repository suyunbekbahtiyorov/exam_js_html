let all = document.querySelector('.cards')
console.log(products);

products.map((el) => {
    all.innerHTML += `
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
                <div class="ratings flex items-center gap-[4px] my-[8px]">
                    
                </div>
                <button
                    class="w-full text-[13px] sm:text-[16px]  py-[4px] sm:py-[8px] border-[1px] border-[#70C05B] rounded-[4px] text-[#70C05B] hover:bg-[#FF6633] hover:text-[white] hover:border-[#FF6633] duration-300">В
                    корзину</button>
            </div>
        </div>   
        </a>    
    `
})


let lmnn = document.getElementsByClassName('ratings')
let index = 0;

products.map((el) => {
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
