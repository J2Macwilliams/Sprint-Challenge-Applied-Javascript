// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleCard (news) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorBox = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    //add class 
    card.classList.add('card');
    headline.classList.add('headline');
    authorBox.classList.add('author');
    imgContainer.classList.add('img-container');

    //add card structure
    card.appendChild(headline);
    card.appendChild(authorBox);
    authorBox.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorBox.appendChild(name);

    //set content
    headline.textContent = news.headline;
    img.src = news.authorPhoto;
    name.textContent = news.authorName;

    
    return card
    
}


axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log('info: ', response);
    const newArticles1 = response.data.articles.javascript;
    const newArticles2 = response.data.articles.bootstrap;
    const newArticles3 = response.data.articles.technology;
    const newArticles4 = response.data.articles.jquery;
    const newArticles5 = response.data.articles.node;

    
    newArticles1.forEach(element => {
        const article = articleCard(element)
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(article);

    });
    newArticles2.forEach(element => {
        const article = articleCard(element)
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(article);
        
    });
    newArticles3.forEach(element => {
        const article = articleCard(element)
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(article);
        
    });
    newArticles4.forEach(element => {
        const article = articleCard(element)
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(article);
        
    });
    newArticles5.forEach(element => {
        const article = articleCard(element)
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(article);
        
    });
  })

  .catch(error => {
  console.log("The data was not returned", error);
    });

      
        
        