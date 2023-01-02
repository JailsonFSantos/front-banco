import "./style.css";
import React, { useContext } from "react";

import { AuthContext } from "../contexts/auth";

const HomePage = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }
  return(
    <div className="main">
    <h1 class="letter">Sistema de Caixa S6-Bank</h1>
    <p class="letter">Bem Vindo!</p>
    <div class="para-caixas">
    <h1 class="letter">Clique para chamar uma senha:</h1>
    <div>
    <button id="Caixa 1" class="botoes" >Caixa 1</button>
    <button id="Caixa 2" class="botoes" >Caixa 2</button>
    <button id="Caixa 3" class="botoes" >Caixa 3</button>
    <button id="Caixa 4" class="botoes" >Caixa 4</button>
    <div className="logout"><button onClick={handleLogout} class="logout">
      Logout</button>
    </div>
    </div> 
    </div>
    </div>
  )
};
export default HomePage;