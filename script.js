document.getElementById('addBlog').addEventListener('click',function(){
    document.getElementById('popupContact').style.display = "block";
})

document.getElementById('close').addEventListener('click',function(){
    document.getElementById('popupContact').style.display = "none";
});

class JavaScriptTopics{
    constructor(title,detail){
        this.title = title;
        this.detail = detail;
    }

    addTitle(){     
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
        // title_card.style.marginTop = '-150px';
    }

    addDescription(){
        var display_card = document.createElement('p');
        display_card.setAttribute('id','blog-description');
        console.log(display_card);
        document.getElementById('card-text').appendChild(display_card);
        display_card.innerHTML += this.detail;
    }

}

var post = document.getElementById('post');
post.addEventListener('click',function(){
    // add image card
    var image = document.createElement('img');
    image.src = './assets/javascript.png';
    document.getElementById('card-text').appendChild(image);
    image.setAttribute('id','image');
    // image.style.marginTop = '30px';
    //Taking value from text box
    var title = document.getElementById('title').value;
    var detail = document.getElementById('detail').value;

    //Creating object for the class
    const card = new JavaScriptTopics(title,detail);
    card.addTitle();
    card.addDescription();
});

