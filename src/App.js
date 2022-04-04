import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateRelation from "./relations/CreateRelations";
import ListAllReltions from "./relations/ListAllRelations";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./navigation/NavigationBar";

const data = [
  {
    id: Math.random()*100,
    relations: ["Ime", "Prezime", "Adresa"],
    dependencies: [
      { left: ["Ime"], right: ["Prezime"] },
      { left: ["Ime"], right: ["Adresa"] },
    ],
  },
];

const addNewData = (newData) => {
  //TODO
}

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ListAllReltions data={data} />}></Route>
        <Route path="/create-relation" addNewData={addNewData}  element={<CreateRelation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
