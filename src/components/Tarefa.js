import React from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';

function Tarefa({ tarefa, marcarConcluida, removerTarefa }) {
  return (
    <ListGroup.Item
      className="d-flex align-items-center justify-content-between"
    >
      <Form.Check
        type="checkbox"
        label={
          <span
            style={{
              textDecoration: tarefa.concluida ? 'line-through' : 'none',
            }}
          >
            {tarefa.texto}
          </span>
        }
        checked={tarefa.concluida}
        onChange={() => marcarConcluida(tarefa.id)}
      />
      <Button
        variant="danger"
        size="sm"
        onClick={() => removerTarefa(tarefa.id)}
      >
        Remover
      </Button>
    </ListGroup.Item>
  );
}

export default Tarefa;
