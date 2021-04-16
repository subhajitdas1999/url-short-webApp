$(".mobile-menu").click(function(){
    $(".mobile-menu").toggleClass("menu");
   $(".mobile-list").toggle(200);
})

// https://api.shrtco.de/v2/

document.querySelector(".sort-btn").addEventListener("click",getInput);

function getInput(){
    const userLink = document.querySelector("input").value;
    

    myfunction(userLink);
    
}


async function myfunction(userLink){
    const bufferIcon =  document.querySelector(".buffer")
    bufferIcon.style.visibility = "visible";


    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${userLink}`);

   
    const inputFiled = document.querySelector(".input-filed");
    if (response.status==201){
        const data = await response.json();
        const link = data.result.full_short_link;

        if (inputFiled.classList.contains("error")){
            inputFiled.classList.remove("error");
        }

        addListItem(userLink,link);

       

    }else{
        document.querySelector(".input-filed").classList.add("error");
    }
    bufferIcon.style.visibility = "hidden";
}



function addListItem(userLink,outputLink){
    
    let ul=document.querySelector(".sorted-list");
    let li = document.createElement("li");
    const result = `<div>
          <p class="input-link">${userLink}</p>
          <p class="output-link">${outputLink}</p>
          <button class="copy-btn gs-btn">Copy</button>
        </div>`
    li.innerHTML=result;

    ul.appendChild(li);
    
    li.querySelector(".copy-btn").addEventListener("click",doCopy);
}



function doCopy(){
    this.style.backgroundColor = "hsl(257, 27%, 26%)";
    this.innerHTML="Copied!!";

    const copiText = this.previousElementSibling.innerHTML;
    let inputElement = document.createElement("input");
    inputElement.setAttribute("value",copiText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand("copy");
    inputElement.parentNode.removeChild(inputElement);


}



// let clickbtns = document.querySelectorAll(".copy-btn");

// for(let i=0;i<clickbtns.length;i++)
// {
//     clickbtns[i].addEventListener("click",function(){
    
//         
//         
    
//         
//         
//        
        
//         
//         
//         
//     })

// }

