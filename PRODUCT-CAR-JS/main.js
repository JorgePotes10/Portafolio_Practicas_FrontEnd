const red = document.querySelector('.circle__red');
const gray = document.querySelector('.circle__gray');
const black = document.querySelector('.circle__black');
const button = document.querySelector('.addCar');
const feedback = document.querySelector('.adquiredCar');
const cardImage = document.querySelector('.product__img');
const tag = document.querySelector('.product__tag');

red.addEventListener("click", function () {
    button.style.backgroundColor = "red";
    tag.style.backgroundColor = "red";
    cardImage.style.backgroundImage = 'url("https://mercedesvn.com.vn/wp-content/uploads/2020/12/%C4%90%C3%A1nh-gi%C3%A1-Mercedes-Benz-C300-AMG-2020-1.jpg")';
  });
  
  gray.addEventListener("click", function () {
    button.style.backgroundColor = "gray";
    tag.style.backgroundColor = "gray";
    cardImage.style.backgroundImage = 'url("https://acnews.blob.core.windows.net/imgnews/large/NAZ_ad1e86b0b3194ed5b722ecfc52ee3157.jpg")';
  });
  
  black.addEventListener("click", function () {
    button.style.backgroundColor = "black";
    tag.style.backgroundColor = "black";
    cardImage.style.backgroundImage = 'url("https://i.ytimg.com/vi/UTBhSLmrR9M/maxresdefault.jpg")';
  });
  
  const cart = () => {
    button.style.display = "none";
    feedback.style.display = "block";
  };
  button.addEventListener("click", cart);
  
  const feedbackBtn = () => {
    button.style.display = "block";
    feedback.style.display = "none";
  };
  feedback.addEventListener("click", feedbackBtn);
