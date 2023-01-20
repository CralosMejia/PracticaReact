import "../App.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";



export const VentanaInicio = ({ obtenerNombreJugador }) => {

    const [nombre, setNombre] = useState('');

    const obtenerNombre = (e) => {
        setNombre(e.target.value);
    }


    return <div className= "VentanaInicio">
        <Card>
            <Card.Header className="text-center">Juego Reciclaje</Card.Header>
            <Card.Body>
                <Card.Title>Instrucciones</Card.Title>
                <Card.Text>
                    El juego consiste en dar click al basurero que corresponda cada desecho, si das click en el basurero incorrecto perderas una vida, en caso contrario sumaras puntos
                </Card.Text>
                <Card.Subtitle>Indicaciones</Card.Subtitle>
                <Form.Label>Ingresa tu nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu Nombre" onChange={obtenerNombre} />
                <Card.Text>
                </Card.Text>
                <Button variant="success" onClick={() => obtenerNombreJugador(nombre)}>Iniciar</Button>
            </Card.Body>
        </Card>
    </div>
}