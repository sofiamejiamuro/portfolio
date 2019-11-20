<?php
   $nombre = $email = $subject = $mensaje = $para = $headers = $msjCorreo = NULL;

   if (isset($_POST['submit'])) {
      //Obtenemos valores input formulario
      $nombre = $_POST['nombre'];
      $correo = $_POST['correo'];
      $mensaje = $_POST['mensaje'];
      $para = 'sofiamejiamuro@gmail.com';

      $subject = "Correo de página web";

      //Creamos cabecera.
      $headers = 'From' . " " . $correo . "\r\n";
      $headers .= "Content-type: text/html; charset=utf-8";

      //Componemos cuerpo correo.
      $msjCorreo = "Nombre: " . $nombre;
      $msjCorreo .= "\r\n";
      $msjCorreo .= "Email: " . $correo;
      $msjCorreo .= "\r\n";
      $msjCorreo .= "Asunto: " . $subject;
      $msjCorreo .= "\r\n";
      $msjCorreo .= "Mensaje: " . $mensaje;
      $msjCorreo .= "\r\n";

    if (mail($para, $subject, $msjCorreo, $headers )) {
         echo "<script language='javascript'>
            alert('Mensaje enviado, muchas gracias.');
         </script>";
    } else {
         echo "<script language='javascript'>
            alert('fallado');
         </script>";

         echo $nombre;
         echo $correo;
         echo $mensaje;

    }
 } 
?>