class Blog{
    constructor(title,detail){
        this.title=title;
        this.detail=detail;
    }
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').append(title_card);
        title_card.innerHTML += this.title;

    }
    addDescription(){
       let newElement=document.createElement("p");
       newElement.setAttribute("id","blog-description")
       newElement.innerHTML=this.detail 
       document.querySelector("#card-text").appendChild(newElement)
    }
}
function addBlog(){
    document.querySelector("#popupContact").style.visibility="visible";
}
function post(){
    let blog1=new Blog(document.querySelector("#title").value,document.querySelector("#detail").value)
    console.log(blog1)
    document.querySelector("#popupContact").style.visibility="hidden"
    let newImage=document.createElement("img")
    newImage.src="assets/javascript.png"
    newImage.setAttribute("id","blog-image")
    console.log(newImage)
    document.querySelector("#card-text").append(newImage)
    blog1.addTitle()
    blog1.addDescription()

}
document.querySelector("#addBlog").addEventListener("click",addBlog)
document.querySelector("#post").addEventListener("click",post)