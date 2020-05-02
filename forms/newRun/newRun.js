
newRun.onshow=function(){

  let select1 = ""
  let runLog = ""
  let runDate = ""
  let runId = ""
  let goalId = ""
  let message = ""
  let runID = ""
  let runDateString = ""
  let runLogNum = ""

  selGoal.clear()
 }
 
  dateRan.onchange=function(){
    runDate = dateRan.value
    selGoal.clear()

    query = "Select goal_name FROM goal WHERE username ='" + userName + "' AND goal_end >='" + runDate + "' AND goal_start <='" + runDate + "'"
     req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=375groupa3&query=" + query);
          if (req.status == 200) {
            results = JSON.parse(req.responseText)
              for (i = 0; i <= results.length - 1; i++)
                select1 = results
              }
  
  for (y = 0; y <= select1.length-1 ; y++) 
  selGoal.addItem(select1[y])
}


let selectedGoal= ""
    
selGoal.onclick=function(){
        
    for (i = 0; i <= 1; i++)
       selectedGoal = selGoal.text
}

BtnCreateLog.onclick=function(){

  runLog = inpRunLog.value
  runDate = dateRan.value
  runLogNum = parseFloat(runLog)

  query = "INSERT INTO run (miles,run_date) VALUES ('" + runLog + "','" + runDate + "')"
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=375groupa3&query=" + query);
        if (req.status == 200) {
          if (req.responseText == 500) {
          NSB.MsgBox("Congrats your run was created")
          inpRunLog.value = ""
          dateRan.value = ""
          } else
            NSB.MsgBox("Error")
        } else
          NSB.MsgBox("Network error: " + req.status)     

  query = "Select * from run"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=375groupa3&query=" + query);
      if (req.status == 200) {
        results = JSON.parse(req.responseText)
        let confirmed = false
        for (i = 0; i <= results.length - 1; i++)
          if (results[i][1] == runLogNum && results[i][2] == runDate) {
            runID = results[i][0]
            confirmed = true
          } 
          if (confirmed == false) {
            NSB.MsgBox("Error")
          }
      } else 
        NSB.MsgBox("Network Error: " + req.status)
  
  query = "Select goal_id FROM goal WHERE goal_name ='" + selectedGoal + "'"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=375groupa3&query=" + query);
      if (req.status == 200) {
        results = JSON.parse(req.responseText)
        for (i = 0; i <= results.length - 1; i++)
        selectedID = results
      }  
  
  query = "INSERT INTO goalrun (goal_id,run_id) VALUES ('" + selectedID + "','" + runID + "')"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=375groupa3&query=" + query);
      if (req.status == 200) {
        if (req.responseText == 500) 
        NSB.MsgBox("Congrats they are connected")
        else
        NSB.MsgBox("Error it didnt connect")
      } else
      NSB.MsgBox("Network error: " + req.status)  
}
    


hamRun.onclick=function(s){
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
      case "Track your Progress":
          ChangeForm(trackProgress)
          break 
      }
    }
}




