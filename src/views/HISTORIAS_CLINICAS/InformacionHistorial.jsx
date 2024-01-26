import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CancelButton from '../../components/BOTONES/Cancelar';
import EditButton from '../../components/BOTONES/Editar';
import NewButton from '../../components/BOTONES/New';
import NewAntButton from '../../components/BOTONES/NewAnt';
import { ApiRequests } from '../../api/ApiRequests';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

const Informacion = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const location = useLocation();
  const navigate = useNavigate();
  const obj = location.state;
  const historiaClinica = obj.objeto;
  const IdhistoriaClinica = obj.identificador;

  const [antecedentesGinecologicos, setAntecedentesGinecologicos] = useState(null);
  const [antecedentesOdontologicos, setAntecedentesOdontologicos] = useState(null);
  const [antecedentesPatologicos, setAntecedentesPatologicos] = useState(null);

  useEffect(() => {
    const fetchAntecedentesGinecologicos = async () => {
      try {
        const response = await ApiRequests.getCommon(`api/HistorialesClinicas/AntecedenteGinecologico/${IdhistoriaClinica}`);
        if (response.status === 404) {

        } else {
          setAntecedentesGinecologicos(response);
        }

      } catch (error) {
        console.log(error);
      }
    };
    fetchAntecedentesGinecologicos();
  }, [IdhistoriaClinica]);

  useEffect(() => {
    const fetchAntecedentesOdontologicos = async () => {
      try {
        const response = await ApiRequests.getCommon(`api/HistorialesClinicas/AntecedenteOdontologico/${IdhistoriaClinica}`);
        if (response != null) {
          setAntecedentesOdontologicos(response);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAntecedentesOdontologicos()
  }, [IdhistoriaClinica]);


  if (!historiaClinica) {
    // Puedes manejar el caso en que no haya información
    return (
      <div style={{ margin: '20px 50px 0 50px' }}>
        <p>No hay información disponible.</p>
        <div className="row justify-content-evenly">
          <CancelButton titulo='Volver' navigateTo='back' />
        </div>
      </div>
    );
  }

  // Si hay información, muestra la tarjeta de Bootstrap con los detalles
  return (
    <div style={{ margin: '20px 50px 0 50px' }}>
      <legend>Informacion de la historia clinica</legend>
      <hr className="border border-primary border-2 opacity-50"></hr>
      <Card>
        <Card.Body className="text-start row">
          <p className="card-text col-4"><strong>Código:</strong> {historiaClinica.codigo}</p>
          <p className="card-text col-4"><strong>Doctor:</strong> {historiaClinica.nombreDoctor}</p>
          <p className="card-text col-4"><strong>Fecha Inicio:</strong> {new Date(historiaClinica.fechaCreacion).toLocaleDateString('es-ES')} </p>
          <p className="card-text col-4"><strong>Paciente:</strong> {historiaClinica.nombrePaciente}</p>
          <p className="card-text col-4"><strong>CI Paciente:</strong> {historiaClinica.ciPaciente}</p>
        </Card.Body>
      </Card>
      <legend className="text-start mt-1">Antecedentes </legend>
      <hr className="border border-danger border-2 opacity-50"></hr>
      <CardGroup className="text-start mt-1  ">
      <Card border="success" style={{ width: '18rem' }}>
          <Card.Header>Odontologicos</Card.Header>
          <ListGroup className="list-group-flush ">
            {antecedentesOdontologicos ? (
              <React.Fragment>
                <ListGroup.Item><strong>Tratamiento Anterior:</strong> {antecedentesOdontologicos.tratamientoAnterior}</ListGroup.Item>
                <ListGroup.Item><strong>Fecha Tratamiento Anterior:</strong> {new Date(antecedentesOdontologicos.fechaTratamientoAnterior).toLocaleDateString('es-ES')}</ListGroup.Item>
                <ListGroup.Item><strong>Frecuencia de Cepillado:</strong> {antecedentesOdontologicos.frecuenciaCepillado}</ListGroup.Item>
                <ListGroup.Item><strong>Tipo de Cepillo Dental:</strong> {antecedentesOdontologicos.tipoCepilloDental}</ListGroup.Item>
                <ListGroup.Item><strong>Usa Enjuague Bucal:</strong> {antecedentesOdontologicos.usaEnjuagueBucal ? 'Sí' : 'No'}</ListGroup.Item>
                <ListGroup.Item><strong>Usa Hilo Dental:</strong> {antecedentesOdontologicos.usaHiloDental ? 'Sí' : 'No'}</ListGroup.Item>
                <ListGroup.Item><strong>Usa Pasta Dental:</strong> {antecedentesOdontologicos.usaPastaDental ? 'Sí' : 'No'}</ListGroup.Item>
                <EditButton
                  titulo='Actualizar'
                  navigateTo='aaOdontologico'
                  object={antecedentesOdontologicos}
                  idHistoriaClinica={IdhistoriaClinica}
                  identificador={antecedentesOdontologicos.id}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <ListGroup.Item>No hay antecedente odontológico registrado.</ListGroup.Item>
                <NewAntButton titulo='Registrar' navigateTo='naOdontologico' identificador={IdhistoriaClinica} />
              </React.Fragment>
            )}
          </ListGroup>
        </Card>
        <Card border="success" style={{ width: '18rem' }}>
          <Card.Header>Ginecologicos</Card.Header>

          <ListGroup className="list-group-flush ">
            {antecedentesGinecologicos ? (
              <React.Fragment>
                <ListGroup.Item><strong>Último Período Menstrual:</strong>  {new Date(antecedentesGinecologicos.ultimoPeriodoMenstrual).toLocaleDateString('es-ES')}</ListGroup.Item>
                <ListGroup.Item> <strong>Problemas Menstruación:</strong> {antecedentesGinecologicos.problemasMenstruacion}</ListGroup.Item>
                <ListGroup.Item> <strong>Semanas Embarazo:</strong> {antecedentesGinecologicos.semanasEmbarazo}</ListGroup.Item>

                <EditButton
                  titulo='Actualizar'
                  navigateTo='aaGinecologico'
                  object={antecedentesGinecologicos}
                  idHistoriaClinica={IdhistoriaClinica}
                  identificador={antecedentesGinecologicos.id}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <ListGroup.Item>No hay antecedente patológico registrado.   </ListGroup.Item>
                <NewAntButton titulo='Registrar' navigateTo='naGinecologico' identificador={IdhistoriaClinica} />
              </React.Fragment>
            )}
          </ListGroup>
        </Card>

       

        <Card border="success" style={{ width: '18rem' }}>
          <Card.Header>Patologicos</Card.Header>
          <ListGroup className="list-group-flush ">

            {antecedentesPatologicos ? (
              <React.Fragment>
                <ListGroup.Item><strong>Medicación:</strong> {antecedentesPatologicos.medicacion}</ListGroup.Item>
                <ListGroup.Item><strong>Id Tipo Antecedente:</strong> {antecedentesPatologicos.idTipoAntecedente}</ListGroup.Item>
                <ListGroup.Item><strong>Id Tipo Antecedente:</strong> {antecedentesPatologicos.idTipoAntecedente}</ListGroup.Item>
                <EditButton
                  titulo='Actualizar'
                  navigateTo='aaPatologico'
                  object={antecedentesPatologicos}
                  idHistoriaClinica={IdhistoriaClinica}
                  identificador={antecedentesPatologicos.id}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <ListGroup.Item>hay antecedentes patologicos registrados.</ListGroup.Item>
                <NewAntButton titulo='Registrar' navigateTo='naPatologico' identificador={IdhistoriaClinica} />
              </React.Fragment>
            )}
          </ListGroup>
        </Card>
      </CardGroup>

      {/* 
          <Card.Body>
            <Card.Text>
              {antecedentesGinecologicos ? (
                <React.Fragment>

                  <strong>Último Período Menstrual:</strong>  {new Date(antecedentesGinecologicos.ultimoPeriodoMenstrual).toLocaleDateString('es-ES')}
                  <br />
                  <strong>Problemas Menstruación:</strong> {antecedentesGinecologicos.problemasMenstruacion}
                  <br />
                  <strong>Semanas Embarazo:</strong> {antecedentesGinecologicos.semanasEmbarazo}
                  <br />

                  <EditButton
                    titulo='Actualizar'
                    navigateTo='aaGinecologico'
                    object={antecedentesGinecologicos}
                    idHistoriaClinica={IdhistoriaClinica}
                    identificador={antecedentesGinecologicos.id}
                  />
                </React.Fragment>
              ) : (
                <React.Fragment>

                  <p className="card-text col-4">No hay antecedente patológico registrado.</p>
                  <NewAntButton titulo='Registrar' navigateTo='naGinecologico' identificador={IdhistoriaClinica} />
                </React.Fragment>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="success" style={{ width: '18rem' }}>
          <Card.Header>Odontologicos</Card.Header>
          <Card.Body>
            <Card.Text>
              {antecedentesOdontologicos ? (
                <React.Fragment>
                  <strong>Tratamiento Anterior:</strong> {antecedentesOdontologicos.tratamientoAnterior}
                  <br />
                  <strong>Fecha Tratamiento Anterior:</strong> {new Date(antecedentesOdontologicos.fechaTratamientoAnterior).toLocaleDateString('es-ES')}
                  <br />
                  <strong>Frecuencia de Cepillado:</strong> {antecedentesOdontologicos.frecuenciaCepillado}
                  <br />
                  <strong>Tipo de Cepillo Dental:</strong> {antecedentesOdontologicos.tipoCepilloDental}
                  <br />
                  <strong>Usa Enjuague Bucal:</strong> {antecedentesOdontologicos.usaEnjuagueBucal ? 'Sí' : 'No'}
                  <br />
                  <strong>Usa Hilo Dental:</strong> {antecedentesOdontologicos.usaHiloDental ? 'Sí' : 'No'}
                  <br />
                  <strong>Usa Pasta Dental:</strong> {antecedentesOdontologicos.usaPastaDental ? 'Sí' : 'No'}
                  <br />
                  <EditButton
                    titulo='Actualizar'
                    navigateTo='aaOdontologico'
                    object={antecedentesOdontologicos}
                    idHistoriaClinica={IdhistoriaClinica}
                    identificador={antecedentesOdontologicos.id}
                  />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p className="card-text ">No hay antecedente odontológico registrado.</p>
                  <NewAntButton titulo='Registrar' navigateTo='naOdontologico' identificador={IdhistoriaClinica} />
                </React.Fragment>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="success" style={{ width: '18rem' }}>
          <Card.Header>Patologicos</Card.Header>
          <Card.Body>
            <Card.Text>
              {antecedentesPatologicos ? (
                <React.Fragment>
                  <strong>Descripción:</strong> {antecedentesPatologicos.descripcion}
                  <br />
                  <strong>Medicación:</strong> {antecedentesPatologicos.medicacion}
                  <br />
                  <strong>Id Tipo Antecedente:</strong> {antecedentesPatologicos.idTipoAntecedente}
                  <br />
                  <EditButton
                    titulo='Actualizar'
                    navigateTo='aaPatologico'
                    object={antecedentesPatologicos}
                    idHistoriaClinica={IdhistoriaClinica}
                    identificador={antecedentesPatologicos.id}
                  />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p className="card-text ">No hay antecedentes patologicos registrados.</p>
                  <NewAntButton titulo='Registrar' navigateTo='naPatologico' identificador={IdhistoriaClinica} />
                </React.Fragment>
              )}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
*/}
      <legend className="text-start mt-1">Planes de Tratamientos </legend>
      <hr className="border border-danger border-2 opacity-50"></hr>

      <div className="row justify-content-evenly">
        <CancelButton titulo='Volver' navigateTo='back' />
      </div>
    </div>
  );
};

export default Informacion;
