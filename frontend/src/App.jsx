import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CreateCar from "./components/pages/CreateCar";
import UpdateCar from "./components/pages/UpdateCar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box minH={"100vh"}>
      {/* this will be ever present no matter the page user is on */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateCar />} />
        <Route path="/update" element={<UpdateCar />} />
      </Routes>
    </Box>
  );
}

export default App;
