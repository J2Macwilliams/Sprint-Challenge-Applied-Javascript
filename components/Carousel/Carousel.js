/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let images = [
  {mountains: "./assets/carousel/mountains.jpeg"},
  {computer: "./assets/carousel/computer.jpeg"},
  {trees: "./assets/carousel/trees.jpeg"},
  {turntable: "./assets/carousel/turntable.jpeg"}
  ]
  
  
  const carouselContainer = document.querySelector("carousel-container");
  
  function carouselCreator(imgArray) {
    const carousel = document.createElement('div');
    const leftBtn = document.createElement('div');
    const ulist = document.createElement('ul');
    const rightBtn = document.createElement('div');
  
    //setup structure of elements
    carousel.appendChild(leftBtn);
    carousel.appendChild(ulist);
    carousel.appendChild(rightBtn);
  
    //set content
    imgArray.forEach((i) => {
      const li = document.createElement('li');
      li.src = i.src;
      ulist.appendChild(li);
    })
  
    //set class
    carousel.classList.add("carousel");
    leftBtn.classList.add("left-button");
    rightBtn.classList.add("right-button");
  
    //add events
    leftBtn.addEventListener('click', (e) => {
      menu.classList.toggle('menu--open');
    })
  
    rightBtn.addEventListener('click', (e) => {
      menu.classList.toggle('menu--open');
    })
  
  }