import React from 'react';
import styled from 'styled-components';
import Form from '././Form';

const LeftPaneWrapper = styled.div`
    background-image: linear-gradient(#f8a3a6, #e76687);
    flex: 1 1 40%;
    padding: 100px 80px;
`;

function LeftPane(props) {
    const { form, update, submit } = props;
    return (
        <LeftPaneWrapper>
            <Form form={form} update={update} submit={submit} />
        </LeftPaneWrapper>
    )
}

export default LeftPane;