const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { productos: [], ventas: [], ventasDetalle: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/productos' }).done(response => {
			this.setState({ productos: response.entity._embedded.productos });
		});

		client({ method: 'GET', path: '/api/ventas' }).done(response => {
			this.setState({ ventas: response.entity._embedded.ventas });
		});

		client({ method: 'GET', path: '/api/ventasDetalle' }).done(response => {
			this.setState({ ventasDetalle: response.entity._embedded.ventasDetalle });
		});

	}
	render() {
		return (
			<>
				<h1>Final App</h1>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Productos" emoji="🎸" />
						<ProductoList productos={this.state.productos} />
						<Link to="/nuevo-producto">Nuevo Producto</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Ventas" emoji="🎶" />
						<VentaList ventas={this.state.ventas} />
						<Link to="/nuevo-venta">Nueva Venta</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="VentasDetalle" emoji="👩🏼‍🎤" />
						<VentaDetalleList ventasDetalle={this.state.ventasDetalle} />
						<Link to="/nueva-ventaDetalle">Nueva Detalle de Venta</Link>
					</div>
				</div>


			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class ProductoList extends React.Component {
	render() {
		const productos = this.props.productos.map(producto =>
			<Producto key={producto._links.self.href} producto={producto} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Precio</th>
						
					</tr>
					{productos}
				</tbody>
			</table>
		)
	}
}
class VentaList extends React.Component {
	render() {
		const ventas = this.props.ventas.map(venta =>
			<Venta key={venta._links.self.href} venta={venta} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Total</th>
						
					</tr>
					{ventas}
				</tbody>
			</table>
		)
	}
}
class VentaDetalleList extends React.Component {
	render() {
		const ventasDetalle = this.props.ventasDetalle.map(ventasDetalle =>
			<VentaDetalle key={ventasDetalle._links.self.href} ventasDetalle={ventasDetalle} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Venta</th>
						<th>Producto</th>
						<th>Cantidad</th>
					</tr>
					{ventaDetalles}
				</tbody>
			</table>
		)
	}
}

class Producto extends React.Component {
	render() {
		const id = this.props.producto._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.producto.nombre}</td>
				<td>{this.props.producto.categoria}</td>
				<td>
					<Link to={"/ver-producto/" + id}>Ver</Link> | 
					<Link to={"/editar-producto/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}
class Venta extends React.Component {
	render() {
		const id = this.props.venta._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.venta.total}</td>
				<td>
					<Link to={"/ver-venta/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}
class VentaDetalle extends React.Component {
	render() {
		const id = this.props.ventaDetalle._links.self.href.split("/").slice(-1)

		return (
			<tr>
				
				<td>{this.props.ventaDetalle.venta}</td>
				<td>{this.props.ventaDetalle.producto}</td>
				<td>{this.props.ventaDetalle.cantidad}</td>
				<td>
					<Link to={"/ver-ventaDetalle/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage;