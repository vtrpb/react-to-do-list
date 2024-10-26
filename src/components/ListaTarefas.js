import React from 'react';
import Tarefa from './Tarefa';
import { ListGroup } from 'react-bootstrap';

function ListaTarefas({ tarefas, marcarConcluida, removerTarefa }) {
  return (
    <ListGroup>
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          marcarConcluida={marcarConcluida}
          removerTarefa={removerTarefa}
        />
      ))}
    </ListGroup>
  );
}

export default ListaTarefas;
