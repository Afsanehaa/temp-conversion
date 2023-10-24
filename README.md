# temp-conversion

In this project, the conversion of Celsius to Fahrenheit is done And conversely.
You can see these actions in the photos below:

.Convert Celsius to Fahrenheit:
![Screenshot (49)](https://github.com/Afsanehaa/temp-conversion/assets/115100233/12dbf519-a71c-4c3c-95a2-30a48b0208e0)

.Convert Fahrenheit to Celsius:
![Screenshot (51)](https://github.com/Afsanehaa/temp-conversion/assets/115100233/d6ddb4f9-b89d-429f-b51a-caa06cfa689e)


## Usage/Examples

In this section, you can see an example of JavaScript code related to unit conversion:

```javascript
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
```


## Authors

- [@Afsanehaa](https://www.github.com/Afsanehaa)
## Tech Stack

**Client:** html, css, javascript

**Server:** -

## Feedback

If you have any feedback, please reach out to us at afsanehabdid@gmail.com

