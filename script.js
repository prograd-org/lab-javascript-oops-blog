/* Fill your code*/
class blog{
    constructor(title,detail)
    {
        this.title=title;
        this.detail=detail;
    }
    addTitle()
    {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
    addDescription()
    {
        var title_card = document.createElement('h1');
        desc_card.setAttribute("id","blog-description");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
}

document.getElementById("close").addEventListener('click',function(){
    document.getElementById("popupContact").style.display="none";
    document.getElementById("title").value="";
    document.getElementById("detail").value="";  
});
document.getElementById("addBlog").addEventListener('click',function(){
    document.getElementById("popupContact").style.display="block";
    document.getElementById("title").value="";
    document.getElementById("detail").value="";
});


document.getElementById("post").addEventListener('click',function(){
    document.getElementById("popupContact").style.display="none";
    var title = document.getElementById("title").value;
    var description = document.getElementById("detail").value;
    var image = document.createElement("img");
    image.src="./assets/javascript.png";
    document.getElementById("card-text").append(image);
    var newblog = new blog(title,description);
    newblog.addTitle();
    newblog.addDescription();
});
