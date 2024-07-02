import React, { useState } from 'react';
import Tarefas from './Tarefas';

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([
    'Estudar React',
    'Fazer exercícios',
    'Ler um livro',
  ]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <Tarefas tarefas={tarefas} />
    </div>
  );
};

export default ListaDeTarefas;