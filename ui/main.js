
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
     var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
             console.log('user logged in');
             alert('logged in is sucessfully');
             
            }else if(request.status===403){
              alert('username/password is incorrect')  ;
            }else if(request.status===500){
            alert('something went wrong on the server');  
            }
            
        }
};
   var username=document.getElementById('username').value;
     var password=document.getElementById('password').value;
     console.log(username);
     console.log(password);
 
   request.open('POST','http://skr001998.imad.hasura-app.io/login',true);
   request.setRequestHeader('Content-type','application/json');
   request.send(JSON.stringfy({username: uaername,password: password}));  
};

    
