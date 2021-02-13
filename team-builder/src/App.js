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

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    axios.get('mydata.com')
    .then(response => setTeamMembers(response.data));
  }, []);

  return (
    <Wrapper>
      <LeftPane teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      <RightPane teamMembers={teamMembers} />
    </Wrapper>
  );
}

export default App;
