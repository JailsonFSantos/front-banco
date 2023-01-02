import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import LoginPage from './pages/LoginPages';
import HomePage from './homepage';
import ClientPage from "./pages/ClientPages";
import TvPage from "./pages/TvPages";

import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {
  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return(
    <Router>
      <AuthProvider>
      <Routes>
        <Route exact path="/login"
        element={<LoginPage/>}/>
        <Route exact 
        path="/" 
        element={
        <Private>
          <HomePage/>
        </Private>}/>
        <Route exact path="/client" element={<ClientPage/>}/>
        <Route exact path="/tv" element={<TvPage/>}/>
      </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRoutes;