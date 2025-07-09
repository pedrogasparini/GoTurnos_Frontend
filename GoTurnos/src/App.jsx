import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  
  return (
    
    <Router>
      <AppRoutes />
      <Footer/>
    </Router>
  );
}

export default App;
