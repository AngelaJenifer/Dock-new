import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const TruckCanvas = ({
    show,
    setAddSection,
    handleSubmit,
    handleOnChange,
    formData,
    editSection,
    handleEditOnChange,
    handleUpdate,
    formDataEdit,
    
}) => {
    const [visible, setVisible] = useState(show);

    const toggleShow = () => {
        setVisible(!visible);
        if (!visible) setAddSection(false);
        
    };

    return (
        <>
        
                
        <div>
        <h1>TruckType List</h1>
        <div style={{paddingLeft: "1500px"}}>
                    
            <Button variant="primary" onClick={toggleShow} style={{ backgroundColor: '#7c5f87' }}>
                Add TruckType
            </Button>
            </div>
            </div>
            <Offcanvas show={visible || show} onHide={toggleShow} style={{ width: "80%" }} setVisible={setVisible} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        {editSection ? "Edit Truck" : "Add Truck"}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                    <Form onSubmit={editSection ? handleUpdate : handleSubmit}>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="truckname">Truck Name *</Label>
                                    <Input
                                        id="truckname"
                                        name="truckname"
                                        type="text"
                                        value={editSection ? formDataEdit.truckname : formData.truckname}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>
                               
                                
                                <FormGroup check>
                                    <Label check>
                                        <Input
                                            type="checkbox"
                                            name="Active"
                                            checked={editSection ? formDataEdit.Active : formData.Active}
                                            onChange={editSection ? handleEditOnChange : handleOnChange}
                                        />
                                        Active
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                            <FormGroup>
                                    <Label for="truckcode">Country</Label>
                                    <Input
                                        id="truckcode"
                                        name="truckcode"
                                        type="text"
                                        value={editSection ? formDataEdit.truckcode : formData.truckcode}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>

                                <Button type="submit" style={{ marginTop: '15px', backgroundColor: '#7c5f87' }}>
                                    {editSection ? "Update Truck" : "Add Truck"}
                                </Button>
                            </Col>
                           
                        </Row>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default TruckCanvas;
