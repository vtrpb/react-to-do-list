import React, { useState } from 'react';
import FormularioTarefa from './components/FormularioTarefa';
import ListaTarefas from './components/ListaTarefas';
import { Container, Row, Col, Badge } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const marcarConcluida = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.concluida).length;
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1 className="text-center mb-4">Lista de Tarefas</h1>
          <FormularioTarefa adicionarTarefa={adicionarTarefa} />
          <ListaTarefas
            tarefas={tarefas}
            marcarConcluida={marcarConcluida}
            removerTarefa={removerTarefa}
          />
          <Row className="mt-3">
            <Col>
              <Badge bg="secondary">
                Tarefas Pendentes: {tarefasPendentes}
              </Badge>
            </Col>
            <Col className="text-end">
              <Badge bg="success">
                Tarefas Concluídas: {tarefasConcluidas}
              </Badge>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
