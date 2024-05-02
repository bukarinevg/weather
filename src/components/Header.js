import { Navbar, Form, FormControl, Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

function Header({location, setLocation}){
    const [input, setInput] = useState(location);
    const [debouncedInput] = useDebounce(input, 1000);

    useEffect(() => {
        if(debouncedInput){
            setLocation(debouncedInput );
        }
    }, [debouncedInput, setLocation]);

    
    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLocation(input);
    }

    
    return (
        <Navbar variant="dark">
            <Container className="d-flex justify-content-between align-items-center">
                <Navbar.Brand href="/weather">Weather</Navbar.Brand>
                <Form className="d-flex justify-content-right" onSubmit={handleSubmit}>
                    <FormControl 
                        value={input }
                        type="text" 
                        placeholder="Search location..." 
                        onChange={handleInputChange} 
                    />
                    {/* <Button className='ms-2 btn ' variant="outline-info" type="submit">Search</Button> */}
                </Form>
            </Container>
        </Navbar>
    );
}

export default Header;