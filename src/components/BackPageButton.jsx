import styled from "styled-components";

const BackButton = styled.button`
    all: unset;
    cursor: pointer;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.05rem;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
    display: flex;
    align-items: center;
    margin-top: ${props => (props.thanks ? "1.5rem" : "")};

    @media only screen and (min-width: 800px) {
        margin-left: ${props => (props.thanks ? "" : "2.5rem")};
        margin-top: ${props => (props.thanks ? "1rem" : "")};
    }
`;


const BackPageButton = ({ thanks, children, back }) => {


    return (
        <BackButton thanks={thanks} type="button" onClick={back}>
            {children}
        </BackButton>
    );
};

export default BackPageButton;
