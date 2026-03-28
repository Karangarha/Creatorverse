import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddCreator } from "./pages/AddCreator";
import { EditCreator } from "./pages/EditCreator";
import { ViewCreator } from "./pages/ViewCreator";
import { ShowCreators } from "./pages/ShowCreators";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
        <Route path="/view/:id" element={<ViewCreator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
