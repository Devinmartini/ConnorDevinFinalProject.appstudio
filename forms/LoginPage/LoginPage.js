let userName = ""
let query = ""
let req = ""
let results = ""



btnLogin.onclick=function(){

let password = ""
    
    userName = inpUser.value
    password = inpPassword.value
    if (results.length == 0) {
            NSB.MsgBox("You are not in our system")
            ChangeForm(CreateAccount)
              
      } else {
                let found = false
                for (i = 0; i <= results.length - 1; i++)
                    if (results[i][0] == userName && results[i][1] == password) {
                      found = true
                      ChangeForm(homePage)
                     } 
                if (found == false) {
                    NSB.MsgBox("Incorrect login information try again") 
                    userName = ""
                    password = ""
                    inpUser.value = ""
                    inpPassword.value = ""   
                }     
                     
             }
}


btnNewCustomer.onclick=function(){
ChangeForm(CreateAccount)
}


LoginPage.onshow=function(){
  query = "Select * from user"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=375groupa3&query=" + query);
      if (req.status == 200) {
        results = JSON.parse(req.responseText)
      } else 
          NSB.MsgBox("Network Error: " + req.status)
    }


