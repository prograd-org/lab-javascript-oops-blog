/* Fill your code*/
document.getElementById('addBlog').addEventListener('click',function()
{
    document.getElementById('popupContact').style.display = 'block';
})
class Blog
{
    constructor(title,detail)
    {
        this.title = title
        this.detail = detail
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
        var display = document.createElement('p');
        display.setAttribute("id","blog-detail");
        console.log(display);
        document.getElementById('card-text').appendChild(display);
        display.innerHTML += this.detail;
    }
}

var title = document.getElementById('title').value;
var detail = document.getElementById('detail').value;
if(title.length != 0 || detail.length != 0)
{
    var post = document.getElementById('post');
    post.addEventListener('click',function()
    {
        var image = document.createElement('img');
        image.src ="./assets/javascript.png";
        document.getElementById("flashcard").append(image);
        var add_blog = new Blog(title,detail);
        add_blog.addTitle();
        add_blog.addDescription()
    })
}