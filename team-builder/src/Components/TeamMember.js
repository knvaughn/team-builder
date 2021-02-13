import React from 'react';
import styled from 'styled-components';

const TeamMemberCard = styled.div`
    background: #fff;
    padding: 40px;
    margin-bottom: 50px;

    .edit-button {
        background: #f08e9b;
        color: #fff;
        border: none;
        padding: 5px 10px;
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 1px;
        border-radius: 10px;
        float: right;
        margin: 0 0 20px 20px;
        transition: all .2s linear;

        i {
            font-size: 1.2rem;
            margin-right: 5px;
        }

        &:hover {
            cursor: pointer;
            background: rgba(240, 142, 155, .7);
        }
    }

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

    @media screen and (max-width: 800px) {
        h3 {
            margin-top: 60px;
        }
    }
`;

function TeamMember(props) {
    const { teamMember, setMemberToEdit } = props;
    return (
        <TeamMemberCard>
            <button 
                className="edit-button"
                onClick={() => {setMemberToEdit(teamMember)}}
            >
                <i className="fas fa-user-edit"></i> 
                Edit
            </button>
            <h3>{teamMember.name}</h3>
            <p className="role">{teamMember.role}</p>
            <p className="details">Email: {teamMember.email}</p>
        </TeamMemberCard>
    )
}

export default TeamMember;