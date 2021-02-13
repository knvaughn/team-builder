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
`;

function RightPane(props) {
    const { teamMembers } = props;
    return (
        <RightPaneWrapper>
            <h1>Team Members</h1>
            <p class="text-muted">{teamMembers.length} Member{(teamMembers.length > 1 && 's')}</p>
            <div className="team-member-list">
                {
                teamMembers.map((teamMember) => {
                    return (
                    <TeamMember teamMember={teamMember} key={teamMember.id} />
                    )
                })
                }
            </div>
        </RightPaneWrapper>
    )
}

export default RightPane;