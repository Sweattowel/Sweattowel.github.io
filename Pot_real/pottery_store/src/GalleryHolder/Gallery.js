import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import image4 from "./images/image4.jpg"
import image5 from "./images/image5.jpg"
import image6 from "./images/image6.jpg"
import image7 from "./images/image7.jpg"
import image8 from "./images/image8.jpg"
import './Gallery.css';
const imageArray = [
    image8,
    image7,
    image6,
    image5,
    image4,
    image3,
    image2,
    image1,
];

const imageTitle = [
    'image 8',
    'image 7',
    'image 6',
    'image 5',
    'image 4',
    'image 3',
    'image 2',
    'image 1',
];

const imageDesc = [
    'image 8 here',
    'image 7 here',
    'image 6 here',
    'image 5 here',
    'image 4 here',
    'image 3 here',
    'image 2 here',
    'image 1 here',
];



export function Gallery() {
    return (
        <div className="galleryContainer" >
            {imageArray.map((image, i) => (
                <div key={i} className="galleryImage">
                    <img src={image} alt={`source of ${i + 1} not found`}  />
                    <div className="textCenter">
                        <h4>{imageTitle[i]}</h4>
                        
                        {imageDesc[i]}
                    </div>
                </div>
            ))}
        </div>
    );
}