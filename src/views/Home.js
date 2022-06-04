import { useState, useEffect } from "react";

const images = [
  "http://quotesbae.com/wp-content/uploads/2018/03/rick-and-morty-quotes-16.jpg",
  "https://www.magicalquote.com/wp-content/uploads/2021/10/Everyone-can-change-their-nature-Morty.-Its-what-defines-our-species.-Look-at-Iron-Man.jpg",
  "https://i.pinimg.com/originals/b6/bc/e2/b6bce20b2befaedbfce69391f8e5e6ee.jpg",
  "https://i.pinimg.com/originals/b6/bc/e2/b6bce20b2befaedbfce69391f8e5e6ee.jpg",
  "https://i.pinimg.com/originals/38/cb/50/38cb50cf31dd4748c65fbea5865ad2bc.png",
  "http://cdn.costumesupercenter.com/images/content/RICK-AND-MORTY-TEXT-GRAPHICS-02-1.jpg",
  "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/04/Rick-and-Morty-Quote-11-Cropped.jpg?q=50&fit=crop&w=630&dpr=1.5",
  "https://wallpaperaccess.com/full/3931789.png",
  "https://i.pinimg.com/736x/81/01/52/8101524ea9f96401480f98702b104b4c.jpg",
  "https://www.magicalquote.com/wp-content/uploads/2021/05/Youre-a-monster.-Youre-like-Hitler-but-even-Hitler-cared-about-Germany-or-something.jpg",
];

const Home = () => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    setQuote(Math.floor(Math.random() * images.length));
  });
  return <img 
  src={images[quote]} 
  className="img-fluid" />;
};

export default Home;
