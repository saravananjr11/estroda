///search bar
var product=document.getElementById("products")
var search=document.querySelector(".search")
var list=product.querySelectorAll("div")
console.log(list)


search.addEventListener("keyup",function(event){
    var enterdvalue=event.target.value.toUpperCase()
    console.log("hello")

    for(count=0;count<=list.length;count=count+1)
    {
        var productname=list[count].querySelector("p").textContent
        

        if(productname.toUpperCase().indexOf(enterdvalue)<0)
        {
            list[count].style.display="none"
        }
        else{
            list[count].style.display="block"
        }
    }
}) 



//nav bar
var sidnav=document.querySelector(".sidenav")
var mark=document.querySelector(".mark")



function show(){
    sidnav.style.left="0%"
    

}
mark.addEventListener("click",function(){
    sidnav.style.left="-60%"
})
