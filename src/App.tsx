import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import SearchBar from "./components/SearchBar";
import School from "./components/School";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <SearchBar />
            </Layout>
          }
        />
        <Route
          path="/:dbn"
          element={
            <Layout>
              <School />
            </Layout>
          }
        />
        {/* If user enters invalid path (ex. /valid_dbn/misc_char), then redirect to homepage */}
        <Route path="*" element={<Navigate to="/" />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
