/* Fill your code*/
document.getElementById('addBlog').addEventListener('click', function () {
    document.getElementById('popupContact').style.display = "block";
})
class Blog {
    constructor(title, detail) {
        this.title = title;
        this.detail = detail;
    }
    addTitle() {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id", "blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;

    }
    addDescription() {
        var discription_card = document.createElement('p');
        discription_card.setAttribute("id", "blog-description");
        console.log(discription_card);
        document.getElementById('card-text').appendChild(discription_card);
        discription_card.innerHTML += this.detail;
    }
}

var post = document.getElementById('post');
post.addEventListener('click', function () {
    var title = document.getElementById('title').value;
    var detail = document.getElementById('detail').value;
    var add_blog = new Blog(title, detail);
    add_blog.addTitle();
    add_blog.addDescription();
    var image = document.createElement('img');
    image.src = './assets/javascript.png';
    var newchild = document.getElementById('flashcard')
    newchild.insertBefore(image, newchild.childNodes[0]);
    document.getElementById('popupContact').style.display = "none";
})