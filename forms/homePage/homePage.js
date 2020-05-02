
hamChangeForm.onclick=function(s){
  if (typeof(s) == "object"){ 
    return
  } else {
    
  switch(s) {
  case "Check the Weather":
      ChangeForm(weather)
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


