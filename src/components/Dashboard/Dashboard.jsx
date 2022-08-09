import Navbar from './Navbar';
import NavPage from './NavPage';
import Sidebar from './Sidebar';
import { Row, Col } from "react-bootstrap";

function TabsExample() {
    return (
        <>
            <div className='upper_section'>
                <Navbar />
            </div>

            <div className='lower_section'>
                <Row>
                    <Col xs={3} sm={2} >
                        <Sidebar />
                    </Col>
                    <Col xs={9} sm={10}>
                        <NavPage />
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default TabsExample;