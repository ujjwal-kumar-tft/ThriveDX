import MainLayout from "./layouts";
import ToastNotification from "./components/UI/ToastNotification/ToastNotification";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return <>
        <MainLayout />;
        <ToastNotification />
        </>
}

export default App;
