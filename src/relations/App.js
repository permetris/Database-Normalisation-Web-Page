import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, React } from "react";
import CreateRelations from "./relations/CreateRelations";
import ListAllRelations from "./relations/ListAllRelations";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./navigation/NavigationBar";

let DUMMY_DATA = [
  {
    id: 1,
    relations: ["Ime", "Prezime", "Adresa"],
    dependencies: [
      { key: Math.random(), left: ["Ime"], right: ["Prezime"] },
      { key: Math.random(), left: ["Ime"], right: ["Adresa"] },
    ],
  },
  {
    id: 2,
    relations: ["Ime", "Prezime", "Adresa"],
    dependencies: [
      { key: Math.random(), left: ["Ime"], right: ["Prezime"] },
      { key: Math.random(), left: ["Ime"], right: ["Adresa"] },
    ],
  },
];
const App = () => {

  const [relationSchema, setRelationSchema] = useState(DUMMY_DATA);
  
  const addNewData = (newData) => {
    setRelationSchema((previousData) => {
      return [newData,...previousData];
    })
  };
  // const [stateData, setStateData] = useState(data);

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ListAllRelations data={relationSchema} />}></Route>
        <Route
          path="/create-relation"
          element={<CreateRelations onSubmit={addNewData} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
