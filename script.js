/* Fill your code*/

// importing blog class
import Blog from "./Blog.js"

// const blog = new Blog("JS", "Fun")
// console.log(blog)

// add blog button
var $addBlog = document.querySelector("#addBlog")
// close pop up button
var $close = document.querySelector("#close")
// popup div
var $popup = document.querySelector("#popupContact")

// when add post will be clicked Pop up will be showed which will ask for blog details
$addBlog.addEventListener("click", () => {
    $popup.style.display = "block"
})

// when the close button is clicked on popup it will close the popup
$close.addEventListener("click", () => {
    $popup.style.display = "none"
})


// when addpost button will be clicked the the title and description varibles will be set in Blog class
// add blog details will be appended/add in card-text element

document.querySelector("#post").addEventListener("click", addPost);

function addPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("detail").value;

    if (title && description) {
        let blog = new Blog(title, description)

        blog.addTitle()
        blog.addDescription()

        $popup.style.display = "none"
    } else {
        document.querySelector("#message").style.display = "inline-block"
    }
}