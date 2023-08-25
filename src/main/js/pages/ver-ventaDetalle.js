const React = require('react');
const { Link, useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');

const VerVentaDetallePage = () => {

    let { id } = useParams();
    const [ventaDetalle, setVentaDetalle] = useState({});
    const [ventas, setVenta] = useState([]);
    const [productos, setProducto] = useState([]);
    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/ventasDetalle/' + id
        }).done(response => setVentaDetalle(response.entity))
        client({
            method: 'GET',
            path: '/api/ventas/' + id + '/formacion'
        }).done(response => setVenta(response.entity))
        client({
            method: 'GET',
            path: '/api/productos/' + id + '/formacion'
        }).done(response => setProducto(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Venta Detalle</h1>
            <hr />

            <table border="1">
                <tbody>
                    <tr>
                        <th>Cantidad</th>
                        <td>{ventaDetalle.cantidad}</td>
                    </tr>
                </tbody>
            </table>
            <hr />

            <h2>Formación</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Venta</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {ventas.map(venta=>{
                        return(
                            <tr key={venta.ID}>
                                <td>{venta.VENTA}</td>
                                
                            </tr>
                        )
                    })}

                </tbody>

            </table>
            <table border="1">
                <thead>
                    <tr>
                        <th>Producto</th>
                    </tr>
                </thead>
                <tbody>

                    {productos.map(producto=>{
                        return(
                            <tr key={producto.ID}>
                          <td>{producto.PRODUCTO}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>
            <hr />
            <Link to={`/ver-ventaDetalle/${id}/nuevo-venta`}>Nuevo Venta</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerVentaDetallePage;