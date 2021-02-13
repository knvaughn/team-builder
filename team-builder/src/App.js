import './App.css';
import axios from './axios';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import LeftPane from './Components/LeftPane';
import RightPane from './Components/RightPane';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 1024px) {
    flex-flow: column nowrap;
  }
`;

const initialForm = {
  id: "",
  name: "",
  email: "",
  role: ""
}

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    axios.get('mydata.com')
    .then(response => setTeamMembers(response.data));
  }, []);

  const update = (name, value) => {
    setForm({...form, [name]: value});
  }

  const submit = () => {
    axios.post('mydata.com', form)
    .then(response => setTeamMembers([...teamMembers, response.data]));
    setForm(initialForm);
  }

  return (
    <Wrapper>
      <LeftPane form={form} update={update} submit={submit} />
      <RightPane teamMembers={teamMembers} />
    </Wrapper>
  );
}

export default App;
