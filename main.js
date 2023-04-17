const submitBtn=document.querySelector('.submit-btn');
const mainCart=document.querySelector("main");
const rateBtns=document.querySelectorAll('.rate-btn');
let CurrentRate=0;
mainCart.addEventListener('click',(e)=>{
    if(e.target.classList.contains('rate-btn')){
        rateBtns.forEach((btn)=>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
       CurrentRate=e.target.dataset.rate
        
    }
})
submitBtn.addEventListener('click',()=>{
    if(CurrentRate){
        mainCart.innerHTML=`     <img class="thank-img" src="./images/illustration-thank-you.svg" alt="">
     <h4 class="result-rating">You selected ${CurrentRate} out of 5</h4>
     <h2>Thank you!</h2>
     <p class="thank-txt">We appreciate you taking the time to give a rating. If you ever need more support,
    don’t hesitate to get in touch! </p>`

    }
})
