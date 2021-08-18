import React, {useState, useEffect } from "react";
import { firestore } from "../../../base";
import Card from '../../ImageCard'

function CardView() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
          const imagesCollection = await firestore.collection("images").get();
          setImages(
            imagesCollection.docs.map((doc) => {
              return doc.data();
            })
          );
        };
        fetchImages();
      }, []);




    return (
        <div className="card-container">
           
                
        {images.map((image) => {
          return (
            
             
              <Card key= {image.id} src={image.imageFile}
               name={image.name} catagory={image.catagory} />
            
          );
        })}
      
        </div>
    )
}

export default CardView
