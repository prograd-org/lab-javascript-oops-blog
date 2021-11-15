/* Fill your code*/


class Blog{
    constructor(title,detail){
        this.title=title;
        this.detail=detail;
        this.addTitle();
        this.addDescription();
    }

    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;

    }

    addDescription(){
        var descrip_card = document.createElement('p');
        descrip_card.setAttribute("id","blog-title");
        console.log(descrip_card);
        document.getElementById('card-text').appendChild(descrip_card);
        descrip_card.innerHTML += this.detail;
    }
}

document.getElementById("addBlog").addEventListener("click", function(){
    document.getElementById("popupContact").style.display = "block";
});

document.getElementById("close").addEventListener("click",function(){
    document.getElementById("popupContact").style.display = "none";
});

document.getElementById("post").addEventListener("click", function(){
    document.getElementById("popupContact").style.display = "none";
    var $img = document.createElement("img");
    $img.setAttribute("src","./assets/javascript.png");
    document.getElementById("card-text").appendChild($img);
    var $title = document.getElementById("title").value;
    var $detail = document.getElementById("detail").value;
    var jsblog=new Blog($title, $detail);
})
