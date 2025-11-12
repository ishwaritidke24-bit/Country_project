import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/layout/CountryDetails";
import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { Favorites } from "./pages/Favorites"; // ✅ new import

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="country" element={<Country />} />
          <Route path="country/:id" element={<CountryDetails />} /> {/*dynamic route */}
          <Route path="contact" element={<Contact />} />
          <Route path="favorites" element={<Favorites />} /> {/* ✅ new route */}
          <Route path="*" element={<ErrorPage />} /> {/* optional: handles 404s */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
