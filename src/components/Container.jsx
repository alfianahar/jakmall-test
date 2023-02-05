import styled from "styled-components";

const BasicLayout = styled.div`
  padding: 3rem 2rem 1.75rem 2rem;
  display: flex;
  justify-content: center;
    @media only screen and (min-width: 800px) {
        padding: 2rem 3rem ;
    }
`;

const BasicContainer = styled.div`
    min-height: 29rem;
    width: 100%;
    padding: 2rem 1rem;
    background: #FFFFFF;
    box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
    border-radius: 4px;

    @media only screen and (min-width: 800px) {
        padding: 2rem 0rem ;
    }
`;

const Container = ({ title, children }) => {
    return (
        <BasicLayout>
            <BasicContainer>
                {children}
            </BasicContainer>
        </BasicLayout>
    );
};

export default Container;
