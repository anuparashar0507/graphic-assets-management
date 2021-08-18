import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
 import Header from './components/Header';
//  import Sidebar from './components/Sidebar';
 import Footer from './components/Footer';
 import { Col, Row } from "reactstrap";
//  import CardView from './components/CardView'; 
import ContainerView from './components/ContainerView';
 //import UploadContainer from './components/upload/UploadContainer';

function App() {
  // const styles = {

  //   contentMargin: {
  //     marginLeft: "10px",
  //     width: "100%",
  //   },
  // };
  return (
    <div className="App">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      {/* <div className="contentDiv">
      <Sidebar />
        <div style={styles.contentMargin}>
        <CardView />
        </div>
      </div> */}
      <ContainerView />
      <Row>
        <Col>
        
        <Footer />
        </Col>
      </Row>
    </div>
  );
}

export default App;
