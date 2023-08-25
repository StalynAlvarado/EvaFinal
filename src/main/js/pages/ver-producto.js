const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerProductoPage = () => {

    let { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/productos/' + id
        }).done(response=>setProducto(response.entity))
    }, [])



    return (
        <>
            <h1>Ver Producto</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{producto.nombre}</td>
                </tr>
                <tr>
                    <th>Categoría</th>
                    <td>{producto.precio}</td>
                </tr>
               
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerProductoPage;