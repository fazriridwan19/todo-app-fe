import TodoList from "./pages/TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Container>
        <Routes>
          <Route path="/task" element={<TodoList />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
