var button=document.getElementById('counter');
button.onclick=function(){
    
    //make a request to the counter
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpREquest.DONE){
            if(request.status === 200){
                var counter=request.responseText;
                console.log(counter);
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
            
        }
    };
    request.open('GET','http://skr001998.imad.hasura-app.io/counter',true);
    request.send(null);
    
};