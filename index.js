    
    /*
    
    Archivo principal de funciones JavaScript

        Funcion Sumar(alerta)
            Recibe el parametro alerta que define si el mensaje es mostrado por alert o insertado en un elemento html
            Se encarga de agarra 2 numeros y comprobar y sumar los mismos
        
        Funcion ColorearP(color,poner_color)
            Recibe 2 parametros
            color -> Indica el color a ingresarle el tag p
            poner_color -> Indica si poner el color o sacarlo
            Se encarga de agarrar el texto de los tag p y ponerlos en el color indicado

        Funcion RandomNumeros()
            Se encarga de agarrar 10 numeros aleatorios del 1 al 100 y mostrarlos en un tag html previamente definido

        Funcion CambiarColor(self)
            Recibe el parametro self, que indica el elemento html sobre el cual se llama la funcion
            Se encarga de cambiarle el color a una palabra previamente definida dependiendo el boton del color presionado

        Funcion MostrarMensajeDatos()
            Se encarga de buscar los elementos que contienen el nombre y apellido que ingreso el usuario, comprobarlos y mostrarlos por pantalla

        Funcion CalcularEdad()
            Se encarga de agarrar la fecha de nacimiento del usuario y compararla con la fecha actual para devolverle un aproximado de su edad

        Funcion MostrarValor(self)
            Recibe el parametro self, que indica el elemento html sobre el cual se llama la funcion
            Se encarga de agarrar el value y cuando se checkea la opcion mostrarlo en su opcion correspondiente

        Funcion ComprobarVacios(valores,mensaje = "Vacio")
            Recibe como parametros valores, que puede ser un objeto de valores o simplemente uno
            y mensaje que es el mensaje que vamos a arrojar al usuario
            Se encarga de comprobar si el value de un elemento html no esta vacio


    */
    window.onload = function(){
        RandomNumeros();
    }

    //Ejercicio 2 y 5 Recibir 2 numeros y sumarlos
    function Sumar(alerta = true){
        resultado = 0;
        //Suma indica que se comprobo todo para sumar
        suma = false;
        if(alerta){
            numero1 = document.getElementById("numero_1_ej2");
            numero2 = document.getElementById("numero_2_ej2");
            valores = [numero1,numero2];
            suma = ComprobarVacios(valores);
            if(suma){
                resultado = parseInt(numero1.value)+parseInt(numero2.value);
                alert("Resultado de la suma : "+resultado)   
            }
        }else{
            numero1 = document.getElementById("numero_1_ej5");
            numero2 = document.getElementById("numero_2_ej5");
            valores = [numero1,numero2];
            suma = ComprobarVacios(valores);
            if(suma){
                var span_resultado = document.getElementById("resultado_suma");
                if(span_resultado){
                    span_resultado.classList.remove("d-none");
                    resultado = parseInt(numero1.value)+parseInt(numero2.value);
                    span_resultado.innerText = "Resultado : "+resultado;
                }
            }
        }
    }
    
    //Funcion para el ejercicio 4
    function ColorearP(color,poner_color){
        if(color){
            var p = document.querySelectorAll("p");
            if(poner_color){
                if(p){
                    for (let index = 0; index < p.length; index++) {
                        const element = p[index];
                        element.setAttribute("style","color:"+color);
                        
                    }
                }
            }else{
                if(p){
                    for (let index = 0; index < p.length; index++) {
                        const element = p[index];
                        element.removeAttribute("style");
                    }
                }

            }
        }
    }

    //Ejercicio 6
    function RandomNumeros(){
        span_numeros = document.getElementById("numeros_random");
        if(span_numeros.innerText != ""){
            span_numeros.innerText = "";
        }
        for (let index = 0; index < 10; index++) {
            numero = Math.round(Math.random()*100);
            span_numeros.innerText += numero+((index < 9) ? " , " : "");
        }
    }
    //Ejercicio 7
    function CambiarColor(self){
        if(self){
            TextoAcolorear = document.getElementById("texto_colorear");
            if(TextoAcolorear){
                TextoAcolorear.setAttribute("style","color: "+self.id);
            }
        }
    }
    //Ejercicio 8

    function MostrarMensajeDatos(){
        Nombre = document.getElementById("nombre");
        Apellido = document.getElementById("apellido");
        
        mostrar = ComprobarVacios([Nombre,Apellido]);
        if(mostrar){
            alert(" Hola "+Nombre.value+" "+Apellido.value);
        }
    }  
    //Ejercicio 9 
    function CalcularEdad(){
        //Agarramos la fecha actual
        var hoy = new Date();
        //Conseguimos la fecha ingresada por el usuario
        fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
        //Calculamos el dia completo de hoy 
        hoy = hoy.getFullYear() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getDate();
        //Luego pasamos ambas fechas a milisegundos
        hoy = new Date(hoy).getTime();

        fecha_nacimiento = new Date(fecha_nacimiento).getTime();

        //Restamos las fechas
        edad =   hoy - fecha_nacimiento;
        //Las pasamos a dias nuevamente
        edad = edad/(1000*60*60*24);
        //Dividimos por la cantidad de dias del año
        edad = edad/365;
        //Mostramos, usamos floor para redondear siempre para abajo
        alert("Tu edad aproximada es : "+Math.floor(edad)+" años")
    }

    //Ejercicio 10
    function MostrarValor(self){
        if(self && self.id && self.value){
            var span = document.getElementById("text-"+self.id);
            if(span){
                span.innerText = "Selecciono la opcion: " + self.value;
            }
        }

    }


    //Funcion que recibe como parametro un objeto o un solo valor y retorna el mensaje de error en el caso de que haya
    //Si no devuelve true para que pueda seguir el ciclo normal
    function ComprobarVacios(valores,mensaje = "Vacio"){
        result = false;
        if(typeof valores == 'object'){
            for (let index = 0; index < valores.length; index++) {
                const element = valores[index];
                if(!element.value){
                    result = false;
                    var msg = element.getAttribute("msg");
                    alert(msg+ " " +mensaje);
                    break;
                }else{
                    result = true;
                }
            }
        }else{
            if(!valores){
                if(mensaje){
                    alert(mensaje);
                }
            }
        }
        return result;
    }