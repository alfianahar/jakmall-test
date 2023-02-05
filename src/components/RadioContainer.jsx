import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3.25rem;


    @media only screen and (min-width: 800px) {
        flex-direction: row;
        margin-bottom: 4.25rem;

    }
`

const RadioContainer = ({ children }) => {
    return (
        <Container>{children}
        </Container>
    )
}

export default RadioContainer