import useSampleData from "./hooks/useSampleData";
import { StyledAppTitle, StyledTableContainer } from "./styledComponents";
import { Table } from "./Table";

export const App = () => {
  const sampleData = useSampleData();
  return (
    <div>
      <StyledAppTitle>Financial Instruments - Assessment</StyledAppTitle>
      <StyledTableContainer>
        <Table initialData={sampleData} />
      </StyledTableContainer>
    </div>
  );
};

export default App;
