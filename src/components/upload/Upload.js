import React, {useState, useEffect} from "react";
import { firestore, storageRef } from "../../base";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import ImageCard from "../ImageCard";
// import axios from 'axios';
 import {Progress} from 'reactstrap';
 import { ToastContainer, toast} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

// const db = app.firestore();
function guidGenerator() {
    const S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());

}
function Upload(toggle) {
  const [fileUrl, setFileUrl] = useState("");
  //const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(0);
  const [fileName, setFileName] = useState("");
  const [catagory, setCatagory] = useState("");

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const uploadFile = storageRef.ref();
    const fileRef = uploadFile.child(file.name)
    
    await fileRef.put(file).on('state_changed', 
    (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setLoaded(progress);
      console.log('Upload is ' + progress + '% done');
     
    }, 
    (error) => {
        toast.error('upload fail')
    }, 
    () => {
        toast.success('upload success')
        
  //setFileUrl(fileRef.getDownloadURL())
   
    }
  );
    
  setFileUrl(await fileRef.getDownloadURL())
  console.log("uploaded", fileRef.getDownloadURL());
     };
  
   
  const onSubmit = async (e) => {
    e.preventDefault();
   // console.log(fileUrl);

    if (!fileName || !fileUrl || !catagory) {
      //  setFileUrl("");
        toast.error('upload fail')
      return ;
    }
    const uniId = guidGenerator().toString();
   
    await firestore.collection("catagories").doc(uniId).set({
        catagory: catagory,
        id: uniId,
    })

    await firestore.collection("images").doc(uniId).set({
      name: fileName,
      id: uniId,
      catagory: catagory,
      imageFile: fileUrl,
    })

    console.log("uploaded to db");
  };

  const [catagories, setCatagories] = useState([]);

   const onCreate = async (e) => {
    const uniId = guidGenerator().toString();
    await firestore.collection("catagories").doc(uniId).set({
        catagory: catagory,
        id: uniId,
    })

    console.log("catagory Created");

   }
    
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
    <>
    
    <Form >
    <FormGroup>
        <Label for="Select">Choose a collection</Label>
        <Input type="select" name="select" id="Select" onChange={e => setCatagory(e.target.value)}>
        {unique.map((cat) => {
          return (
    
          <option>{cat}</option>
          );
        })}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="catagory">Or Create a new collection </Label>
        <Input type="text" name = "catagory" id="catagory" value={catagory} onChange={e => setCatagory(e.target.value)}/>
        <Button  onClick={onCreate} >Create</Button>
      </FormGroup> 
     
      <FormGroup>
        <Label for="fileName">File Name</Label>
        <Input type="text" name="name" id="name" value={fileName} onChange={e => setFileName(e.target.value)}/>
      </FormGroup>
     
    
      <FormGroup>
        <Label for="file">Upload Your File </Label>
        <Input type="file" name="file" id="file" onChange={onFileChange}/>
      </FormGroup>
      <Button onClick={onSubmit} onSubmit = {toggle} >Submit</Button>
    </Form>
                 
              
              <Progress max="100" color="success" value={loaded} >{Math.round(loaded,2) }%</Progress>
              <ToastContainer />
         
<ImageCard src= {fileUrl} name= {fileName} catagory={catagory}/>
    </>
  );
}

export default Upload;