import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../axios';

const FormWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;

    h1 {
        color: rgba(255,255,255,.9);
    }

    label {
        color: rgba(255,255,255,.6);
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 2px;
        transition: all .2s linear;

        &:focus-within {
            color: #fff;
        }
    }

    input, select, button {
        background: none;
        border: 2px solid rgba(255,255,255,.3);
        border-radius: 10px;
        outline: none;
        display: block;
        width: 100%;
        margin: 5px 0 30px;
        color: #fff;
        font-weight: 500;
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        padding: 15px;
        transition: all .2s linear;
    }

    select option {
        color: #1b3a67;
        font-weight: 500;
    }

    input:focus, select:focus, button:focus {
        border: 2px solid rgba(255,255,255,.9);
    }

    button {
        transition: all .2s linear;
        font-weight: bold;
        letter-spacing: 1px;

        &:hover {
            cursor: pointer;
            background: #fff;
            color: #f08e9b;
        }
    }

    @media screen and (max-width: 800px) {
        max-width: 100%;
        padding: 0;
    }
`;

const initialForm = {
    id: "",
    name: "",
    email: "",
    role: ""
}

function Form(props) {
    const { teamMembers, setTeamMembers, memberToEdit, editMember } = props;
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (!memberToEdit) {
            setForm(initialForm);
        } else {
            setForm({...memberToEdit});
        }
    }, [memberToEdit]);

    const update = (name, value) => {
        setForm({...form, [name]: value});
    }

    const submit = () => {
        if (memberToEdit) {
            editMember(form);
        } else {
            axios.post('mydata.com', form)
            .then(response => setTeamMembers([...teamMembers, response.data]));
            setForm(initialForm);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        update(name, value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    return (
        <FormWrapper>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name 
                    <input 
                        type="text" 
                        name="name"
                        onChange={handleChange}
                        value={form.name}
                    />
                </label>
                <label>
                    Email 
                    <input 
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={form.email}
                    />
                </label>
                <label>
                    Role 
                    <select
                        name="role"
                        onChange={handleChange}
                        value={form.role}
                    >
                        <option>Select a role</option>
                        <option>Software Engineer</option>
                        <option>Backend Engineer</option>
                        <option>Frontend Engineer</option>
                        <option>Designer</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </FormWrapper>
    )
}

export default Form;