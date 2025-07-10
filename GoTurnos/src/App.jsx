import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Router>
          <div style={{ flex: 1 }}>
            <AppRoutes />
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}


export default App;
