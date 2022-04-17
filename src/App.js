import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, React } from "react";
import CreateRelation from "./relations/relation-input/CreateRelations";
import ListAllReltions from "./relations/relation-listing/ListAllRelations";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./navigation/NavigationBar";

const DUMMY_DATA = [
  {
    id: 4,
    attributes: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    dependencies: [
      { id: 1, left: ["D", "I"], right: ["B"] },
      { id: 2, left: ["A", "J"], right: ["F"] },
      { id: 3, left: ["G", "B"], right: ["F", "J", "E"] },
      { id: 4, left: ["A", "J"], right: ["H", "D"] },
      { id: 5, left: ["I"], right: ["C", "D"] },
    ],
    primaryKey: [],
  },

  {
    id: 5,
    attributes: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    dependencies: [
      { id: 1, left: ["D", "I"], right: ["B"] },
      { id: 2, left: ["A", "J"], right: ["F"] },
      { id: 3, left: ["A", "J"], right: ["H", "D"] },
      { id: 4, left: ["G", "B"], right: ["F", "J", "E"] },
      { id: 5, left: ["I"], right: ["C", "G"] },
    ],
    primaryKey: [],
  },
];

function App() {
  const [data, setData] = useState(DUMMY_DATA);

  const addNewRelationSchema = (newRelation) => {
    setData((previous) => {
      return [newRelation, ...previous];
    });
  };

  console.log(DUMMY_DATA[1]);
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
