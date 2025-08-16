$(document).ready(function(){
          function showorange(){
            $('#orange').css("background-color","orange")
            $('#white').css("background-color","white")
            $('#blue').css("background-color","white")
            $('#green').css("background-color","white")
            setTimeout(showwhite,1000);

          }
          function showwhite(){
            $('#orange').css("background-color","white")
            $('#white').css("background-color","white")
            $('#blue').css("background-color","blue")

            $('#green').css("background-color","white")
            setTimeout(showgreen,1000);

          }
          function showgreen(){
            $('#orange').css("background-color","white")
            $('#white').css("background-color","white")
            $('#blue').css("background-color","white")
            $('#green').css("background-color","green")
            setTimeout(showorange,1000);

          }
           
         showorange();  
        })