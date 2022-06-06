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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${palette.owl.yellow};
`;
