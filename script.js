/* Fill your code*/

// Blog Class to create Re-usabe code
class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    let title_card = document.createElement("h1");
    title_card.setAttribute("id", "blog-title");
    console.log(title_card);
    document.getElementById("card-text").appendChild(title_card);

    title_card.innerHTML += this.title;
  }
  addDescription() {
    let description = document.createElement("p");
    description.setAttribute("id", "blog-description");
    console.log(description);
    document.getElementById("card-text").appendChild(description);
    description.textContent = this.detail;
  }
  addImage() {
    let image = document.createElement("img");
    image.setAttribute("src", "./assets/java card image.svg");
    document.getElementById("card-text").appendChild(image);
    // document.getElementById("flashcard").appendChild(image);
  }
}

//Event listener when clicked on Add New Post on UI, it makes the popup visible

const addBlog = document.getElementById("addBlog");
// console.log(addBlog);
addBlog.addEventListener("click", () => {
  const popup = document.querySelector("div#popupContact");
  console.log(popup);
  popup.style.display = "Block";
});

//When Clicked on Submit Button in the UI New object is created and content is added in the UI i.e title, image,description
const submit = document.getElementById("post");
submit.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const des = document.getElementById("detail").value;
  console.log(title, des);
  const newBlog = new Blog(title, des);
  newBlog.addImage();
  newBlog.addTitle();
  newBlog.addDescription();
});

//Used to close the POP up when clicked on X button in the UI

document.getElementById("close").addEventListener("click", () => {
  const popup = (document.querySelector("div#popupContact").style.display =
    "none");
});
