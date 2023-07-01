<?php
class Solicitud{
    public $nombre;
    public $email;
    public $fecha;
    public $fono;
    public $contraseña;

    function __construct($nombre, $email, $fecha, $fono, $contraseña){
        $this->nombre = $nombre;
        $this->email = $email
        $this->fecha = $fecha;
        $this->fono = $fono;
        $this->contraseña = $contraseña;
    }

    function get_nombre(){
        return $this->nombre;
        
    }
    function get_email(){Z
        return $this->email;
        
    }
    function get_fecha(){
        return $this->fecha;
        
    }
    function get_fono(){
        return $this->fono;
        
    }
    function get_contraseña(){
        return $this->contraseña;
        
    }

}

$misolicitud = new Solicitud($_POST['nombre'], $_POST['email'], $_POST['fecha'], $_POST['fono'], $_POST['contraseña']);

