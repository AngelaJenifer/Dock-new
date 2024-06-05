<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> origin/main
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
<<<<<<< HEAD
    exportToExcel,
}) => {
    const [visible, setVisible] = useState(show);

    useEffect(() => {
        setVisible(show);
    }, [show]);

    const toggleShow = () => {
        setVisible(!visible);
        setAddSection(!visible);
=======
    
}) => {
    const [visible, setVisible] = useState(show);

    const toggleShow = () => {
        setVisible(!visible);
        if (!visible) setAddSection(false);
        
>>>>>>> origin/main
    };

    return (
        <>
<<<<<<< HEAD
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',paddingLeft:'50px' }}>
                <h2>TruckType List</h2>
                <Button
                    variant="primary"
                    onClick={toggleShow}
                    style={{ backgroundColor: '#7c5f87', marginLeft:'1130px' }} // Added margin to the right
                >
                    Add TruckType
                </Button>

                <Button
                        variant="secondary"
                        onClick={exportToExcel}
                        style={{ backgroundColor: '#7c5f87', marginRight:'20px' }}
                    >
                        Export to Excel
                    </Button>
            </div>
            <Offcanvas
                show={visible}
                onHide={toggleShow}
                style={{ width: "80%" }}
            >
=======
        
                
        <div>
        <h1>TruckType List</h1>
        <div style={{paddingLeft: "1500px"}}>
                    
            <Button variant="primary" onClick={toggleShow} style={{ backgroundColor: '#7c5f87' }}>
                Add TruckType
            </Button>
            </div>
            </div>
            <Offcanvas show={visible || show} onHide={toggleShow} style={{ width: "80%" }} setVisible={setVisible} >
>>>>>>> origin/main
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
<<<<<<< HEAD

=======
                               
                                
>>>>>>> origin/main
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
<<<<<<< HEAD
                                <FormGroup>
=======
                            <FormGroup>
>>>>>>> origin/main
                                    <Label for="truckcode">Country</Label>
                                    <Input
                                        id="truckcode"
                                        name="truckcode"
                                        type="text"
                                        value={editSection ? formDataEdit.truckcode : formData.truckcode}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>

<<<<<<< HEAD
                                <Button
                                    type="submit"
                                    style={{ marginTop: '15px', backgroundColor: '#7c5f87' }}
                                >
                                    {editSection ? "Update Truck" : "Add Truck"}
                                </Button>
                            </Col>
=======
                                <Button type="submit" style={{ marginTop: '15px', backgroundColor: '#7c5f87' }}>
                                    {editSection ? "Update Truck" : "Add Truck"}
                                </Button>
                            </Col>
                           
>>>>>>> origin/main
                        </Row>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

<<<<<<< HEAD
export default TruckCanvas;
=======
export default TruckCanvas;
>>>>>>> origin/main
