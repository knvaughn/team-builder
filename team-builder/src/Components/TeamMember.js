import React from 'react';
import styled from 'styled-components';

const TeamMemberCard = styled.div`
    background: #fff;
    padding: 40px;
    margin-bottom: 50px;

    h3 {
        color: #f08e9b;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 0;
    }

    .role {
        color: #8f939c;
        margin: 10px 0 20px;
    }

    .details {
        color: #1b3a67;
        font-weight: 600;
    }
`;

function TeamMember(props) {
    const { teamMember } = props;
    return (
        <TeamMemberCard>
            <h3>{teamMember.name}</h3>
            <p className="role">{teamMember.role}</p>
            <p className="details">Email: {teamMember.email}</p>
        </TeamMemberCard>
    )
}

export default TeamMember;