import React, {useState} from 'react'
import { Card, CardImg,  CardBody,
    CardTitle,  CardSubtitle, Modal, ModalHeader, ModalBody} from 'reactstrap'
import CardModal from './CardModal';

// const sharp = require('sharp');
function ImageCard(props) {

    // const handleClick = async (e) =>{
    //     sharp(props.src)
    //     .resize(200, 300, {
    //       kernel: sharp.kernel.nearest,
    //       fit: 'contain',
    //       background: { r: 255, g: 255, b: 255, alpha: 0.5 }
    //     })
    //     .toFile('output.png')
    //     .then(() => {
    //       // output.png is a 200 pixels wide and 300 pixels high image
    //       // containing a nearest-neighbour scaled version
    //       // contained within the north-east corner of a semi-transparent white canvas
    //     });  
    // } 
    const [modal, setModal] = useState(false);
    const toggle = () => {
       setModal(!modal);
    }
    
    return (
        <>
      <Card  className="card">
      
        <CardBody>
        <CardImg top onClick={toggle} src={props.src} alt="Card image cap" className="card-img" />
          <CardTitle className="card-title" tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted card-subtitle">{props.catagory}</CardSubtitle>
        {/* <Form  className = "input-size">
          <FormGroup  className = "input-width">
        <Label for="width">W</Label>
        <Input type="text" name="width" id="width" value={Width} onChange={e => setWidth(e.target.value)}/>
        </FormGroup>
        <span className = "astric"><strong>*</strong></span>
        <FormGroup className = "input-height">
        <Label for="input-height">H</Label>
        <Input type="text"  name="height" id="height" value={Height} onChange={e => setHeight(e.target.value)}/>
      </FormGroup>
      </Form>
          <ButtonGroup className = "card-buttons">
                <Button  className="card-button"><i className ="mdi mdi-download"/>PNG</Button>
                <Button className="card-button"><i className ="mdi mdi-download"/>JPG</Button>

          </ButtonGroup> */}
         </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={toggle} className="uploadModal">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <CardModal src = {props.src} toggle = {toggle} name = {props.name} catagory = {props.catagory} />

        </ModalBody>
      </Modal>
        </>
    )
}

export default ImageCard
