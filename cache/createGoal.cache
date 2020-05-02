
CreateGoal.onclick=function(){

  let miles = ""
  let startingDate = ""
  let endingDate = ""
  let milesNum = ""
  let goalID = ""
  let goalName= ""

  miles = inpMiles.value
  startingDate = startDate.value
  endingDate = endDate.value
  milesNum = parseInt(miles)
  goalName = inpGoal.value


  query = "INSERT INTO goal (weekly_goal,username,goal_start,goal_end,goal_name) VALUES ('" + miles + "','" + userName + "', '" + startingDate + "','" + endingDate + "','"+ goalName +"')"
         req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=375groupa3&query=" + query);
        if (req.status == 200) {
                if (req.responseText == 500) {
                        NSB.MsgBox("Congrats your goal was created")
                        inpMiles.value = ""
                        startDate.value = ""
                        endDate.value= ""
                } else
                      NSB.MsgBox("Error")
        } else
             NSB.MsgBox("Network error: " + req.status)     
}


hamGoal.onclick=function(s){
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
          case "Check the Weather":
              ChangeForm(weather)
              break
          case "Add a Run":
              ChangeForm(newRun)
              break 
          }
  }
}

