// import { Home } from "./Home";
import { About } from "./About";
import { BrowserRouter, Routes, Route } from "react-router";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { DashboardHome } from "./Components/Dashboard/DashboardHome";
import { Settings } from "./Components/Dashboard/Settings";
import { Profile } from "./Components/Dashboard/Profile";
import { Products } from "./Components/Products/Products";
import { ProductsList } from "./Components/Products/ProductsList";
import { ProductDetail } from "./Components/Products/ProductDetail";
import { ProductReviews } from "./Components/Products/ProductReviews";
import { ProductSpecs } from "./Components/Products/ProductSpecs";
import { MainLayout } from "./Components/Layouts/MainLayout";
import { Contact } from "./Components/Pages/Contact";
import { Services } from "./Components/Pages/Services";
import {CharacterProvider} from "./Context/CharacterContext";
import {Layout} from "./HIComponents/Layout";
import {Homepage} from "./HIComponents/Homepage";
import {Navbar} from "./HIComponents/Navbar";
import {Footer} from "./HIComponents/Footer";

const App = () => {
  return (
    // <BrowserRouter>
    //   <CharacterProvider>
    //   <Routes>
    //     {/* Layout Route (no path) - wraps child routes with shared layout */}
    //     <Route element={<MainLayout />}>
    //       <Route index element={<Home />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="contact" element={<Contact />} />
    //       <Route path="services" element={<Services />} />
    //     </Route>
    //
    //     {/* Nested Routes Example - go to /dashboard or /dashboard/settings or /dashboard/profile */}
    //     <Route path="dashboard" element={<Dashboard />}>
    //       <Route index element={<DashboardHome />} />
    //       <Route path="settings" element={<Settings />} />
    //       <Route path="profile" element={<Profile />} />
    //     </Route>
    //
    //     {/* Nested Dynamic Routes Example - go to /products or /products/1 or /products/1/reviews */}
    //     <Route path="products" element={<Products />}>
    //       <Route index element={<ProductsList />} />
    //       <Route path=":productId" element={<ProductDetail />}>
    //         <Route index element={<ProductSpecs />} />
    //         <Route path="reviews" element={<ProductReviews />} />
    //       </Route>
    //     </Route>
    //
    //     {/*<Route path="characters" element={<Characters />} >*/}
    //     {/*  // specific character route with dynamic id*/}
    //     {/*</Route>*/}
    //   </Routes>
    //   </CharacterProvider>
    // </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route index element={<Homepage/>} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path={'/'} element={<Homepage/>}/>
            <Route path={'/about'} element={<About/>}/>

            <Route path={'/profile'} element={<Profile/>}>
              <Route path={'dashboard'} element={<Dashboard/>}>
                <Route path={':id'} element={<Graphs/>}/>
              </Route>
              <Route path={'settings'} element={<Settings/>}/>
            </Route>

          <Route path={'/blog'} element={<Profile/>}>
            <Route path={':id'} element={<Dashboard/>}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
};

export default App;
