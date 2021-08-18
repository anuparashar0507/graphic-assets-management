import React, {useState} from 'react'
import { Button, Navbar,  Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
//  import UploadContainer from './upload/UploadContainer';
import Upload from './upload/Upload'
function Header() {
    const [modal, setModal] = useState(false);
    const toggle = () => {
       setModal(!modal);
    }
    return (
        <>
        <Navbar color="dark" light expand="md" className="Header">
             <div className="brand">EWAR ASSETS</div>
                <Button className="upload-button"  onClick={toggle}>Upload</Button>
        </Navbar>

        <Modal isOpen={modal} toggle={toggle} className="uploadModal">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
       <Upload toggle={toggle} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>
        </ModalFooter>
      </Modal>
    </>
    )
}

export default Header

