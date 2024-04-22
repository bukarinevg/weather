import { Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import { useState } from 'react';
function Header({setLocation}){

    const [input, setInput] = useState('');
    
    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setLocation(input);
    }
    
    return (
        <Navbar variant="dark">
            <Container className="d-flex justify-content-between align-items-center">
                <Navbar.Brand href="/">Weather</Navbar.Brand>
                <Form className="d-flex justify-content-right"  onSubmit={handleFormSubmit}>
                    <FormControl type="text" placeholder="Search location..." className="" onChange={handleInputChange} />
                    <Button className='ms-2 btn ' variant="outline-info" type="submit">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default Header;