console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='new value';
//moventhe image
var img=document.getElementById('img');
img.onClick = function(){
    img.style.marginLeft='100px';
}