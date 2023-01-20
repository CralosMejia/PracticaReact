import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillHeart } from "react-icons/ai";
import { Button } from 'react-bootstrap'


import "../../App.css"
import { useState } from 'react';

export const Juego = (props) => {

    const [vida, setVida] = useState(3);
    const [desechoId, setDesechoID] = useState(1);
    const [score, setScore] = useState(0);

    const cambiarNumRandom = () => {
        let numRan = Math.floor(Math.random() * 10);
        setDesechoID(numRan + 1)
    }

    const desechos = [
        {
            id: 1,
            nombre: "Botella-Plastica",
            basurero: 3
        },
        {
            id: 2,
            nombre: "Funda-Plastica",
            basurero: 3
        },
        {
            id: 3,
            nombre: "Lata-Aluminio",
            basurero: 1
        },
        {
            id: 4,
            nombre: "bandeja-Aluminio",
            basurero: 1
        },
        {
            id: 5,
            nombre: "Papel",
            basurero: 2
        },
        {
            id: 6,
            nombre: "Carton",
            basurero: 2
        },
        {
            id: 7,
            nombre: "Inyeccion",
            basurero: 4
        },
        {
            id: 8,
            nombre: "guantes",
            basurero: 4
        },
        {
            id: 9,
            nombre: "manzana",
            basurero: 5
        },
    ]

    const clickBoton = (idBasurero) => {
        let deschoItem = desechos.filter(desecho => desecho.id === desechoId);
        if (deschoItem[0].basurero === idBasurero) {
            setScore(score + 10)
            cambiarNumRandom();
        } else {
            console.log(vida)
            if (vida === 1) {
                props.juegoTerminado()
            } else {
                setVida(vida - 1)
                cambiarNumRandom();

            }
        }
    }

    return <>
        <Row className='Info-principal'>
            <Col className='GeneralInfo'>
                <h2>{props.nombre}
                    {vida ===3?<AiFillHeart />:""}
                    {vida >=2?<AiFillHeart />:""}
                    {vida >=1?<AiFillHeart />:""}
                </h2>
            </Col>
            <Col className='GeneralInfo'>
                <h2>Score: {score}</h2>
                <Button variant="danger" onClick={() => { props.juegoTerminado() }}>Salir</Button>


            </Col>
        </Row>
        <Row className='item-container'>
            <span className={`item-${desechoId}`}></span>
        </Row>
        <Row className='basureros-Contenedor'>
            <button className='boton-1 aluminio' onClick={() => { clickBoton(1) }} />
            <button className='boton-2 PapelCarton' onClick={() => { clickBoton(2) }} />
            <button className='boton-3 Plastico' onClick={() => { clickBoton(3) }} />
            <button className='boton-4 ResiduosPeligrosos' onClick={() => { clickBoton(4) }} />
            <button className='boton-5 No reciclable' onClick={() => { clickBoton(5) }} />
        </Row>
    </>

}