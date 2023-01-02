import React from 'react';

const ClientPage = () => {
  return(
    <div className="main">
      <h1 class="letter">Bem Vindo ao S6-Bank!</h1>
      <h1 class="letter">Selecione seu tipo de atendimento:</h1>
      <form>
      <label class="letter">
        CPF:
        <input type="text"/>
      </label>
      <input type="submit" value="Enviar" maxlength="11" pattern="\d+" />
      </form>
      <div className="clientside">
        <button class="botoes">Comum</button>
        <button class="botoes">Rapido</button>
        <button class="botoes">Prioritario</button>
      </div>
    </div>
  )
};

export default ClientPage;