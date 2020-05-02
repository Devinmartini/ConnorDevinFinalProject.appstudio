
btnCurrentCity.onclick=function(){

  let userCity = ""

  userCity = inpCurrentCity.value
   
   
  
  req = Ajax("https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=d67ff9edfbc47f83d7f14c4dc0b32a4a&&units=f&query="+userCity);
        if (req.status == 200) {
          results = JSON.parse(req.responseText)
        } 
  
  lblFeelsLike.value = results.current.feelslike + "°F"
  lblWeatherDescription.value = results.current.weather_descriptions
  lblWindSpeed.value = results.current.wind_speed + "mph"
  lblPrecip.value = results.current.precip + "%"
  imgWeather.src = results.current.weather_icons
  

}


hamWeather.onclick=function(s){
  if (typeof(s) == "object"){ 
    return
  } else {
    
        switch(s) {
        case "Homepage":
            ChangeForm(homePage)
            break
        case "Track your Progress":
            ChangeForm(trackProgress)
            break
        case "Create a Goal":
            ChangeForm(createGoal)
            break
        case "Add a Run":
            ChangeForm(newRun)
            break 
        }
  }
}



