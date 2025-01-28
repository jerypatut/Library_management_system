import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about';
import PageUser from './components/auth-content/PageUser';
import ProtectedContent from './components/auth-content/ProtectedContent';
import ProtectedRoutes from './components/auth-content/ProtectedRoutes';
import Books from './components/books';
import ChangePassword from './components/ChangePassword';
import DetailBook from './components/DetailBook';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Login from './components/login';
import PageError from './components/PageError';
import ProfilDetail from './components/ProfilDetail';
import Register from './components/register';
import TambahBuku from './components/tambahBuku';
import UbahBuku from './components/ubahBuku';
import UbahRoleUser from './components/UbahRoleUser';
import Users from './components/users';

function App() {
  // console.log(exp);
  // const [user] = useState(userLogin);

  // useEffect(() => {
  //   localStorage.getItem("token");
  //   localStorage.getItem("userLogin");
  // }, []);
  // console.log(user);

  // if (exp * 1000 < Date.now()) {
  //   localStorage.clear();
  //   return <div>testtt</div>;
  // }
  return (
    <BrowserRouter>
      {/* <UserContext.Provider value={{ user }}> */}
      <Routes>
        <Route path="*" element={<PageError />}></Route>
        {/* public routes */}
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <ProtectedRoutes>
              <About />
            </ProtectedRoutes>
          }
        >
          {/* <Route path="outlet" element={<TestOutlet />}></Route> */}
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/logout" element={<Login />}></Route>
        <Route path="/profil" element={<ProfilDetail />}></Route>
        <Route
          path="/change-password/:id/:token"
          element={<ChangePassword />}
        ></Route>

        {/* protected routes */}
        <Route
          path="/books"
          element={
            <ProtectedRoutes>
              <Books />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <ProtectedRoutes>
              <DetailBook />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <ProtectedRoutes>
              <PageUser>
                <Users />
              </PageUser>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/tambah"
          element={
            <ProtectedRoutes>
              <ProtectedContent>
                <TambahBuku />
              </ProtectedContent>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/ubah/:id"
          element={
            <ProtectedRoutes>
              <ProtectedContent>
                <UbahBuku />
              </ProtectedContent>
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route
          path="/reset-password/:id/:token"
          element={<ChangePassword />}
        ></Route>
        <Route
          path="/ubahRoleUser/:id"
          element={
            <ProtectedRoutes>
              <UbahRoleUser />
            </ProtectedRoutes>
          }
        ></Route>
      </Routes>
      {/* </UserContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
