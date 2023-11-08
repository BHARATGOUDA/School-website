import React, { useRef, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
const Home = () => {
  const images = [
    'https://th.bing.com/th/id/R.7bce4d8a43d23fc5ed5bce42109b8c59?rik=G7WCwJ0LUQzdXw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fLTK%2fqaz%2fLTKqazyTa.jpeg&ehk=QojVFSVnUpbcEFb2XO5dVxOOqqiQ3IBQyYtIqS0%2bGD0%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.J2AafpBYwRy8_GzezeELVwHaEe?pid=ImgDet&w=2048&h=1237&rs=1',
    'https://static.vecteezy.com/system/resources/previews/000/648/106/original/vector-students-playing-in-the-school-yard.jpg',
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = images.length;
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [totalImages]);
  return (
    <Carousel autoPlay={false} showStatus={false} showThumbs={false} selectedItem={currentImage}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};
export default Home;
