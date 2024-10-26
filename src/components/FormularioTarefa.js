import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function FormularioTarefa({ adicionarTarefa }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      adicionarTarefa(texto);
      setTexto('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        <Button variant="primary" type="submit">
          Adicionar
        </Button>
      </InputGroup>
    </Form>
  );
}

export default FormularioTarefa;
