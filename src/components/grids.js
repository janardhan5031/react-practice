
import {  Stack, Col, Row, Button, Container } from 'react-bootstrap';

import '../App.css'

const Grid = () => {
    return (
        <Container className='mt-4' >
        {/* <Row >
            <Col xs={3} lg={4}>
                <div className='box'></div>
            </Col>
            <Col xs={4 } lg={5}>
                <div className='box'></div>
            </Col>
            <Col>
                <div className='box'></div>
            </Col>
            
        </Row> */}
            
        {/* <Row xs={2} md={4} gap={5} className={ 'mb-3' }>
            <Col ><div className='box'></div></Col>
            <Col md={6} ><div className='box'></div></Col>
        </Row>
        <Row xs={2} md={4} gap={5} >
            <Col ><div className='box'></div></Col>
            <Col md={6} ><div className='box'></div></Col>
        </Row> */}
            
        <Stack gap={3}>
            <div className="bg-light border">First item</div>
            <div className="bg-light border">Second item</div>
            <div className="bg-light border">Third item</div>
        </Stack>
      
    </Container>
    )       
}

export default Grid;