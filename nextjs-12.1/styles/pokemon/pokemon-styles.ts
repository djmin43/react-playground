import styled from "@emotion/styled";

const palette = {
  black: "#000000",
  white: "#ffffff",
  yellow: {
    light: "#ff9800",
    main: "#ed6c02",
    dark: "#e65100",
  },
  red: {
    light: "#ef5350",
    main: "#d32f2f",
    dark: "#c62828",
  },
  owl: {
    yellow: "#ffde03",
    blue: "#0336ff",
    red: "#ff0266",
  },
} as const;

export const MainPageLayout = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${palette.owl.yellow};
  padding-top: 40%;
`;

export const StyledSearchButton = styled.button`
  background-color: ${palette.owl.blue};
  color: ${palette.white};
  border-radius: 0.25rem;
  margin: 0.25rem;
  padding: 0.5rem;
`;

export const StyledSearchInput = styled.input`
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
`;

export const StyledErrorMessage = styled.p`
  color: ${palette.owl.red};
`;

export const PokeIdLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  & > .error {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 100%;
  }
`;

export const CardLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
`;

export const LoadingMessageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > .loading {
    position: relative;
    & > .dots {
      position: absolute;
    }
  }
`;
