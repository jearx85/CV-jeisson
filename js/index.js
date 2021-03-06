const contenido = () => {
  const view = `<div class="container">
  <div class="row">
      <div class="col-lg-5">
          <div class="card-1">
              <img class="foto_document" src="./img/foto.jpg" alt="foto">
              <div class="card-body">
                <h3 class="card-title">Jeisson Estevens Araque Ramirez</h3>
                <p class="card-text">Estudiante de quinto semestre de tecnología en desarrollo de software en la IU digital de Antioquia,
                  con conocimientos en Java, Python, HTML, CSS, Javascript,
                  SQL y en tecnologías como Git, GitHub.
                </p>
                <ul>
                  <h3>Contacto</h3>
                  <li class="item-list">
                  <a href="https://www.linkedin.com/in/jeisson-araque-0b01948a" target="_blank"><img src="./img/linkedin.png" alt=""></a> LinkedIn
                  </li>
                  <li class="item-list">
                  <a href="https://api.whatsapp.com/send?phone=+573217982655" target="_blank"><img src="./img/Whastapp.png" alt="Whastapp.png"></a> +57 321-798-26-55
                  </li>
                  <li class="item-list">
                      <a href="mailto:jearx@hotmail.com"><img src="./img/email.png" alt="Email.png"></a> jearx@hotmail.com                
                  </li>
              </ul>
              </div>
            </div>
      </div>
      
      <div class="col-lg-7">
          <div class="card">
              <div class="card-header">
                <h1>Habilidades</h1>
              </div>
              <div class="card-body">
                <section>
                  <img data-bs-toggle="tooltip" data-bs-placement="bottom"
                  title="Python" src="./img/python.png" class="logoP" alt="python.png">
                   
                  <img data-bs-toggle="tooltip" data-bs-placement="bottom"
                  title="HTML5" src="./img/html5.png" class="logoP" alt="html.png">

                  <img data-bs-toggle="tooltip" data-bs-placement="bottom"
                  title="CSS" src="./img/css.png" class="logoP" alt="CSS.png">

                  <img data-bs-toggle="tooltip" data-bs-placement="bottom"
                  title="JavaScript" src="./img/Js.png" class="logoP" alt="JavaScript.png"> 
                 
                  <img data-bs-toggle="tooltip" data-bs-placement="bottom"
                  title="Angular" src="./img/angular.png" class="logoP" alt="Angular.png">
                
                  <img data-bs-toggle="tooltip" data-bs-placement="bottom"
                  title="Java" src="./img/java.png" class="logoP" alt="Java.png">
                 
                  <img data-bs-toggle="tooltip" data-bs-placement="bottom"
                  title="Bootstrap" src="./img/bootstrap.png" class="logoP" alt="Bootstrap.png">
              
                  <img data-bs-toggle="tooltip" data-bs-placement="bottom"
                  title="MySQL" src="./img/mysql.png" class="logoP" alt="MySQL.png">  

                </section>
              </div>
            </div> 

            <div class="card">
              <div class="card-header">
                <h1>Idiomas</h1>
              </div>
              <div class="card-body">
                <section>
                    <h5>Ingles</h5>
                  <p>Intermedio</p>
                </section>
              </div>
            </div>

            <div class="card">
              <div class="card-header">
                <h1>Estudios</h1>
              </div>
              <div class="card-body">
                <section>
                  <h5>Bachiller academico</h5>
                  <p>Institucion: Educativa Fontidueño Jaime Arango Rojas<br>
                     Bello Antioquia<br>
                     2003
                  </p>
                  <h5>Técnico laboral en Auxiliar Administrativo</h5> 
                  <p>Politécnico de Colombia<br>
                     Medellin Antioquia<br>
                     2018
                  </p>
                  <h5>Tecnología en desarrollo de software</h5> 
                  <p>IU Digital de Antioquia<br>
                     Medellin Antioquia<br>
                     En curso<br>
                     2020-2022
                  </p>
                  <h5>Diplomado en programacion en java</h5> 
                  <p>Politécnico de Colombia<br>
                     Medellin Antioquia<br>
                     2019
                  </p>
                  <h5>Tecnico en habilidades en programación con énfasis en aplicaciones web</h5> 
                  <p>UNAB/Misión TIC<br>
                     2021
                  </p>
              </section>
              </div>
            </div>  
            <div class="card">
              <div class="card-header">
                <h1>Experiencia laboral</h1>
              </div>
              <div class="card-body">
                <section>
                  <h5>Evaluador de practicantes</h5>
                  <p>Politécnico de Colombia<br>
                     Medellin Antioquia<br>
                     2017-Actual.
                  </p>
                  <h5>Operario de producción</h5> 
                  <p>Premex<br>
                     Medellin Antioquia<br>
                     2015-2017
                  </p>
                  <h5>Patrullero</h5> 
                  <p>Policia Nacional de Colombia.<br>
                     2010-2015
                  </p>
                  <h5>Operario de producción</h5>  
                  <p>Compañia de galletas Noel<br>
                     Medellin Antioquia<br>
                     2004-2009
                  </p>
              </section>
              </div>
            </div> 
      </div>
  </div>
</div>`;
return view;
}

document.getElementById("cont").innerHTML = contenido();

