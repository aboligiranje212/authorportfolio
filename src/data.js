
import img1 from './assets/hero-book.jpg'; // This is "The Event Horizon" image
import img2 from './assets/book2.jpg';      
import img3 from './assets/book3.jpg';      

export const BOOK_DATA = [
  {
    id: 1,
    title: "The Event Horizon",  
    author: "Magnus Star",
    price: "₹550",
    tag: "New Release",
    image: img1,                 
    buyLinks: {
      amazon: "https://www.amazon.in",
    }
  },
  {
    id: 2,
    title: "Void Whisperer",
    author: "Magnus Star",
    price: "₹799",
    tag: "Best Seller",
    image: img2,                 
    buyLinks: {
      amazon: "https://www.amazon.in",
    }
  },
  {
    id: 3,
    title: "Signal Lost",
    author: "Magnus Star",
    price: "₹499",
    tag: "Sci-Fi Thriller",
    image: img3,                
    buyLinks: {
      amazon: "https://www.amazon.in",
    }
  }
];