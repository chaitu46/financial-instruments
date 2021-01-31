import styled, { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants";

// GlobalStyle used to get the same font style for entire application.
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

// StyledTable is used to define table styles.
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
    thead th button {
      color: black;
    }
  }
`;

// StyledTr is used to get background color and font color based of the row based on asset class.
export const StyledTr = styled.tr`
  background-color: ${(props) => props["data-theme"].bg};
  color: ${(props) => props["data-theme"].color || "black"};
`;

// StyledPriceTd is used to get the background color of price cell based on the price value.
export const StyledPriceTd = styled.td`
  background-color: ${(props) => props["data-bg"]};
  color: ${COLORS.white};
`;

// StyledHeadRow is used to define the styles of table header row.
export const StyledHeadRow = styled.tr`
  background-color: ${COLORS.black};
  color: ${COLORS.white};
`;

// StyledHeaderButton is used to define the styles of table header button and mouse hover effects.
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
    outline: 1px solid ${COLORS.lightGrey};
    outline-offset: -1px;
  }
  &:hover {
    background-color: ${COLORS.darkGrey};
  }
`;

// StyledTableContainer is used to position the table in center.
export const StyledTableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// StyledAppTitle is used to position the app tile in center.
export const StyledAppTitle = styled.h1`
  text-align: center;
`;
