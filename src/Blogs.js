import {Button, Form, Container, Row, Col, Card, Modal} from "react-bootstrap";
import { useState } from 'react';
import Axios from 'axios'
import { AdminNavigation, GuestNavigation } from "./Navigation";
import { Link, Outlet, useParams, Navigate } from "react-router-dom";

const BASE_URL = "https://sistech-api.vercel.app/"
const token = "c6408d71-e62b-45ac-be18-81bdb4444107"




export function CreateBlog(){

    const handleSubmit = async (event) => {
        event.preventDefault();
            const url = BASE_URL+'blog/'
            console.log(event);
            const data = {title:event.target[0].value, content:event.target[1].value}
            const config = { headers: {Authorization: 'Bearer ' + token} }
            Axios.post(url, data, config).then(res => {
                console.log(res)
          })
        }

    return(
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                    <Form.Text className="text-muted">
                        Judul Blog
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                    <Form.Text className="text-muted">
                        Konten Blog
                    </Form.Text>
                </Form.Group>


                <Button variant="primary" type="submit">
                    create blog
                </Button>
            </Form>
        </div>
    )

}

// export function EditBlog(){
//     const {id} = useParams();
//     console.log(id)
//     const url = BASE_URL+'blog/'

//     return(
//         <div>
//            <Navigate to="/blogs"/>
//         </div>
//     )

// }

export function ListBlog(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLike = (id) =>   Axios.post(url, {id:id}, config).then(res => {
      console.log(res)
})
  

    const [data, setData] = useState([]);
    const url = BASE_URL+'blog/'
    const config = { headers: {Authorization: 'Bearer ' + token} }
    Axios.get(url,config).then(res => {
                console.log(res)
                setData(res.data)
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        
            const url = BASE_URL+'blog/'
            console.log(event);
            const data = {title:event.target[0].value, content:event.target[1].value}
            const config = { headers: {Authorization: 'Bearer ' + token} }
            Axios.put(url, data, config).then(res => {
                console.log(res)
          })
        }


    const blogs = data.map((blog)=>  
    <div key={blog.id}>
        <Card>
            <Card.Body>
            <Card.Header as="h5"></Card.Header>
            <Card.Title className="text-dark">{blog.title}</Card.Title>
            <Card.Text className="text-dark">
                {blog.content}
            </Card.Text>
            <Button onClick={handleLike} variant="primary">{blog.like} Likes</Button>
            <Button onClick={handleShow} variant="primary">Edit</Button>
            </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                defaultValue={blog.title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control defaultValue={blog.content} as="textarea"/>
            </Form.Group>
            <Button variant="primary" type='submit'>
            Edit
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
     
        </Modal.Footer>
      </Modal>
    </div>  
  )

    return(
      
        <div> 
        {blogs}
    

        </div>

        
        

    
    )

    
        

}


export function Blog(){
    const getToken = localStorage.getItem("tokens");
    return(
      <div>
            { ( getToken == "" ) ? (
       <div>
        <GuestNavigation></GuestNavigation>
         <h1>WELCOME TO BLOG</h1>
         <div className="d-grid gap-2">

         <Button variant="secondary" size="lg">
             <Link to='/blogs/list'>List Blog</Link>
            </Button>
    </div>
       </div>):(
       <div>
        
        <AdminNavigation></AdminNavigation>
        <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
            <Link className="text-light" to='/blogs/create'>create Blog</Link>
            </Button>
            <Button variant="primary" size="lg">
            <Link className="text-light" to='/blogs/list'>List Blog</Link>
            </Button>
    </div>
      

       </div>
       )
       }
      </div>
     
       
          
     
         )
}
   



 

