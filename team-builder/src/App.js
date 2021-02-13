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
  const [memberToEdit, setMemberToEdit] = useState(null);

  useEffect(() => {
    axios.get('mydata.com')
    .then(response => setTeamMembers(response.data));
  }, []);

  const editMember = (teamMember) => {
    setTeamMembers(teamMembers.map((member) => {
      if (member.id === teamMember.id) {
        return {...teamMember};
      } else {
        return member;
      }
    }));
    setMemberToEdit(null);
  }

  return (
    <Wrapper>
      <LeftPane 
        teamMembers={teamMembers} 
        setTeamMembers={setTeamMembers} 
        memberToEdit={memberToEdit} 
        editMember={editMember}
      />
      <RightPane 
        teamMembers={teamMembers} 
        memberToEdit={memberToEdit} 
        setMemberToEdit={setMemberToEdit} 
        editMember={editMember} 
      />
    </Wrapper>
  );
}

export default App;
