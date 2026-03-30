import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterProvider } from "./context/CharacterContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Homepage/Homepage";
import ContactForm from "./components/ContactForm/ContactForm";
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import Favorites from "./components/Favorites/Favorites";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import SearchForm from "./components/SearchForm/SearchForm";
import ModalDemo from "./components/ModalDemo/ModalDemo";
import PerformanceDemo from "./components/PerformanceDemo/PerformanceDemo";
import CharacterSearch from "./components/CharacterSearch/CharacterSearch";
import mockUser from "./mockUser.json";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CharacterProvider>
          <FavoritesProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Homepage user={mockUser} />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/characters" element={<CharacterList />} />
                <Route path="/characters/:id" element={<CharacterDetail />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/stopwatch" element={<Stopwatch />} />
                <Route path="/search" element={<SearchForm />} />
                <Route path="/modal-demo" element={<ModalDemo />} />
                <Route path="/performance" element={<PerformanceDemo />} />
                <Route path="/character-search" element={<CharacterSearch />} />
              </Routes>
            </Layout>
          </FavoritesProvider>
        </CharacterProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
