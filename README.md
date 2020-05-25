# U05-T01: Preparando reserva hotelera

![imagen_previa.PNG](https://github.com/Ayoamaro/reservahotelera.github.io/blob/master/img/imagen_previa.PNG?raw=true)

## Requisitos mínimos
Partiendo de un fichero HTML que contenga ya creados los siguientes elementos para:
* Descripción o nombre del hotel
* Fecha de entrada
* Número de noches
* Habitaciones y huéspedes
* Botón de búsqueda

Se solicita realizar una Web que ofrezca al usuario un formulario de búsqueda de alojamientos que contenga:
* Descripción o nombre del hotel: caja de texto en la que el usuario podrá escribir.
* Fecha de entrada: input de tipo date que se inicializará con la fecha actual al cargarse la web. El usuario podrá seleccionar la fecha con el ratón.
* Número de noches: combo que permitirá elegir el número de noches. Se presentarán en el combo:
    * una serie de valores populares sobre la duración: 4, 7, 10 y 14 noches
    * también se ofrecerán en el mismo combo, que el usuario pueda incluir el número de nombres exactas

* Número de habitaciones y sus huéspedes (adultos y niños): se mostrará un texto con la información seleccionada
    * por defecto el número de habitaciones será 1, el número de adultos 2 y niños 0.
    * al hacer click en la caja de texto que muestra la información relativa al número de habitaciones y sus huéspedes se mostrarán las siguientes opciones:
        * un label con el texto "Adultos" y un combo para que el usuario pueda modificar el número. El valor debe cargarse con el que haya en la caja de texto con la información de huéspedes
        * un label con el texto "Niños" y un combo para que el usuario pueda modificar el número. El valor debe cargarse con el que haya en la caja de texto con la información de huéspedes
        * Si se seleccionan niños (es decir, el número de niños es mayor que cero) se mostrará un combo por cada niño para que el usuario pueda introducir la edad.
        
Inicialmente se mostrará el texto "Edad" como valor de edad.
        * Puede suceder que el usuario cambie en cualquier momento el número de niños, teniendo que aparecer tantos combos pidiendo las edades. De esta manera podría suceder que el usuario reduzca el número de niños y por tanto debería ajustarse el número de combos para las edades que aparecen (desapareciendo)
        * También aparecerá un botón para añadir más habitaciones.
            * La primera habitación no se podrá borrar. En el resto de habitaciones se podrán borrar, mostrándose una X o un icono que sugiera la acción
            * Una vez el usuario ha introducido los datos el usuario pulsará el texto "Hecho", desapareciendo la opciones para elegir la distribuciones de huéspedes y cargándose dicha información sobre las habitaciones.

Una vez el usuario haga click en el botón buscar, se mostrará por consola un resumen de las opciones elegidas por el usuario.

## Ejecución
1. Descargar el [Proyecto](https://bit.ly/2TDhchl) y descomprimir
2. Abrir con [Visual Studio Code](https://code.visualstudio.com) o algún editor de código
3. Descargar el [Live Server](https://bit.ly/3elOzNx)
3. Abrir el **index.html** y ejecutarlo con la opción "Go Live"

## Hecho con
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - **58,87‬%**
* [HTML5](https://developer.mozilla.org/es/docs/HTML/HTML5) - **25,00%**
* [Bootstrap 4](https://getbootstrap.com) - **16,13%**
