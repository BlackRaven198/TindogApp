// Create the Dog class here
import dogs from './data.js';




class Dog {
    constructor(data){
        //properties here
        Object.assign(this, data)
        // const dogStatus = document.getElementById("dog-status").innerHTML = ""    <- Temp removed
    }
    
    //methods here
   
   dogCardHtml() {
       const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
       return`
        <img class="dog-pic" id="dogPic" src="${avatar}"/> 
                <div class="info">
                     <h3 id="name" > ${name}, ${age} </h3>
                     <p id="bio"> ${bio} </p>
                </div>`
       
   
   }
    
    
    likeRejectHtml() {
        if (this.hasBeenLiked) {
            return  '<img class="badge" id="yes-badge" style="display:none;" src="images/badge-like.png"/>'
        } else if (this.hasBeenSwiped) {
            return `<img class="badge" id="yes-badge" style="display:none;" src="images/badge-like.png"/>`
        }  
    }
    
    
    
}








export default Dog;