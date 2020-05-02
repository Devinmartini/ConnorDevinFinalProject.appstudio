  
function progressFunction(w, m) {
return m/w;  
}

trackProgress.onshow=function(){

  let sumMiles = ""
  let progressGoal = ""
  let finalValue = ""
  let finalValueRounded = ""

  
  selTrack.clear()

  let gSelect= ""
  
  query = "Select goal_name FROM goal WHERE username ='" + userName + "'"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=375groupa3&query=" + query);
      if(req.status == 200) {
        results = JSON.parse(req.responseText)
          for (i = 0; i <= results.length - 1; i++)
            gSelect = results
      }
         
  for (y = 0; y <= gSelect.length-1 ; y++) 
  selTrack.addItem(gSelect[y])


}



selTrack.onclick=function(){
    
  let selectedTrack= ""
      
  for (i = 0; i <= 1; i++)
    selectedTrack = selTrack.text
 
  query = "Select g.weekly_goal, sum(r.miles) as total FROM run r JOIN goalrun gr ON r.run_id = gr.run_id JOIN goal g ON gr.goal_id = g.goal_id WHERE g.goal_name = '"+ selectedTrack +"' AND username = '"+ userName +"'" 
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=375groupa3&query=" + query);
        if (req.status == 200) {
          results = JSON.parse(req.responseText)
          for (i = 0; i <= results.length - 1; i++)
            progressGoal = results[0][0]
            sumMiles = results[0][1]

          finalValue = progressFunction(progressGoal, sumMiles)
          finalValueRounded = finalValue.toFixed(3)

          Progressbar1.value = (finalValueRounded * 100)
          if (Progressbar1.value == 0) {
            lblEncourage.value = "Go out and run!";
          } else if (Progressbar1.value > 0 && Progressbar1.value <= 30) {
            lblEncourage.value = "Good work you are making progress!";
          } else if (Progressbar1.value > 30  && Progressbar1.value <= 60) {
            lblEncourage.value = "Keep up the Good Work!";
          } else if (Progressbar1.value > 60  && Progressbar1.value <+ 99) {
            lblEncourage.value = "You are almost there!";
          } else {
            lblEncourage.value = "AMAZING WORK!!!";
          }
      }
}




hamTrack.onclick=function(s){
  if (typeof(s) == "object"){ 
    return
  } else {
    
          switch(s) {
          case "Homepage":
              ChangeForm(homePage)
              break
          case "Create a Goal":
              ChangeForm(createGoal)
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

