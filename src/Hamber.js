import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Offcanvas,DropdownButton,Dropdown, Card }from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <img   onClick={handleShow}>
        Launch
      </img> */}
      <img src='https://cdn2.iconfinder.com/data/icons/simple-circular-icons-filled/78/Hamburger_Menu_Filled-512.png' height={60} className='hamber ' onClick={handleShow}   />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <h3> Locality Region</h3> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='position'>
        <div >
        <DropdownButton id="dropdown-basic-button" title="Vijayawada - Krishna District  - Andhra Pradesh...." className='card-side'>
              <Dropdown.Item  >jhjhmjkihk,</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
          </DropdownButton><br/>
          <DropdownButton id="dropdown-basic-button" title="  Guntur  - Guntur  District - Andhra Pradesh.............">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton><br></br>
          <DropdownButton id="dropdown-basic-button" title="Bhimavaram-W.Godavari District-AndhraPradesh" className='card-side'>
              <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton><br/>
          <DropdownButton id="dropdown-basic-button" title="Eluru - West Godavari District  - Andhra Pradesh.." className='card-side'>
              <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton><br/>
          <DropdownButton id="dropdown-basic-button" title="Gudivada - Krishna District - Andhra Pradesh......." className='card-side'>
              <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton><br/>
          <DropdownButton id="dropdown-basic-button" title="Machilipatnam - KrishnaDistrict  - AndhraPradesh" className='card-side'>
              <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton><br/>
          <DropdownButton id="dropdown-basic-button" title="Gudem -  WestGodavari District  - AndhraPradesh" className='card-side'>
              <Dropdown.Item href="#/action-1" >Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton><br/>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;