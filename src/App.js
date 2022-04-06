import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, React } from "react";
import CreateRelation from "./relations/CreateRelations";
import ListAllReltions from "./relations/ListAllRelations";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./navigation/NavigationBar";

const DUMMY_DATA = [
  {
    id: 1,
    attributes: ["Ime", "Prezime", "Adresa"],
    dependencies: [
      { left: ["Ime"], right: ["Prezime"] },
      { left: ["Ime"], right: ["Adresa"] },
    ],
  },
  {
    id: 2,
    attributes: ["Ime", "nesto", "Adresa"],
    dependencies: [
      { left: ["Adresa"], right: ["Prezime"] },
      { left: ["Ime"], right: ["Adresa"] },
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
  );
}

export default App;
