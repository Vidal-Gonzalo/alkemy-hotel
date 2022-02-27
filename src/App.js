import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage/HomePage";
import { MenuProvider } from "./context/MenuContext";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <MenuProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </MenuProvider>
    </div>
  );
}

export default App;
