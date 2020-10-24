class Blog {
    constructor(title, description) {
        this.title = title,
            this.description = description
    }

    addTitle() {

        var title_card = document.createElement('h1');
        title_card.setAttribute("id", "blog-title");
        title_card.innerHTML += `<img src="./assets/java card image.svg" alt="">` + this.title;
        document.getElementById('card-text').appendChild(title_card);
        console.log(title_card);
    }

    addDescription() {

        let descriptionCard = document.createElement("p");
        descriptionCard.setAttribute("id", "blog-description");
        let text = document.createTextNode(`${this.description}`)
        descriptionCard.appendChild(text);
        document.querySelector("#card-text").appendChild(descriptionCard)
        console.log(descriptionCard);
    }
}



export default Blog;