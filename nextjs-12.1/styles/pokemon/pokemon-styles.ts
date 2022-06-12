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
  padding: 5rem 0;
  background: ${palette.owl.yellow};
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
  flex-direction: column;
  margin: auto;
  padding-top: 1rem;
  m & > .error {
    height: 1.5rem;
    margin: 0.5rem;
  }
`;

export const CardLayout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  & > .pokemon-id {
    font-size: 16px;
  }
  & > .pokemon-name {
    font-size: 32px;
  }
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

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
