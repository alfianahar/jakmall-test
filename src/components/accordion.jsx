import { useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const AccordionSection = styled.div`
  background-color: #f2f2f2;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
`;

const AccordionContent = styled.div`
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
`;

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AccordionContainer>
            <AccordionSection onClick={() => setIsOpen(!isOpen)}>
                {title}
                {isOpen ? (
                    // <i className="fas fa-minus" />
                    <span>-</span>
                ) : (
                    <span>+</span>
                    // <i className="fas fa-plus" />
                )}
            </AccordionSection>
            <AccordionContent style={{ display: isOpen ? "block" : "none" }}>
                {children}
            </AccordionContent>
        </AccordionContainer>
    );
};

export default Accordion;
