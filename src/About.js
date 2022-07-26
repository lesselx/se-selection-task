    import React from 'react'
    import './About.css';
    import { Container, Image, ListGroup, Badge } from 'react-bootstrap';
    import foto from './foto.jpg'
    import { GuestNavigation, AdminNavigation } from './Navigation';

    function About() {
      const getToken = localStorage.getItem("tokens");
      return (  
        <div>
          { (getToken == "2b2ed488-bec6-40b1-8223-21841e3c40b8") ? (
            <div>
          <AdminNavigation></AdminNavigation>
       
         </div>
):
( <div>
        <GuestNavigation></GuestNavigation>
</div>
    )
          }

<div className="header">
          <p>Personal Information</p>
          <div className='container'>
          <div className="row">
            <div className="col">
           
            </div>
            <div className="col-5">
              <Container className='center-header'>
                  <Image className="border border-primary border border-5"roundedCircle height={200} src={foto}></Image>
                  <p>My name is Agnes Audya Tiara P</p>
              </Container>
      
            </div>
   
            <div className="col">
             
            </div>
          </div>
          </div>
        

          </div>

          <div className="content">

            <div className="biodata">


            <div className='container'>
            <div className="row">
                <div className="col">
              
                </div>

                <div className="col">
                  <div className='isi-biodata'>
                  <p>Biodata</p>

                <form>
                <div className="bawah form-group row">
                  <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="text" readonly class="rounded bg-light text-dark form-control-plaintext" id="staticEmail" value="agnes.audya.tp@gmail.com"/>
                  </div>
                </div>
                <div className="bawah form-group row">
                  <label for="staticTelp" className="col-sm-2 col-form-label">No HP</label>
                  <div className="col-sm-10">
                    <input type="text" readonly class="rounded bg-light text-dark form-control-plaintext" id="staticTelp" value="081310251293"/>
                  </div>
                </div>
                </form>
              
              
                  </div>
                </div>
  
                <div className="col">
                  
                </div>

                
            </div>

            <div className="row">
             
              <div className="col">

              Achievement

              <Achievement></Achievement>
                  
              </div>

              <div className="col">

                Experience

                <Pengalaman></Pengalaman>

              </div>

            </div>

            </div> 

            


             
            </div>

          
          



          </div>

        </div>
        
      )
    }


    function Pengalaman() {
      return (
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2">
              <div className="fw-bold">Perak</div>
              Staff of Family Games
            </div>
            <Badge bg="primary" pill>
              2021
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2">
              <div className="text-left fw-bold">Compfest 13</div>
              Staff of EDM
            </div>
            <Badge bg="primary" pill>
              2021
            </Badge>
          </ListGroup.Item>
         
        </ListGroup>
      );
    }

    function Achievement() {
      return (
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2">
              <div className="fw-bold">Edufair</div>
              Juara 1 Lomba Puisi
            </div>
            <Badge bg="primary" pill>
              2017
            </Badge>
          </ListGroup.Item>
    
         
        </ListGroup>
      );
    }
    
    export default About