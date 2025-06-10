// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
const setup = () => {
    loadMovies();
}
const loadMovies = () => {
    let movieList =  document.querySelector("#movielist");
    for (let i = 0; i <  movies.length; i++) {
        let movieContainer = document.createElement("div");
        movieContainer.classList.add("movie");
        let title = document.createElement("h2");
        title.textContent = movies[i].title;
        movieContainer.appendChild(title);
        let likeContainer = document.createElement("div");
        likeContainer.classList.add("like-dislike");
        let like = document.createElement("i");
        like.classList.add("fas");
        like.classList.add("fa-thumbs-up");
        like.setAttribute("data-id", movies[i].id);
        like.addEventListener("click", likeButton);
        let dislike = document.createElement("i");
        dislike.classList.add("fas");
        dislike.classList.add("fa-thumbs-down");
        dislike.setAttribute("data-id", movies[i].id);
        dislike.addEventListener("click", likeButton);
        likeContainer.appendChild(like);
        likeContainer.appendChild(dislike);
        movieContainer.appendChild(likeContainer);
        let picContainer = document.createElement("div");
        picContainer.classList.add("pic-and-descr");
        let image = document.createElement("img");
        image.setAttribute("src", movies[i].imageUrl);
        image.setAttribute("alt", "image of " + movies[i].title);
        picContainer.appendChild(image);
        let description = document.createElement("p");
        description.innerText = movies[i].description;
        picContainer.appendChild(description);
        movieContainer.appendChild(picContainer);
        movieList.appendChild(movieContainer);
    }
}
const likeButton = (event) => {
    let icon = event.target;
    let likeBtn = true;
    if (icon.classList.contains("fa-thumbs-down")){
        likeBtn = false;
    }
    let movieId = icon.getAttribute("data-id");
    let buttonDiv = document.querySelectorAll(".like-dislike")[movieId - 1];
    let otherButton;
    if (likeBtn){
        otherButton = buttonDiv.children[1];
    } else {
        otherButton = buttonDiv.firstChild;
    }
    otherButton.classList.remove("liked");
    otherButton.classList.remove("disliked");
    if (likeBtn){
        icon.classList.toggle("liked");
    } else {
        icon.classList.toggle("disliked");
    }
    countLikes();
}
const countLikes = () => {
    let buttonDivs = document.querySelectorAll(".like-dislike");
    let likeCount = 0;
    let dislikeCount = 0;
    for (let i = 0; i < buttonDivs.length; i++) {
        let dislikeBtn = buttonDivs[i].children[1];
        let likeBtn = buttonDivs[i].firstElementChild;
        let movieId = buttonDivs[i].firstElementChild.getAttribute("data-id");
        if (likeBtn.classList.contains("liked")){
            likeCount++;
        }
        if (dislikeBtn.classList.contains("disliked")){
            dislikeCount++;
        }
        loadLikedList(movieId);
    }
    let likeCounter = document.querySelector("#like");
    let dislikeCounter = document.querySelector("#dislike");
    likeCounter.textContent = ""+likeCount;
    dislikeCounter.textContent = ""+dislikeCount;
}
const loadLikedList = (movieId) => {

}
window.addEventListener('load', setup);