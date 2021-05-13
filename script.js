class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }

  //method to add title//
  addTitle() {
    var title = document.createElement("h1");
    title.setAttribute("id", "blog-title");
    document.getElementById("card-text").appendChild(title_card);
    title.innerHTML += this.title;
  }

  //method to add description//
  addDescription() {
    var des = document.createElement("p");
    des.setAttribute("id", "blog-desc");
    document.getElementById("card-text").appendChild(desc_card);
    desc.innerHTML += this.detail;
  }
  //method to add image//
  addImage() {
    var image = document.createElement("img");
    image.setAttribute("src", "./assets/java card image.svg");
    document.getElementById("card-text").appendChild(image);
  }
}

// variable popup takes the element with id popupContact which represents the rectangular section//
var popup = document.getElementById("popupContact");
//variable post takes the element with id 'post' which upon clicking displays the blog info//
var post = document.getElementById("post");
post.addEventListener("click", displayPost);
//upon clicking the AddNewPost button, the rectangular section appears//
var add = document.getElementById("addBlog");
add.addEventListener("click", addBlog);

//exclusive function to make the popupContact as a block//
function addBlog() {
  popup.style.display = "block";
}
//exclusive function to display the post//
function displayPost() {
  var title = document.getElementById("title").value;
  var detail = document.getElementById("detail").value;
  //new_user is the object of class Blog//
  var new_user = new Blog(title, detail);
  new_user.addImage();
  new_user.addTitle();
  new_user.addDescription();
  //after the inclusion of relevant details by the user, the rectangular section disappears//
  popup.style.display = "none";
}
