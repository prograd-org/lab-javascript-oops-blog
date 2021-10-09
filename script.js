/* Fill your code*/
class Blog
{
    constructor(title,detail)
    {
        this.title = title
        this.detail=detail
        
    }
     addTitle(innerdiv)
    {

        let titlecard = document.createElement("h1")
        titlecard.setAttribute("id","blog-title")
        console.log(titlecard)
        innerdiv.appendChild(titlecard)
        titlecard.innerHTML = this.title
    }
    addDescription(innerdiv)
    {
        let desccard = document.createElement("p")
        desccard.setAttribute("id","blog-description")
       innerdiv.appendChild(desccard)
        desccard.innerHTML = this.detail
    }
}


//addblock button

document.querySelector("#addBlog").addEventListener("click" , function  ()
  {
     document.querySelector("#popupContact").style.display="block"
     document.querySelector(".body-div2").style.display="none"

    

}
)

//post button

document.querySelector("#post").addEventListener("click" , function  ()

{
    document.querySelector("#popupContact").style.display="none"
    document.querySelector(".body-div2").style.display="flex"

    let inputtitle = document.querySelector("#title")
    let inputdescription = document.querySelector("#detail")

    //object initalization
    let object = new Blog(inputtitle.value , inputdescription.value)
    
    //outer div
    let divisontag = document.createElement("div")
    divisontag.setAttribute("class","article-card")

    //image
    let image = document.createElement("img")
    let path="assets/"+object.title.toLowerCase()+".svg"
    image.setAttribute("src",path)


    //nesteddiv card
    let innerdiv = document.createElement("div")
    innerdiv.setAttribute("class","card-text")
    innerdiv.setAttribute("id","card-text")
    
    //append it 
    divisontag.appendChild(image)
    divisontag.appendChild(innerdiv)
    document.querySelector(".body-div2").appendChild(divisontag)

    console.log(divisontag)
    
    //method initalization
    object.addTitle(innerdiv)
    object.addDescription(innerdiv)
    


}
)

//close button
document.querySelector("#close").addEventListener("click" , function  ()
{
    document.querySelector("#popupContact").style.display="none"
    document.querySelector(".body-div2").style.display="flex"
})

//code done