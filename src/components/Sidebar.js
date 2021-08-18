import React, {useEffect, useState} from 'react'
import Navigationbar from './Navigationbar'
import Searchbar from './Searchbar'
import { Nav, Container} from 'reactstrap';
import { firestore} from "../base";

function Sidebar() {
    const [catagories, setCatagories] = useState([]);

    
    useEffect(() => {
        const fetchCatagories = async () => {
            const imagesCollection = await firestore.collection("catagories").get();

            setCatagories(
              imagesCollection.docs.map((doc) => {
                return doc.data();
              })
            );
          };
          fetchCatagories();
        }, []);

         const unique = [...new Set(catagories.map(item => item.catagory))];
         console.log(unique);




    return (
        <Container className="sidebar">
            <Searchbar />
            <Nav className="nav" vertical >
      {unique.map((cat) => {
          return (
    
             
              <Navigationbar key={cat} catagory={cat} />
            
          );
        })}


        </Nav>
        </Container>
    )
}

export default Sidebar
