import React from 'react';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';

const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
]

const ImageGallery = () => {
    return (
        <div>
            {imageArray.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} />
             ))}
        </div>
    )
}

export default ImageGallery