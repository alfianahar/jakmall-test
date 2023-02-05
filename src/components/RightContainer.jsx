import styled from "styled-components";

const Rcontainer = styled.div`
 display: flex;
 flex-direction: column;

   @media only screen and (min-width: 800px) {
    margin-top: 0rem;
    width: 30rem;
    padding: 2rem 1.25rem;
    justify-content: start; 
  }
`;

const RightContainer = ({ title, children }) => {

  return (
    <Rcontainer>
      {children}
    </Rcontainer>
  );
};

export default RightContainer;
