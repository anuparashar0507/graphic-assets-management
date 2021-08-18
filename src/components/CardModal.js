import React, {useState} from 'react'
import { Card, CardImg,  CardBody,
    CardTitle,  Button, ButtonGroup, CardSubtitle, FormGroup, Label, Input, Form} from 'reactstrap'

function CardModal(props) {

    
    const [Width, setWidth] = useState(0);
    const [Height, setHeight] = useState(0);

    function getMeta(url, callback) {
        var img = new Image();
        img.src = url;
        img.onload = function() { callback(this.width, this.height); }
    }

    getMeta(
        props.src,
        function(w, h) { 
         
            setWidth(w);
             setHeight(h);
            // console.log(width + 'px ' + height + 'px')
         }
      );
    return (
        <Card  className="card-modal">
      
        <CardBody>
        <CardImg top onClick={props.toggle} src={props.src} alt="Card image cap" className="card-modal-img" />
          <CardTitle className="card-title" tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted card-subtitle">{props.catagory}</CardSubtitle>
        <Form  className = "input-modal-size">
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
  
          </ButtonGroup>
         </CardBody>
      </Card>
    )
}

export default CardModal
