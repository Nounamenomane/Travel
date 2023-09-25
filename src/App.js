import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage/HomePage";
import TravelListPage from "./page/travelListPage/TravelListPage";
import TravelDetailPage from "./page/travelDetailPage/TravelDetailPage";
import TravelCheckoutPage from "./page/travelCheckoutPage/TravelCheckoutPage";
import CompletedPage from "./page/completedPage/CompletedPage";
import TravelBLogPage from "./page/travelBLogPage/TravelBLogPage";
import TravelBlogDetails from "./page/TravelBlogDetails/TravelBlogDetails";
import TravelAbout from "./page/travelAbout/TravelAbout";
import TravelContactPage from "./page/travelContactPage/TravelContactPage";
import LoginPage from "./page/loginPage/LoginPage";
import Error from "./components/error/Error";
import Scroll from "./components/scroll/Scroll";

function App() {
  return (
    <div className="App">
      <Scroll />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/travelList" element={<TravelListPage />}></Route>
        <Route path="/travelDetail" element={<TravelDetailPage />}></Route>
        <Route path="/travelCheckout" element={<TravelCheckoutPage />}></Route>
        <Route path="/travelCompleted" element={<CompletedPage />}></Route>
        <Route path="/travelBlog" element={<TravelBLogPage />}></Route>
        <Route path="/travelAbout" element={<TravelAbout />}></Route>
        <Route
          path="/travelBlogDetails"
          element={<TravelBlogDetails />}
        ></Route>

        <Route path="/travelContact" element={<TravelContactPage />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
