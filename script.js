/* Fill your code*/
class Blog{
    constuctor(title,detail){
        this.title=title;
        this.detail=detail;
    }
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
addDescription(){
    var description_card = document.createElement('p');
    description_card.setAttribute("id","blog-description");
    console.log(description_card);
    document.getElementById('card-text').appendChild(description_card);
    description_card.innerHTML += this.description;
}
}
var addpost=document.getElementById('popupContact');
var blog=document.getElementById('addBlog');
var closepost=document.getElementById('close');
blog.addEventListener("click",function(){
    addpost.style.display="block";
   
});
closepost.addEventListener("click",function(){
    addpost.style.display="none";
   
});
document.getElementById("post").addEventListener("click",function(){
    document.getElementById("popupContact").style.display="none";
    var $img=document.createElement("img");
    $img.setAttribute("src","./assets/javascript.png");
    document.getElementById("card-text").appendChild($img);
    var $title=document.getElementById("title").value;
    var $detail=document.getElementById("detail").value;
    var object1=new Blog($title,$detail);
});
