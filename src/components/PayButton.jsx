import styled from "styled-components";

const Button = styled.button`
    background: #FF8A00;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 3px 5px 10px rgba(255, 138, 0, 0.2);
    border-radius: 2px;
    width: 100%;
    padding: 1.25rem 3.5rem;
    cursor: pointer;

    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.375rem;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;

    @media only screen and (min-width: 800px) {
    }
`;


const PayButton = ({ children }) => {

    return (
        <Button type="submit">
            {children}
        </Button>
    );
};

export default PayButton;
