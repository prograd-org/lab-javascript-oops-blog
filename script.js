/* Fill your code*/
document.getElementById('addBlog').addEventListener('click',function(){
document.getElementById('popupContact').style.display="block";


})
document.getElementById('close').addEventListener('click',function(){
    document.getElementById('popupContact').style.display="none";
})
class Blog{
    constuctor(title,detail){
        this.title=title
        this.detail=detail
    }
    addTitle(){
    var title_card = document.createElement('h1');
    title_card.setAttribute("id","blog-title");
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
    
    
   
     } 
     addDescription(){
       var display_card = document.createElement('p');
        display_card.setAttribute("id","blog-description");
        console.log(display_card);
        document.getElementById('card-text').appendChild(display_card);
        display_card.innerHTML += this.detail ;
     }
}
var post=document.getElementById('post');
post.addEventListener('click',function(){
    var image=document.createElement('img')
 image.src='./assets/javascript.png';
image.setAttribute('id','image')
document.getElementById('card-text').appendChild(image);
var title=document.getElementById('title').value;
var detail=document.getElementById('detail').value;
var card=new Blog(title,detail)
card.addTitle()
card.addDescription()

})
