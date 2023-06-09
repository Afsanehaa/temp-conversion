let htag=document.querySelector('.htag')
let input= document.querySelector('#inp')
// let inputnum= Number(input.value)
let convertBtn=document.querySelector('.convertBtn')
let resetBtn=document.querySelector('.resetBtn')
let changeBtn=document.querySelector('.changeBtn')
let title = document.querySelector('title')
let result =document.querySelector('.result')
let hflag=true
convertBtn.addEventListener('click' , function(){
    let inputnum= Number(input.value) 
    if(hflag && input.value){
      let f = (inputnum*1.8) + 32
      result.style.color='#fff'
       result.innerHTML =inputnum +' °C to  '+ f +' °F'
    }else if(hflag==false && input.value){
      let c = (inputnum - 32)/1.8
      result.style.color='#fff'
      result.innerHTML =inputnum +' °F to  '+ c +' °C'
    }else{
        result.style.color='red'
        result.innerHTML='pleaz enter number to convert !'
    }

})

resetBtn.addEventListener('click' , function(){
   result.innerHTML=''
   input.value=''

})

changeBtn.addEventListener('click' , function(){
if(hflag){
 htag.innerHTML='Convert °F to °C'
 input.setAttribute('placeholder' , '°F') 
 title.innerHTML='Convert °F to °C'
 hflag=false
}else{
 htag.innerHTML='Convert °C to °F'
 input.setAttribute('placeholder' , '°C') 
 title.innerHTML='Convert °C to °F'
 hflag=true
}
})