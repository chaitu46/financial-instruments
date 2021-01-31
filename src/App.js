import useSampleData from "./hooks/useSampleData";
import { StyledAppTitle, StyledTableContainer } from "./styledComponents";
import { Table } from "./Table";

export const App = () => {
  const sampleData = useSampleData(); // getting sample from custom hook, So custom hook can be leveraged for API call fetch in future.
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
