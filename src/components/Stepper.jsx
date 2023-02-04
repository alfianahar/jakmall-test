import React from "react";
import styled from "styled-components";

const StepperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 50px auto;
`;

const Step = styled.div`
  width: 33%;
  text-align: center;
  font-size: 18px;
  color: ${props => (props.active ? "#4CAF50" : "#ccc")};
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => (props.active ? "#4CAF50" : "#ccc")};
`;



const Stepper = ({ currentStep }) => {
    return (
        <StepperContainer>
            <Step active={currentStep >= 1}>Delivery</Step>
            <span> {'>'} </span>
            <Step active={currentStep >= 2}>Payment</Step>
            <span> {'>'}  </span>
            <Step active={currentStep >= 3}>Finish</Step>
        </StepperContainer>
    );
};

export default Stepper;
