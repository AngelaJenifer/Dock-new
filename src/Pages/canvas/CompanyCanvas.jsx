import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const CompanyCanvas = ({
    show,
    setAddSection,
    handleSubmit,
    handleOnChange,
    formData,
    editSection,
    handleEditOnChange,
    handleUpdate,
    formDataEdit,
    setShowCanvas,
    
}) => {
    const [visible, setVisible] = useState(show);

    const toggleShow = () => {
        setVisible(!visible);
        if (!visible)
         setAddSection(false);
        
        
    };

    return (
        <>
        
                
        <div>
        <h1>Company List</h1>
        <div style={{paddingLeft: "1500px"}}>
                    
            <Button variant="primary" onClick={toggleShow} style={{ backgroundColor: '#7c5f87' }}>
                Add Company List
            </Button>
            </div>
            </div>
            <Offcanvas show={visible || show} onHide={toggleShow} style={{ width: "80%" }} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        {editSection ? "Edit Company" : "Add Company"}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                <Form onSubmit={editSection ? handleUpdate : handleSubmit}>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="Cname">Company Name *</Label>
                                    <Input
                                        id="Cname"
                                        name="Cname"
                                        type="text"
                                        value={editSection ? formDataEdit.Cname : formData.Cname}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="country">Country</Label>
                                    <Input
                                        id="country"
                                        name="country"
                                        type="text"
                                        value={editSection ? formDataEdit.country : formData.country}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="subdistrict">Sub-District</Label>
                                    <Input
                                        id="subdistrict"
                                        name="subdistrict"
                                        type="text"
                                        value={editSection ? formDataEdit.subdistrict : formData.subdistrict}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="cperson">Contact Person</Label>
                                    <Input
                                        id="cperson"
                                        name="cperson"
                                        type="text"
                                        value={editSection ? formDataEdit.cperson : formData.cperson}
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
                                    <Label for="Ccode">Company Code</Label>
                                    <Input
                                        id="Ccode"
                                        name="Ccode"
                                        type="text"
                                        value={editSection ? formDataEdit.Ccode : formData.Ccode}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="province">Province</Label>
                                    <Input
                                        id="province"
                                        name="province"
                                        type="text"
                                        value={editSection ? formDataEdit.province : formData.province}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="taxid">Tax ID</Label>
                                    <Input
                                        id="taxid"
                                        name="taxid"
                                        type="text"
                                        value={editSection ? formDataEdit.taxid : formData.taxid}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        value={editSection ? formDataEdit.phone : formData.phone}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <Input
                                        id="city"
                                        name="city"
                                        type="text"
                                        value={editSection ? formDataEdit.city : formData.city}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="district">District</Label>
                                    <Input
                                        id="district"
                                        name="district"
                                        type="text"
                                        value={editSection ? formDataEdit.district : formData.district}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={editSection ? formDataEdit.email : formData.email}
                                        onChange={editSection ? handleEditOnChange : handleOnChange}
                                    />
                                </FormGroup>
                                <Button type="submit" style={{ marginTop: '15px', backgroundColor: '#7c5f87' }}>
                                    {editSection ? "Update Company" : "Add Company"}
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default CompanyCanvas;
