import React, {useState, useEffect } from "react";
import { firestore } from "../base";
import Card from './ImageCard'
// import Navigationbar from './Navigationbar'
import Searchbar from './Searchbar'
import { Nav, Container,  NavItem, NavLink} from 'reactstrap';

function ContainerView() {
    const [images, setImages] = useState([]);
    const [items, setItems] = useState([]);
    
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



  
           const unique = [...new Set(images.map(item => item.catagory))];
           console.log(unique);
           const styles = {

            contentMargin: {
              marginLeft: "10px",
              width: "100%",
            },
          };

          const filterItem = (categItem) => {
            const updatedItems = images.filter((curElem) => {
               return curElem.catagory === categItem;
            });
    
            console.log(updatedItems);
            setItems(updatedItems);
        }
  
    return (
      <>
      <div className="contentDiv">
   <Container className="sidebar">
            <Searchbar />
            <Nav tabs className="nav" vertical >
      {unique.map((cat) => {
          return (
          <NavItem className="catagories" key={cat}>
          <NavLink className="catagory" onClick = {() => filterItem(cat)} >{cat}</NavLink>
          </NavItem>
          );
        })}
        </Nav>
        </Container>  
        <div style={styles.contentMargin}>
        <div className="card-container">      
        {items.map((image) => {
          return (
              <Card key= {image.id} src={image.imageFile} name={image.name} catagory={image.catagory} />
          );
        })}
        </div>
        </div>
        </div>
        </>
    )
}

export default ContainerView
