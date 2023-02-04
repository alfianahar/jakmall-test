import React from "react";
import styled from "styled-components";



const StepperLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: -4rem;
    margin-bottom: 2rem
`;

const StepperBackground = styled.div`
    background: #FFFAE6;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .75rem 1.5rem; 
    width: 90%;

    @media only screen and (min-width: 800px) {
        width: 40%
  }
`;

const StepperContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  
`;

const Step = styled.div`
    width: 33%;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: ${props => (props.active ? "#FF8A00" : "#ccc")};
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    transform: scale(.75);

    @media only screen and (min-width: 800px) {
        transform: scale(1);
        margin: 0 1rem;
  }
`;

const Circle = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => (props.active ? "rgba(255, 138, 0, 1)" : "rgba(255, 138, 0, 0.2)")};
    color: ${props => (props.active ? "#FFF" : "rgb(255, 138, 0)")};;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    box-shadow: 0px 2px 4px rgba(255, 138, 0, 0.3);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
`;



const Stepper = ({ currentStep }) => {
    return (
        <StepperLayout>
            <StepperBackground>
                <StepperContainer>
                    <Step active={currentStep >= 1}>
                        <Circle active={currentStep >= 1}>1</Circle>
                        Delivery
                    </Step>
                    <i style={{ color: '#FF8A00' }} className='bx bxs-chevron-right'></i>
                    <Step active={currentStep >= 1}>
                        <Circle active={currentStep >= 2}>2</Circle>
                        Payment
                    </Step>
                    <i style={{ color: '#FF8A00' }} className='bx bxs-chevron-right'></i>
                    <Step active={currentStep >= 1}>
                        <Circle active={currentStep >= 3}>3</Circle>
                        Finish
                    </Step>
                </StepperContainer>
            </StepperBackground>
        </StepperLayout>

    );
};

export default Stepper;
