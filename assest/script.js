  let city=document.getElementById("city")
  let country=document.getElementById("country")
  let weather=document.getElementById("weather")
  let condition=document.getElementById("condition")
  let search=document.getElementById("search")
  let input=document.getElementById("input")
  let img=document.getElementById("img")
  let notFound=document.getElementById("notFound")
  let select =document.getElementById("select")

  let weatherCondition=document.getElementById("weatherCondition")

    search.addEventListener("click",function(ev){
    ev.preventDefault()
    
    axios.get(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${input.value}`)
    .then(function (res) {
        
    city.innerText=`City: ${res.data.location.name}`
    country.innerText=`Country: ${res.data.location.country}`
    weather.innerText=`Weather Forecats: ${res.data.current.temp_c}`
    condition.innerText=`Sky Condition:`
    img.src=`https:${res.data.current.condition.icon}`
    weatherCondition.innerText=res.data.current.condition.text

        if(select.value=="fahrenheit"){
            weather.innerText=`Weather Forecats: ${res.data.current.temp_f}`
            
        }
    

   
    
    })
    .catch(function (error) {
        notFound.innerText="Not Found..!!!"
    
    })


})


  


