import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, React, useEffect } from "react";
import CreateRelation from "./relations/relation-input/CreateRelations";
import ListAllReltions from "./relations/relation-listing/ListAllRelations";
import "bootstrap/dist/css/bootstrap.css";
import NavigationBar from "./navigation/NavigationBar";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/relations", {
        responseType: "json",
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  const addNewRelationSchema = (newRelation) => {
    axios
      .post("http://localhost:8000/relations", newRelation)
      .then((response) => console.log("this is response", response))
      .catch((err) => console.log("this is the errorr", err));

    setData((previous)=>[...previous,newRelation]);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

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