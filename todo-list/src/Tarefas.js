import React from 'react';

const Tarefas = ({ tarefas }) => {
  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
  );
};

export default Tarefas;