import getSampleData from "./sampleData";
import { StyledAppTitle, StyledTableContainer } from "./styledComponents";
import { Table } from "./Table";

const sampleData = getSampleData(); // getting sample data from function

export const App = () => {
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
