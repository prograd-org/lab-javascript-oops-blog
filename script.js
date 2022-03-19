/* Fill your code*/

class Blog {
  constructor(title, detail) {
    this.title = title
    this.detail = detail
  }
  addTitle() {
    const titleCard = document.createElement("h1")
    titleCard.setAttribute("id", "blog-title")
    console.log(titleCard)
    document.getElementById("card-text").appendChild(titleCard)
    titleCard.innerHTML += this.title
  }
  addDescription() {
    const descCard = document.createElement("p")
    descCard.setAttribute("id", "blog-description")
    console.log(descCard)
    document.getElementById("card-text").appendChild(descCard)
    descCard.innerHTML += this.detail
  }
}
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("popupContact").style.display = "none"
  document.getElementById("title").value = ""
  document.getElementById("detail").value = ""
})
document.getElementById("addBlog").addEventListener("click", () => {
  document.getElementById("popupContact").style.display = "block"
  document.getElementById("title").value = ""
  document.getElementById("detail").value = ""
})

document.getElementById("post").addEventListener("click", () => {
  document.getElementById("popupContact").style.display = "none"
  const title = document.getElementById("title").value
  const description = document.getElementById("detail").value
  const image = document.createElement("img")
  image.src = "./assets/javascript.png"
  document.getElementById("card-text").append(image)
  const nblog = new Blog(title, description)
  nblog.addTitle()
  nblog.addDescription()
})
