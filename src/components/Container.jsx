import styled from "styled-components";
import Layout from "./Layout";

const BasicContainer = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  background: #FFFFFF;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
`;

const Container = ({ title, children }) => {

    return (
        <Layout>

            <BasicContainer>
                {children}
            </BasicContainer>
        </Layout>
    );
};

export default Container;
