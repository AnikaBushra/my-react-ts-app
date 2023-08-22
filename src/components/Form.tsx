import { TextField, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(0)
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
        console.log(name);
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
        console.log(email);
    }
    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const phoneNumb = parseInt(event.target.value)
        setPhone(phoneNumb)
        console.log(phone);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newUser = { name, email, phone }
        console.log(newUser);
    }
    return (
        <div>
            <Container maxWidth="sm">
                <Typography variant="h4" align="center" gutterBottom>
                    My Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Your Name"
                        name="name"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                    <TextField
                        label="Phone"
                        name="phone"
                        type='number'
                        fullWidth
                        margin="normal"
                        onChange={handlePhoneChange}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default Form;