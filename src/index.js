import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddToCart from './AddToCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
  <h1>Shopping Bag</h1>
  <AddToCart min="5" max="10" price="549" imgUrl="https://www.mrporter.com/variants/images/3024088872901549/in/w2000_q60.jpg" item="Common Projects Bball High" desc="White"/>

  <AddToCart min="2" max="5" price="870" item="Maison Margiela Future Sneakers" desc="White" imgUrl="https://image.goxip.com/CVAZSTf5k1d-NjCGuWWjLHXxm1g=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fimg.mytheresa.com%2F1000%2F1000%2F95%2Fjpeg%2Fcatalog%2Fproduct%2Fa7%2FP00443359.jpg"/>
  
  <AddToCart min="3" max="6" price="349" item="Our Legacy Brushed Scarf" desc="Brown" imgUrl="data:image/jpeg;base64,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" ></AddToCart>

  </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




