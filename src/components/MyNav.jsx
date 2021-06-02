import {Component} from 'react'
import {Nav,Navbar,NavDropdown , Form, FormControl, Button} from 'react-bootstrap'

class MyNav extends Component {
    state = { 
        query: ""
     }
    render() { 
        return (
            <Navbar  className="p-5"  bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#">Book Slayers</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                   
                    </Nav>
                    <Form className="d-flex ms-auto">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="ml-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
          );
    }
}
 
export default MyNav;