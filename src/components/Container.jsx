


import { useState } from "react";
import styled from "styled-components";

const BasicContainer = styled.div`
  position: absolute;
  width: 1100px;
  height: 550px;
  left: 50px;
  top: 55px;
  background: #FFFFFF;
  box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
  border-radius: 4px;
`;

const Container = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <BasicContainer>
            {children}
        </BasicContainer>
    );
};

export default Container;
