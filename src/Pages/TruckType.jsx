import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import Nav from '../Components/UI/Nav';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';
import axios from 'axios';
import TruckCanvas from './canvas/TruckCanvas';

const TruckType = () => {
    const [tableData, setTableData] = useState([]);
    const [addSection, setAddSection] = useState(false);
    const [editSection, setEditSection] = useState(false);
    const [formData, setFormData] = useState({
        truckname: "",
        truckcode: "",
        
    });
    const [formDataEdit, setFormDataEdit] = useState({
        truckname: "",
        truckcode: "",
    });

    const columnDefs = [
        { headerName: 'Truck Name', field: 'truckname' },
        { headerName: 'Truck Code', field: 'truckcode' },
        
        { headerName: 'Active', field: 'Active' },
        {
            headerName: 'Edit',
            field: '',
            cellRenderer: (params) => (
                <div style={{ display: 'inline-block', marginRight: "25px" }}>
                    <EditIcon onClick={() => handleEdit(params.data)} />
                </div>
            )
        },
        {
            headerName: 'Delete', field: 'delete',
            cellRenderer: (params) => (
                <div style={{ display: 'inline-block' }}>
                    <DeleteIcon onClick={() => handleDelete(params.data._id)} />
                </div>
            )
        },
    ];

    const defaultColDef = {
        sortable: true, filter: true, editable: true, flex: 1
    };

    const getFetchData = async () => {
        const response = await axios.get("http://localhost:5000/trucks");
        if (response.data.success) {
            setTableData(response.data.data);
        }
    };

    useEffect(() => {
        getFetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:5000/createtruck", formData);
        if (response.data.success) {
            
            alert(response.data.message);
            getFetchData();
            setFormData({
                truckname: "",
        truckcode: "",
            });
            setAddSection(false);
        }
    };

    const handleDelete = async (id) => {
      try {
          console.log("Deleting:", id);
          const response = await axios.delete(`http://localhost:5000/deletetruck/${id}`);
          if (response.data.success) {
              // Update tableData state to reflect the changes
              setTableData(prevData => prevData.filter(item => item._id !== id));
              alert(response.data.message);
          } else {
              alert("Failed to delete company"+ response.data.message);
          }
      } catch (error) {
          console.error("Error deleting company:", error);
          alert("An error occurred while deleting the company");
      }
  };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const response = await axios.put("http://localhost:5000/updatetruck", formDataEdit);
        if (response.data.success) {
            getFetchData();
            alert(response.data.message);
            setEditSection(false);
        }
    };

    
    const handleEdit = (data) => {
      console.log("Editing:", data)
      
        setFormDataEdit(data);
        setEditSection(true);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEditOnChange = (e) => {
        const { name, value } = e.target;
        setFormDataEdit(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <>
            <Nav />
            <Grid>
                <TruckCanvas
                    show={addSection || editSection}
                    setAddSection={setAddSection}
                    handleSubmit={handleSubmit}
                    handleOnChange={handleOnChange}
                    formData={formData}
                    editSection={editSection}
                    handleEditOnChange={handleEditOnChange}
                    handleUpdate={handleUpdate}
                    formDataEdit={formDataEdit}
                   
                />
            </Grid>
            <div style={{ paddingLeft: "50px" }}>
                
                <hr style={{ width: '93vw', border: '1px solid black' }} />
                <div className='d-flex vh-30 justify-content-center align-items-center'>
                    <div className='w-100 bg-white rounded p-3'>
                        <div className="ag-theme-quartz" style={{ height: 400, width: '100%' }}>
                            <AgGridReact
                                columnDefs={columnDefs}
                                defaultColDef={defaultColDef}
                                rowData={tableData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TruckType;
