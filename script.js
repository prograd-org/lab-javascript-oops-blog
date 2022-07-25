/* Fill your code*/
class Blog{
    constructor(title, detail){
        this.title = title;
        this.detail = detail;
    }

    addTitle() {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }

    addDetails(){
        var detail_card = document.createElement('p');
        detail_card.setAttribute("id", "blog-description");
        document.getElementById('card-text').appendChild(detail_card);
        detail_card.innerHTML += this.detail;
    }

    addCard() {
        document.querySelector(".body-div2").innerHTML += 
        `<div class="article-card">
            <img src="./assets/java card image.svg" alt="">
                <div class="card-text" id="card-text">
                    <h1>${this.title}</h1>
                    <p>${this.detail}</p>
                    <p class="post-date">Posted on</p>
                </div>
                <div class="card-buttons">
                    <a><button type="button" id="edit">EDIT</button></a> <span>|</span><a ><button id="delete">DELETE</button></a>
                </div>
        </div>`
    }


}

document.querySelector("#addBlog").onclick = ()=>{
    document.querySelector("#popupContact").style.display = "inherit";
}

document.querySelector("#close").onclick = ()=>{
    document.querySelector("#popupContact").style.display = "none";
}



document.querySelector("#post").onclick = ()=>{
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#detail").value;

    new Blog(title, description).addCard();
    document.querySelector("#close").click();


}