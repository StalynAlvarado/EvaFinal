const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');




const NuevoVentaPage = () => {

    const [total, setTotal] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/ventas',
            entity: {total: total},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nueva Venta</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='total' name='total' onChange={e=>setTotal(e.target.value)} /> <br />
            <input type="submit" value="Nueva Venta" />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoVentaPage;