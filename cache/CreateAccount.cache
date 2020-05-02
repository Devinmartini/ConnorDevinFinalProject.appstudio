


btnCreateAccount.onclick=function(){

let newUser = ""
let newPassword = ""
let firstName = ""
let lastName = ""
let city = ""
let state = ""
let stateCaps= ""

newUser = inpNewUser.value
newPassword = inpNewPassword.value
firstName = inpFirstName.value
lastName = inpLastName.value
city = inpCity.value
state = inpState.value
stateCaps= state.toUpperCase()


query = "INSERT INTO user (username,password,first_name,last_name,city,state) VALUES ('" + newUser + "', '" + newPassword + "','" + firstName + "','" + lastName + "','" + city + "','" + stateCaps + "')"
         req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cmc06604&pass=Regis2017&database=375groupa3&query=" + query);
        if (req.status == 200) {
                if (req.responseText == 500) 
                        NSB.MsgBox("Congrats you are all signed up")
                 else
                      NSB.MsgBox("Error")
          } else
             NSB.MsgBox("Network error: " + req.status)     


  ChangeForm(LoginPage)
}


btnBack.onclick=function(){
  ChangeForm(LoginPage)
}
