import React, {useState, useEffect } from "react";
import { firestore } from "../base";
import {  NavItem, NavLink} from 'reactstrap'
import CardView from './upload/unused/CardView';
// import CardView from './CardView'

function Navigationbar(props) {

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

    const filterItem = (categItem) => {

        if(!categItem){
            const Items = images.map((curElem) => {
                return curElem.catagory;
             });
         
             console.log(Items);
             return <CardView items = {Items}/>
      
        }
            else{
        const updatedItems = images.filter((curElem) => {
           return curElem.catagory === categItem;
        });
    
        console.log(updatedItems);
        return <CardView items = {updatedItems}/>
    }
    }
    return (
    <>
          <NavItem className="catagories" >
            <NavLink className="catagory" onClick = {() => filterItem(props.catagory)} >{props.catagory}</NavLink>
            </NavItem>
    </>     
    )
}

export default Navigationbar
