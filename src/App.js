import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, React } from "react";
import CreateRelation from "./relations/CreateRelations";
import ListAllReltions from "./relations/ListAllRelations";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./navigation/NavigationBar";

const DUMMY_DATA = [
  {
    id: 1,
    attributes: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    dependencies: [
      { left: ["A"], right: ["B"] },
      { left: ["B"], right: ["C"] },
      { left: ["A"], right: ["G"] },
      { left: ["A"], right: ["C"] },
      { left: ["E"], right: ["I"] },
    ],
  },
  {
    id: 2,
    attributes: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    dependencies: [
      { left: ["A"], right: ["B"] },
      { left: ["B"], right: ["C"] },
      { left: ["A"], right: ["G"] },
      { left: ["B"], right: ["C"] },
      { left: ["B"], right: ["C"] },
    ],
  },
];

function App() {
  const [data, setData] = useState(DUMMY_DATA);
  const addNewData = (newData) => {
    console.log("Isto to u appjs", newData, "Svi podaci", data);
    setData((previous) => {
      return [newData, ...previous];
    });
  };
  return (
    <div className="backc">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<ListAllReltions data={data} />}></Route>
          <Route
            path="/create-relation"
            element={<CreateRelation addNewData={addNewData} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
