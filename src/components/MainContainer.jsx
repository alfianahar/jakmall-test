import styled from "styled-components";

const Mcontainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 margin : ${props => (props.thanks ? "7rem 0rem" : "")};
 
  @media only screen and (min-width: 800px) {
    padding: 1.5rem 2.5rem;
    justify-content: ${props => (props.thanks ? "center" : "")}; 
    align-items : ${props => (props.thanks ? "center" : "")}; 
  }
`;

const MainContainer = ({ step, children }) => {
  console.log(step)
  return (
    <Mcontainer thanks={step === 2}>
      {children}
    </Mcontainer>
  );
};

export default MainContainer;
