$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
  
    envelope.click(function() {
      open();
    });
    btn_open.click(function() {
      open();
    });
    btn_reset.click(function() {
      close();
    });
  
    // Nuevo controlador de eventos para el área de clic
    $(".letter-click-area").click(function() {
      openLargeCard();
    });
  
    function open() {
      envelope.addClass("open")
        .removeClass("close");
    }
  
    function close() {
      envelope.addClass("close")
        .removeClass("open");
    }
  
    // Función para abrir el div de 300x500 con el texto deseado
    function openLargeCard() {
      // Crear un nuevo div
      var largeCard = $("<div>").addClass("large-card");
      // Establecer dimensiones y estilos
      largeCard.css({
        width: "300px",
        height: "500px",
        background: "#ffffff",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1000",
        padding: "20px",
        boxSizing: "border-box",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        overflow: "auto" // Añadir scroll
      });
      // Agregar texto al div
      largeCard.html("<p>Querida Krishna,</p><p>Hoy, me encuentro aquí, tratando de poner en palabras todo lo que siento cuando pienso en ti. Cada vez que veo tus labios curvados en una sonrisa, siento cómo mi corazón se ilumina con una alegría indescriptible. Es esa sonrisa la que ilumina incluso los días más oscuros y me recuerda que la felicidad está siempre a nuestro alcance.</p><p>Tu risa, oh tu risa, es música para mis oídos. Es como si cada nota fuera una melodía que resuena en mi alma y me llena de una calidez reconfortante. No hay nada en este mundo que pueda compararse con el sonido de tu risa, y cada vez que la escucho, sé que estoy exactamente donde pertenezco: a tu lado.</p><p>Krishna, más allá de tu belleza exterior, lo que más admiro es la hermosa persona que eres por dentro. Eres comprensiva, amable y siempre estás dispuesta a tender una mano amiga a quienes te rodean. Tu bondad es como un faro en la oscuridad, guiándome incluso en los momentos más difíciles.</p><p>Y hablando de esos momentos difíciles, quiero que sepas lo agradecido que estoy de tenerte a mi lado durante ellos. En los días en que el peso del mundo parece demasiado, tú estás ahí para sostenerme, para apoyarme y para recordarme que no estoy solo. No hay palabras suficientes para expresar cuánto significa eso para mí.</p><p>Krishna, eres más que una buena mujer; eres mi compañera, mi confidente y mi amor. Estoy agradecido cada día por tenerte en mi vida y por la belleza que traes a cada momento. Espero poder seguir compartiendo risas, sonrisas y momentos inolvidables contigo, hoy y siempre.</p><p>Con todo mi amor,</p><p>Kevin</p>");
  
      // Agregar el div al cuerpo del documento
      $("body").append(largeCard);
    }
});
