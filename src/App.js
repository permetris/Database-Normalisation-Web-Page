import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, React } from "react";
import CreateRelation from "./relations/relation-input/CreateRelations";
import ListAllReltions from "./relations/relation-listing/ListAllRelations";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./navigation/NavigationBar";

const DUMMY_DATA = [
  {
    id: Math.random(),
    attributes: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    dependencies: [
      { id: 1, left: ["D", "I"], right: ["B"] },
      { id: 2, left: ["A", "J"], right: ["F"] },
      { id: 3, left: ["G", "B"], right: ["F", "J", "E"] },
      { id: 4, left: ["A", "J"], right: ["H", "D"] },
      { id: 5, left: ["I"], right: ["C", "D"] },
    ],
    primaryKey: [],
    thrirdNF: [],
    boyceNF: [],
  },

  {
    id: Math.random(),
    attributes: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    dependencies: [
      { id: 1, left: ["D", "I"], right: ["B"] },
      { id: 2, left: ["A", "J"], right: ["F"] },
      { id: 3, left: ["A", "J"], right: ["H", "D"] },
      { id: 4, left: ["G", "B"], right: ["F", "J", "E"] },
      { id: 5, left: ["I"], right: ["C", "G"] },
    ],
    primaryKey: [],
    thrirdNF: [],
    boyceNF: [],
  },
  {
    id: Math.random(),
    attributes: ["A", "B", "C", "D", "E", "F", "G"],
    dependencies: [
      { id: 1, left: ["A"], right: ["D"] },
      { id: 2, left: ["A", "G"], right: ["B"] },
      { id: 3, left: ["B"], right: ["G"] },
      { id: 4, left: ["B"], right: ["E"] },
      { id: 5, left: ["E"], right: ["B"] },
      { id: 6, left: ["E"], right: ["F"] },
    ],
    primaryKey: [],
    thrirdNF: [],
    boyceNF: [],
  },
  {
    id: Math.random(),
    attributes: ["St", "V", "P", "U", "So", "O"],
    dependencies: [
      { id: 5, left: ["P", "St"], right: ["O"] },
      { id: 1, left: ["P"], right: ["U"] },
      { id: 2, left: ["V", "So"], right: ["P"] },
      { id: 3, left: ["V", "U"], right: ["So"] },
      { id: 4, left: ["V", "St"], right: ["So"] },
      
    ],
    primaryKey: [],
    thrirdNF: [],
    boyceNF: [],
  },
];

function App() {
  const [data, setData] = useState(DUMMY_DATA);

  const addNewRelationSchema = (newRelation) => {
    setData((previous) => {
      return [newRelation, ...previous];
    });
  };

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ListAllReltions data={data} />}></Route>
        <Route
          path="/create-relation"
          element={
            <CreateRelation addNewRelationSchema={addNewRelationSchema} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
