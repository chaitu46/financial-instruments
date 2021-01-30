import { useFetchData } from "./hooks/useFetchData";
import { StyledTableContainer } from "./styledComponents";
import { Table } from "./Table";

const fetchUrl = "./sampleData.json";

export const App = () => {
  const { isLoading, isError, data } = useFetchData(fetchUrl, []);

  if (isError) {
    return <h1>Sorry, Somethings gone wrong!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Financial Instruments - Assessment</h1>
      <StyledTableContainer>
        <Table initialData={data} />
      </StyledTableContainer>
    </div>
  );
};

export default App;
