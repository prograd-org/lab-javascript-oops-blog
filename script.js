/* Fill your code*/
 
class Blog {
    
    constructor(title, detail) {
        this.title = title;
        this.detail = detail;
    }
    
    addTitle() {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;

    }
    addDescription()
    {
        var desc_card = document.createElement('p');
        desc_card.setAttribute("id","blog-desc");
        document.getElementById('card-text').appendChild(desc_card);
        desc_card.innerHTML +=this.detail;
        
    }
    addImage() {
        let image = document.createElement("img");
        image.setAttribute("src", "./assets/java card image.svg");
        document.getElementById("card-text").appendChild(image);
    }
    

}

let popUp = document.getElementById('popupContact')
let btnPost = document.getElementById('post')
btnPost.addEventListener('click', displayPost)
let btnAddBlog = document.getElementById('addBlog')
btnAddBlog.addEventListener('click', addBlog)



function addBlog() {
    popUp.style.display = 'block'
}
function displayPost() {

    let title = document.getElementById('title').value
    let detail = document.getElementById('detail').value
    if(title=="" || detail=="")
    {
        alert("Field cant be empty")
    }
    else
    {
        let newBlog = new Blog(title,detail)
        newBlog.addImage();
        newBlog.addTitle()
        newBlog.addDescription();
        
        popUp.style.display='none'
    }
}
document.getElementById('close').onclick = function() {
    popUp.style.display='none'
}


