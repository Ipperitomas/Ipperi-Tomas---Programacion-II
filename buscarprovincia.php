<?php

$provincias_argentinas = array(
    "Buenos Aires","Catamarca","Chaco","Chubut","Córdoba","Corrientes","Entre Ríos","Formosa"
    ,"Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz",
    "Santa Fe","Santiago del Estero","Tierra del Fuego, Antártida e Islas del Atlántico Sur","Tucumán"
);


$provincias_uruguayas = array(
    "Artigas","Canelones","Cerro Largo","Durazno","Colonia","Flores","Florida","Lavalleja"
    ,"Colonia","Maldonado","Montevideo","Paysandú","Rio Negro","Rivera","Rocha","Salto","San Jose","Tacuarembó","Treinta y tres",
    "Soriano"
);


$pais_selected = false;
if(!empty($_GET)){
    $pais_selected = $_GET['p'];
}

$array_provincias = array();

if($pais_selected == "uru"){
    $array_provincias = $provincias_uruguayas;
    
}else{
    $array_provincias = $provincias_argentinas;
}

// $array_provincias = object $array_provincias;
// var_dump(json_decode(json_encode($array_provincias)));
$array_provincias = (object) $array_provincias;
echo json_encode($array_provincias);



?>