import React from 'react';
import styled from 'styled-components';
import Form from '././Form';

const LeftPaneWrapper = styled.div`
    background-image: linear-gradient(#f8a3a6, #e76687);
    flex: 1 1 40%;
    padding: 100px 80px;

    @media screen and (max-width: 1024px) {
        padding: 50px 30px;
    }
`;

function LeftPane(props) {
    const { teamMembers, setTeamMembers, memberToEdit, editMember } = props;
    return (
        <LeftPaneWrapper>
            <Form 
                teamMembers={teamMembers} 
                setTeamMembers={setTeamMembers} 
                memberToEdit={memberToEdit} 
                editMember={editMember}
            />
        </LeftPaneWrapper>
    )
}

export default LeftPane;