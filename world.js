window.onload = function (){
    
    
    let lookUp = document.getElementById("lookup");
    let country =document.getElementById("country");
    let allCountry =document.getElementById("allcountries");
    let msg;
    let url;
   
    
    lookUp.addEventListener("click",function(){
              console.log("ok");
              msg=country.getAttribute("value");
              url = "https://info2180-lab7-marcel1804.c9users.io/world.php?country="+msg;
       
           
        });
        
    allCountry.addEventListener("click",function(){
             console.log("ok 1");
             msg=allCountry.getAttribute("value");
             url = "https://info2180-lab7-marcel1804.c9users.io/world.php?all="+msg;
          });
    
    
    let httpRequest = new XMLHttpRequest();
    
     httpRequest.onreadystatechange= function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("result").innerHTML=this.responseText;
        }
    };
    
    httpRequest.open("GET",url,true);
    httpRequest.send();

}