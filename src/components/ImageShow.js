import  React from 'react';
import ReactDOM from 'react-dom';
import { View, SafeAreaView, Image } from 'react-native';

function ImageShow(props) {

    const images = ["../../assets/images/logo1.png",
     "../../assets/images/logo2.png", 
     "../../assets/images/logo3.png"];
    const [currentImage, setCurrentImage] = React.useState(0);

    const switchImage = () => {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage + 1);
        } else {
            setCurrentImage(currentImage = 0);
        }
        return currentImage;
    }
    const componentDidMount = () => {
        setInterval(switchImage, 2000);
    }
    return (
        <div>
            <img
                src={images[currentImage]}
                alt="cleaning images"
            />
        </div>
    );
   
}

ReactDOM.render(<ImageShow />, document.getElementById("root"));


export default ImageShow;