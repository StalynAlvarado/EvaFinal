package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final VentaRepository repositoryI;
	private final ProductoRepository repositoryM;
	private final VentaDetalleRepository repositoryB;
	

	@Autowired
	public DatabaseLoader(
		VentaRepository repositoryM,
		ProductoRepository repositoryI,
		VentaDetalleRepository repositoryB
			) {
		this.repositoryI = repositoryM;
		this.repositoryM = repositoryI;
		this.repositoryB = repositoryB;
		

	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryI.save(new Producto("leche",4));
		this.repositoryI.save(new Producto("arroz",3));
		this.repositoryI.save(new Producto("azucar",2));
		Producto iCaramelo = new Producto("Caramelo",6);
		this.repositoryI.save(iCaramelo);

		this.repositoryM.save(new Venta(8));
		Venta mArroz = new Venta(12);
		this.repositoryM.save(mArroz);
		Venta mVenta2 = new Venta(6);
		this.repositoryM.save(mVenta2);

                
		this.repositoryB.save(new VentaDetalle(mArroz,iCaramelo,2));
		


	}
}