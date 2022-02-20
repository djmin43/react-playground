import "./App.css";
import styled from "@emotion/styled";

function App() {
  return (
    <StyledContainer>
      hello world. i'm figuring out atomic design
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  border-radius: 4px;
`;

export default App;
