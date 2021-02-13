import React from 'react';
import TeamMember from './TeamMember';
import styled from 'styled-components';

const RightPaneWrapper = styled.div`
    background: #f2f3f7;
    flex: 1 1 60%;
    padding: 100px 80px;

    h1 {
        color: #1b3a67;
        margin-bottom: 0;
    }

    .text-muted {
        color: #8f939c;
        margin-bottom: 50px;
    }

    .team-member-list {
        display: flex;
        flex-flow: column nowrap;
    }

    @media screen and (max-width: 1024px) {
        padding: 50px 30px;
    }
`;

function RightPane(props) {
    const { teamMembers, memberToEdit, setMemberToEdit, editMember } = props;
    return (
        <RightPaneWrapper>
            <h1>Team Members</h1>
            <p className="text-muted">{teamMembers.length} Member{(teamMembers.length > 1 && 's')}</p>
            <div className="team-member-list">
                {
                    teamMembers.map((teamMember) => {
                        return (
                            <TeamMember 
                                teamMember={teamMember} 
                                memberToEdit={memberToEdit} 
                                setMemberToEdit={setMemberToEdit} 
                                key={teamMember.id} 
                                editMember={editMember}
                            />
                        )
                    })
                }
            </div>
        </RightPaneWrapper>
    )
}

export default RightPane;