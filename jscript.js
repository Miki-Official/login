function validate(){

          var username=document.getElementById("username").value;
          var password=document.getElementById("password").value;
     
     
     if(username=="a"&& password=="a"){
             
        alert("Login succesfull");
              return false;
              }
     else{
               alert("Login failed");
               return false;
              }
}