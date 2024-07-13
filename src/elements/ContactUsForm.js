import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography, MenuItem, FormControlLabel, Checkbox } from '@mui/material';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        city: '',
        zipCode: '',
        state: '',
        country: '',
        occupation: '',
        information: '',
        support: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/contact-us', formData)
            .then(response => alert('Message sent successfully'))
            .catch(error => alert('Error sending message'));
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 0, mr: 10, ml: 10}}>
            <TextField
                fullWidth
                margin="normal"
                name="firstName"
                label="First Name"
                variant="outlined"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            <TextField
                fullWidth
                margin="normal"
                name="lastName"
                label="Last Name"
                variant="outlined"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            <TextField
                fullWidth
                margin="normal"
                name="companyName"
                label="Company Name"
                variant="outlined"
                value={formData.companyName}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                margin="normal"
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <TextField
                fullWidth
                margin="normal"
                name="phoneNumber"
                label="Phone Number"
                variant="outlined"
                value={formData.phoneNumber}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                margin="normal"
                name="city"
                label="City"
                variant="outlined"
                value={formData.city}
                onChange={handleChange}
                required
            />
            <TextField
                fullWidth
                margin="normal"
                name="zipCode"
                label="ZIP Code"
                variant="outlined"
                value={formData.zipCode}
                onChange={handleChange}
                required
            />
            <TextField
                fullWidth
                margin="normal"
                name="state"
                label="State"
                variant="outlined"
                value={formData.state}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                margin="normal"
                name="country"
                label="Country"
                variant="outlined"
                value={formData.country}
                onChange={handleChange}
                required
            />
            <TextField
                fullWidth
                margin="normal"
                name="occupation"
                label="Occupation"
                variant="outlined"
                value={formData.occupation}
                onChange={handleChange}
                select
                required
            >
                <MenuItem value=""><em>-- make a choice --</em></MenuItem>
                <MenuItem value="an architect">an architect</MenuItem>
                <MenuItem value="a consumer">a consumer</MenuItem>
                <MenuItem value="a retailer">a retailer</MenuItem>
                <MenuItem value="a distributor">a distributor</MenuItem>
                <MenuItem value="a carpenter">a carpenter</MenuItem>
                <MenuItem value="a contractor">a contractor</MenuItem>
                <MenuItem value="an installer">an installer</MenuItem>
                <MenuItem value="an industry">an industry</MenuItem>
            </TextField>
            <TextField
                fullWidth
                margin="normal"
                name="information"
                label="What information would you like to receive?"
                variant="outlined"
                value={formData.information}
                onChange={handleChange}
                required
            />
            <TextField
                fullWidth
                margin="normal"
                name="support"
                label="How can we support you?"
                variant="outlined"
                value={formData.support}
                onChange={handleChange}
            />
            <Box sx={{ mt: 2}}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            required
                        />
                    }
                    label="I agree that my information is shared with the dealer"
                    style={{ fontSize: '0.3rem' }}
                />
            </Box>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
        </Box>
    );
};

export default ContactUsForm;
