import styled, { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 50%;
  td,
  th {
    border: 1px solid grey;
    text-align: left;
  }
  td {
    padding: 10px;
  }
  th {
    padding: 0;
    min-width: 50px;
    max-width: 100px;
  }
  @media print {
    tbody td,
    thead th {
      color: black;
    }
  }
`;

export const StyledTr = styled.tr`
  background-color: ${(props) => props["data-theme"].bg};
  color: ${(props) => props["data-theme"].color || "black"};
`;
export const StyledPriceTd = styled.td`
  background-color: ${(props) => props["data-bg"]};
  color: ${COLORS.white};
`;

export const StyledHeadRow = styled.tr`
  background-color: ${COLORS.black};
  color: ${COLORS.white};
`;

export const StyledHeaderButton = styled.button`
  background-color: ${(props) =>
    props["data-active"] ? COLORS.darkGrey : "transparent"};

  padding: 10px;
  height: 100%;
  width: 100%;
  color: white;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 1px solid black;
  }
  &:hover {
    background-color: ${COLORS.darkGrey};
  }
`;
export const StyledTableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
