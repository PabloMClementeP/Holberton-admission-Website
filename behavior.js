document.addEventListener("DOMContentLoaded", function(event){
    // var thumbnailElement = document.getElementById("smart_thumbnail");

    // thumbnailElement.addEventListener("click", function(){
    //     if(thumbnailElement.className == ""){
    //         thumbnailElement.className = "small"
    //     }else{
    //         thumbnailElement.className = ""
    //     }
    // })


    const $images = document.getElementsByClassName("zoom");
    console.log($images)
    if($images.length > 0){
        for(let img of $images){
            img.addEventListener("click", ()=>{
                var clone = img.cloneNode();
                clone.classList.remove("zoom");
                // clone.classList.remove("zoom");
        
                let lb = document.getElementById("lbInner");
                lb.innerHTML="";
                lb.appendChild(clone);
        
                lb = document.getElementById("lbOuter");
                lb.classList.add("show");
            });
        }
    }

    const lbOuter = document.getElementById("lbOuter");
    lbOuter.addEventListener("click", ()=>{
        console.log(this.classList)
        lbOuter.classList.remove("show");
    })
});