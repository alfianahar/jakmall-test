import styled from "styled-components";

const BasicLayout = styled.div`
  background-color: #fffae6;
  width: 100vw;
  height: 100vh;
    display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ title, children }) => {

    return (
        <BasicLayout>
            {children}
        </BasicLayout>
    );
};

export default Layout;
