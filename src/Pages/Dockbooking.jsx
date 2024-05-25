import React, { useState } from 'react';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from 'ag-grid-react';
import Nav from '../Components/UI/Nav';

const DockBooking = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [bookingNo, setBookingNo] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "select" },
    { field: "Booking No." },
    { field: " Dock Booking Status." },
    { field: "Reject" },
    { field: "Order Type" },
    { field: "Commodity Type" },
    { field: "Location Name" },
    { field: "Dock Name" },
    { field: "Dock-in-out" },
    { field: "Cust/Tenant/Cons Name" },
    { field: "Truck Type" },
    { field: "Truck No." },
    { field: "Driver 1" },
    { field: "Order Remark" },
    { field: "Transporter Remark" },
    { field: "Edit" },
  ]);
    // Function to handle search action
    const handleSearch = () => {
        

        // Reset current page to 1 when performing a new search
        setCurrentPage(1);
        // Perform data fetching or filtering logic based on search criteria
        // This is just a placeholder for actual search logic.
    };

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Implement logic to fetch data for the new page
    };

    return (
        <>
        <Nav />
        <div style={{paddingLeft: "50px"}}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{paddingTop: "20px"}}>
                    <h1>Dock Booking List</h1>
                </div>
                <div style={{paddingRight: "50px"}}>
                    <button type="button" className="btn btn-primary" style={{ backgroundColor: '#7c5f87' }} onClick={handleSearch}>Add Dock Booking</button>
                </div>
            </div>
            <hr style={{ width: '93vw', border: '1px solid black' }} />


            <div>
                <h2>Search Booking</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', alignItems: 'center' }}>
                <div>
                    <p>Location Name :</p>
                    <select id="dropdown">
                        <option value="text" aria-placeholder='select'>--Select--</option>
                        <option value="text">Setia City Mall</option>
                        <option value="text">SLB ETHANOL Warehouse</option>
                        <option value="text">Flipkartchn</option>
                        <option value="text">Locationd</option>
                        
                    </select>
                </div>

                <div>
                    <p>From Date :</p>
                    <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </div>

                <div>
                    <p>To Date :</p>
                    <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </div>

                <div>
                    <p>Cust/Tenant/Cons :</p>
                    <select id="dropdown">
                        <option value="text" aria-placeholder='select'>--Select--</option>
                        <option value="text">KFC</option>
                        <option value="text">Arrow</option>
                        <option value="text">MAC-KD</option>
                        <option value="text">DSAT</option>
                        <option value="text">Lulu Supermarket</option>
                        <option value="text">Guardian</option>
                        <option value="text">Dzi kingdom</option>
                        <option value="text">D'Nature</option>
                        <option value="text">NOG Eyewear</option>
                        <option value="text">LA Watch</option>
                        <option value="text">Ahh-Yum By Kampung Kravers</option>
                        <option value="text">Union Cafe</option>
                        <option value="text">CDLC</option>
                        <option value="text">Dunkin Cafe</option>
                        <option value="text">The whale Tea</option>
                        <option value="text">MyLaksa</option>
                        <option value="text">Sup Haji Abu</option>
                        <option value="text">Stuff'D</option>
                        <option value="text">Chun Yang</option>
                        <option value="text">Black Canyon</option>
                        <option value="text">Dubuyo</option>
                        <option value="text">Sepiring</option>
                        <option value="text">Saranghea</option>
                        <option value="text">Hot & Roll</option>
                        <option value="text">Vennilla Mill Crepe</option>
                        <option value="text">Tong Garden</option>
                        <option value="text">CRYO Cloud Ice Cream</option>
                        <option value="text">Dolly Dim Sum</option>
                        <option value="text">Sukiya Gyudon</option>
                        <option value="text">Santan</option>
                        <option value="text">Texas Chicken</option>
                        <option value="text">Issen Hin Ramen</option>
                        <option value="text">Lucky Mala</option>
                        <option value="text">Koi Tea</option>
                        <option value="text">Ichiba Ramen</option>
                        <option value="text">Burger King</option>
                        <option value="text">Lulu Department store</option>
                        <option value="text">Brands Outlet</option>
                        <option value="text">Button Carves</option>
                        <option value="text">Watsons</option>
                        <option value="text">A-Wow-Me</option>
                        <option value="text">Eye Font</option>
                        <option value="text">Naelofar</option>
                        <option value="text">Innisfree</option>
                        <option value="text">Vincci</option>
                        <option value="text">Wacoal</option>
                        <option value="text">LC Waikiki</option>
                    </select>
                </div>
               
                <div style={{paddingTop: "15px"}}> 
                    <p>Dock-IN-OUT Date :</p>
                    <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)}  />
                    
                    <button type="button" className="btn btn-primary" style={{ backgroundColor: '#6d9ce8' }} onClick={handleSearch}>Search</button>
                    
                </div>

                <div style={{paddingTop: "15px"}}>
                    <p>Action :</p>
                    <select id="dropdown">
                        <option value="text" aria-placeholder='select'>--Select--</option>
                        <option value="text">Approved</option>
                        <option value="text">Rejected</option>
                        </select>

                        <button type="button" className="btn btn-primary" style={{ backgroundColor: '#6d9ce8' }} onClick={handleSearch}>Update</button>

                </div>
              </div>


                <br/>

           {/* ag grid starts from here */}
               <div className='ag-theme-quartz' style={{ height:"100vh" , width:'92vw'}}>
                <AgGridReact 
                rowData={rowData} 
                columnDefs={colDefs}
                pagination = {true}
                 domLayout='autoHeight' // Adjust the layout to fit content automatically
                 defaultColDef={{ flex: 1 }} // Set all columns to have flexible width
                />
               </div>
               </div>
        </>
    );
}

export default DockBooking;