![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad Lab | JS BLOG

We have learned Object-oriented programming and how class and inheritance work in JavaScript. Now lets work with our Viking friends, applying all of the concepts we have just learned.

## What should you do
```
Fork this repo
Clone this repo
Practice OOPs Features
```

## How To Submit
```
Upon completion, run the following commands:

git add .
git commit -m "ProGrad ID"
git push origin master

And finally, create a pull request so your ProGrad Mentor (PM) can review your work.
```

## Instructions
We must write the correct code in the script.js file. In this file you will find the following starter code:
```
class Blog{

}
```

In this case, it says that Blog class should receive 2 arguments (title & detail), so we have to write the correct code. Let's make the Blog class receive two arguments:
```
class Blog{
constuctor(title,detail){}

}
```
### Progression 1: WRITE UP
Modify the Blog class and add two methods to it: addTitle(), and addDescription().

### class
- should receive two arguments title and detail.
- should receive title as first argument.
- should receive detail as second argument.

### addTitle()
- should be a method.
- should receive 0 arguments.
- should display the title of Blog as H1.
```
     var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
```

### addDescription()
- should be a method.
- should have 0 arguments.
- should display the description as a paragraph.
![Image description](https://i1.faceprep.in/ProGrad/Mern-Blog-1.png)

![Image description](https://i1.faceprep.in/ProGrad/Mern-Blog-2.png)

### Progression 2:  SHOW EM UP

Setup `EventListeners`, so that we can display the entire blog for the users
![Image description](https://i1.faceprep.in/ProGrad/Mern-Blog-3.png)

Happy Coding ProGrads❤️

