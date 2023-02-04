import styled from "styled-components";

const Rcontainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`;

const RightContainer = ({ title, children }) => {

    return (
        <Rcontainer>
            {children}
        </Rcontainer>
    );
};

export default RightContainer;
