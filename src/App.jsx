import Animations from "./examples/Animations";
import CardView from "./examples/CardView";
import Color from "./examples/Color";
import Inline from "./examples/Inline";
import Intro from "./examples/Intro";
import Table from "./examples/Table";
import Types from "./examples/Types";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "1rem" }}>
      <Intro />
      <Types />
      <Animations />
      <Color />
      <Inline />
      <CardView />
      <Table />
    </div>
  );
}

export default App;
