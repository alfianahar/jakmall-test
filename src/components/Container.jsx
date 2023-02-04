import styled from "styled-components";

const BasicLayout = styled.div`
  background-color: #fffae6;
  height: 100vh;
  padding: 1.75rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BasicContainer = styled.div`
  height: 90%;
  padding: 2rem 1rem;
  background: #FFFFFF;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
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
