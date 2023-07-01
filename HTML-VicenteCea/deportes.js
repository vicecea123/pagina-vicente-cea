window.onload = function() {
    var datetimeElement = document.getElementById("datetime");
  
  
    setInterval(function() {
      // Crear un nuevo objeto de fecha
      var currentDatetime = new Date();
  
      // Formatear la fecha y la hora
      var formattedDatetime = currentDatetime.toLocaleString();
  
      // Actualizar el contenido del elemento con la fecha y la hora formateadas
      datetimeElement.innerHTML = formattedDatetime;
    }, 1000);
}


  
    let articles = []; // Array para almacenar los artículos

    function renderArticles() {
      const articleContainer = document.getElementById('article-container');
      articleContainer.innerHTML = '';
    
      articles.forEach((article) => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('article-card');
        articleCard.innerHTML = `
          <h3>${article.title}</h3>
          <img src="${article.image}" alt="${article.title}">
          <p>${article.content}</p>
        `;
        articleContainer.appendChild(articleCard);
      });
    
      updateTotalArticles();
    }
    
    function updateTotalArticles() {
      const totalArticles = document.getElementById('total-articles');
      totalArticles.textContent = articles.length;
    }
    
    function openForm() {
      const articleForm = document.getElementById('article-form');
      articleForm.style.display = 'block';
    }
    
    function submitForm(event) {
      event.preventDefault();
    
      const titleInput = document.getElementById('title');
      const contentInput = document.getElementById('content');
      const imageInput = document.getElementById('image');
    
      const title = titleInput.value;
      const content = contentInput.value;
      const image = imageInput.value;
    
      if (title && content && image) {
        const newArticle = {
          title: title,
          content: content,
          image: image
        };
    
        articles.push(newArticle);
        renderArticles();
    
        // Limpiar formulario
        titleInput.value = '';
        contentInput.value = '';
        imageInput.value = '';
    
        // Ocultar formulario
        const articleForm = document.getElementById('article-form');
        articleForm.style.display = 'none';
      }
    }
    
    function submitContactForm(event) {
      event.preventDefault();
    
      const nameInput = document.getElementById('name');
      const messageInput = document.getElementById('message');
    
      const name = nameInput.value;
      const message = messageInput.value;
    
      if (name && message) {
        // Enviar el formulario de contacto (puedes agregar aquí la lógica para enviar el formulario)
    
        // Limpiar formulario
        nameInput.value = '';
        messageInput.value = '';
      }
    }
    
    
    // Cargar artículos iniciales
    articles = [
      {
        title: 'Nicolás Jarry y su buen inicio en Roland Garros',
        content: 'El tenista chileno Nicolás Jarry (35° de la ATP) tuvo palabras para su estreno en Roland Garros luego de vencer al boliviano Hugo Dellien en sets corridos, y confirmó que una de las claves de su buen rendimiento durante 2023 es tener a su familia junto a él en los viajes que realiza. Estoy muy contento con ganar. Estaba nervioso por ser primera ronda, y más por las ganas de seguir jugando un buen tenis pero creo que manejé muy bien los tiempos hoy. Fueron importantes los días anteriores para una buena adaptación, con tranquilidad y con pocas horas de entrenamiento pero de mucha calidad para mantener el buen nivel de juego y eso me tiene contento, dijo Jarry en conferencia de prensa. El número uno de Chile expresó que después de ganar en Ginebra lo principal era recuperarse bien y hoy dar lo mejor durante el partido. Lo di todo, mentalmente fue una batalla dura porque Hugo es un guerrero y en cada chance que tuvo, logré jugar bien, de manera inteligente.',
        image: ''
      },
      {
        title: 'Berizzo envía potente mensaje a sus citados y elogia a un joven talento',
        content: 'En medio del anuncio de MG como patrocinador oficial de la Roja, Eduardo Berizzo abordó múltiples temas. Uno de ellos fue su balance al mando de la Selección, donde justamente hoy completó un año desde su presentación.',
        image: ''
      },
      {
        title: 'Portazo de Coquimbo a Conmebol: No estoy muy de acuerdo',
        content: 'De cara a la Copa Libertadores Sub 20 que se desarrollará en Chile, Coquimbo asomaba como una de las sedes para recibir el torneo. El estadio Francisco Sánchez Rumoroso, con capacidad para más de 18 mil espectadores, era una opción atractiva para Conmebol, la entidad encargada de organizar el evento. Sin embargo, en las últimas horas, esa alternativa se cayó. Ali Manouchehri, alcalde de la comuna, comunicó que no facilitarán el recinto, con la idea de privilegiar los intereses deportivos de Coquimbo Unido"',
        image: ''
      }
    ];
    
    renderArticles();