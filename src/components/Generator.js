import React, { useState } from 'react';

function Generator() {
  const[generatedPassword, setGeneratedPassword] = useState('');
  const handleGeneratePassword = () => {
    fetch('http://localhost:8080/gerar-senha')
    .then(response => response.text())
    .then(data => setGeneratedPassword(data))
    .catch(error => console.error('Erro ao gerar senha', Error));
  };

  return (
    <div>
      <h2>Gerador de Senha</h2>
      <button onClick={handleGeneratePassword}>Gerar Senha</button>
      {generatedPassword && <p>Senha Gerada: {generatedPassword}</p>}
    </div>
  );
}

export default Generator;