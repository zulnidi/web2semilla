/*
Armar Boletin semanal
Descargar PDF
Ver Online
Acceder
Explorar
*/
//librerías jsPDF (es para generar PDFs) y html2canvas (es para capturar contenido como imagen)

const downLoadPDF = () => {
  // Lógica para descargar el PDF
  /*       const function downLoadPDF() {
            document.getElementById("btnDescargar").addEventListener("click", () => {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                html2canvas(document.getElementById("contenido")).then(canvas => {
                const imgData = canvas.toDataURL("image/png");
                const imgProps = doc.getImageProperties(imgData);
                const pdfWidth = doc.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                doc.save("documento.pdf");
                });
            });
            };*/
  // lo que hace el getElementById es buscar el elemento con el id "btnDescargar" en el documento HTML y el addEventListener permite agregar un evento de clic a ese elemento
  document.getElementById("btnDescargar").addEventListener("click", () => {
    // Crear un nuevo documento PDF, el window.jspdf se utiliza para acceder a la biblioteca jsPDF
    const { jsPDF } = window.jspdf;
    // Se crea un objeto de jsPDF
  const doc = new jsPDF();

  // Capturar el contenido con estilos, el .then permite manipular el canvas una vez que se ha renderizado
  html2canvas(document.getElementById("contenido")).then(canvas => {
    // Convertir el canvas(es decir, el contenido renderizado) a imagen
    const imgData = canvas.toDataURL("image/png");
    // Obtener las propiedades de la imagen, o sea su ancho y alto
    const imgProps= doc.getImageProperties(imgData);
    // Obtener el ancho y alto del PDF
    const pdfWidth = doc.internal.pageSize.getWidth();
    // Calcular la altura del PDF manteniendo la relación de aspecto
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // Agregar la imagen al PDF con la posición y tamaño calculados en base a la relación de aspecto
    doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    doc.save("mi_documento.pdf");
  });
});
};
'-------------------------------------------------------------------'

const verOnline = () => {
  // Lógica para ver el boletín en línea
  html2canvas(document.getElementById("contenido")).then(canvas => {
    //generar el pdf con jspdf
    const { jsPDF } = window.jspdf;
    const docu = new jsPDF();
    // tomar captura
    const imgData = canvas.toDataURL("image/png");
    //Insertas la captura (con tus gráficos y estilos).
    docu.addImage(imgData, 'PNG',0,0);
    // Abre el PDF en una nueva ventana
 // window.open(docu.output("bloburl"), "_blank");
    docu.output('dataurlnewwindow');

  });

};

'-------------------------------------------------------------------'
const access = ()=> {        
    html2canvas(document.getElementById("contenidoRenderizado")).then(canvas => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const imgData = canvas.toDataURL("image/png");
        const imgProps = doc.getImageProperties(imgData);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        doc.output("dataurlnewwindow");
    });
};

'-------------------------------------------------------------------'
const explorar = () => { // modificar
  // Lógica para explorar más recursos
  html2canvas(document.getElementById("contenidopor explorar")).then(canvas => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const imgData = canvas.toDataURL("image/png");
        const imgProps = doc.getImageProperties(imgData);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        doc.output("dataurlnewwindow");
    });
};

/*          contenido html para tener en cuenta para EXPLORAR 

Con el fin de que sea algo tipo un buscador/galería donde el usuario puede encontrar otros informes 
(y si quiere, abrirlos como PDF en la misma página)

<div id="explorar">
  <h2>Explorar Informes</h2>
  
  <!-- Buscador -->
  <input type="text" id="buscador" placeholder="Buscar informes...">
  
  <!-- Galería de informes -->
  <div id="galeria">
    <div class="informe" data-titulo="Informe Agua">
      <h3>Informe Agua</h3>
      <button onclick="verInforme('informeAgua')">Ver PDF</button>
    </div>
    <div class="informe" data-titulo="Informe Salud">
      <h3>Informe Salud</h3>
      <button onclick="verInforme('informeSalud')">Ver PDF</button>
    </div>
    <div class="informe" data-titulo="Informe Educación">
      <h3>Informe Educación</h3>
      <button onclick="verInforme('informeEducacion')">Ver PDF</button>
    </div>
  </div>
</div>

<!-- Contenidos ocultos que luego convertiremos en PDF -->
<div id="informeAgua" class="contenidoInforme" style="display:none;">
  <h2>Informe Agua</h2>
  <p>Datos y gráficas sobre agua.</p>
</div>

<div id="informeSalud" class="contenidoInforme" style="display:none;">
  <h2>Informe Salud</h2>
  <p>Datos y gráficas sobre salud.</p>
</div>

<div id="informeEducacion" class="contenidoInforme" style="display:none;">
  <h2>Informe Educación</h2>
  <p>Datos y gráficas sobre educación.</p>
</div>

*/