/* Fill your code*/
class Blog {
    constuctor(title, detail) {
        this.title = title;
        this.detail = detail;
    }
    addTitle = () => {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id", "blog-title");
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
    addDescription = () => {
        var detail_card = document.createElement('p');
        detail_card.setAttribute("id", "blog-detail");
        document.getElementById('card-text').appendChild(detail_card);
        detail_card.innerHTML += this.detail;
    }

}

const addPost = () => {
    console.log("was here")
    const unhide = document.getElementById("popupContact")
    unhide.style.display = "flex"
}
const close = () => {
    const unhide = document.getElementById("popupContact")
    unhide.style.display = "none"
}
const addBlog = () => {
    const obj = new Blog
    obj.title = document.getElementById("title").value
    obj.detail = document.getElementById("detail").value
    if ((obj.title != "") && (obj.detail != "")) {
        obj.addTitle()
        obj.addDescription()
    }
    else alert("TITLE OR DESCRIPTION CANNOT BE EMPTY")
}

document.getElementById("addBlog").addEventListener("click", addPost)
document.getElementById("close").addEventListener("click", close)
document.getElementById("post").addEventListener("click", addBlog)

