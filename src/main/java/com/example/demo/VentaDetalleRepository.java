package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "ventasDetalle", path = "ventasDetalle")
public interface VentaDetalleRepository extends CrudRepository<VentaDetalle, Long> {
    
}
