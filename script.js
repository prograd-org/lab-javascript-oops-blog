class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }

  addTitle() {
    var title_card = document.createElement("h1");
    title_card.setAttribute("id", "blog-title");
    _("card-text").appendChild(title_card);
    title_card.innerHTML = this.title;
  }

  addDescription() {
    var desc = document.createElement("p");
    desc.setAttribute("id", "blog-description");
    _("card-text").appendChild(desc);
    desc.innerHTML = this.detail;
  }

  addImage() {
    let flashcard = _("flashcard");
    let img = document.createElement("img");
    img.src = "./assets/java card image.svg";
    flashcard.insertBefore(img, flashcard.childNodes[0]);
  }
}

function _(selector) {
  return document.getElementById(selector);
}

let addBlogBtn = _("addBlog");
addBlogBtn.addEventListener("click", () => {
  _("popupContact").style.display = "block";
});

let postBtn = _("post");
postBtn.addEventListener("click", () => {
  let title = _("title").value;
  let detail = _("detail").value;
  let blog = new Blog(title, detail);
  _("popupContact").style.display = "none";
  blog.addTitle();
  blog.addDescription();
  blog.addImage();
});
