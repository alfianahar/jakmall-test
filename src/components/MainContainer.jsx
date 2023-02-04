import styled from "styled-components";

const Mcontainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
`;

const MainContainer = ({ title, children }) => {

    return (
        <Mcontainer>
            {children}
        </Mcontainer>
    );
};

export default MainContainer;
