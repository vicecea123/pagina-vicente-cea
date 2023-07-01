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
        title: 'Presión sobre las “princesas de media jornada” de Países Bajos',
        content: 'Países Bajos tiene la mayor tasa europea de empleados a tiempo parcial, con un importante desequilibrio según el sexo: un 75% de las mujeres trabajan un promedio de 29 horas a la semana, frente a las 39 horas sumadas por los hombres, según datos del centro de estadística.',
        image: ''
      },
      {
        title: 'Trabajar desde casa y darse cuenta de lo que importa',
        content: 'La economía de Estados Unidos ha experimentado una notable recuperación tras la recesión provocada por la covid en 2020. Los tan temidos efectos duraderos de la pandemia nunca se han hecho realidad: el empleo, la participación en la población activa y el PIB vuelven a corresponderse con las previsiones anteriores a la crisis sanitaria. Todavía estamos esperando a ver si los republicanos de la Cámara dilapidan este logro empujando a Estados Unidos a una crisis de la deuda totalmente arbitraria. Pero hoy he pensado darme un descanso del agobio y hablar de algo importante en lo que la economía estadounidense está funcionando incluso mejor de lo que las cifras habituales dan a entender.',
        image: ''
      },
      {
        title: 'Las constructoras españolas reinan en la era de las obras masivas',
        content: 'Una cifra significa mucho. 128.000 millones de euros equivalen al patrimonio que tiene Carlos III de Inglaterra, al PIB de Puerto Rico o a lo que la banca turca perdió con la crisis de 2021. Es también lo que suma la cartera de obras de las grandes multinacionales españolas cotizadas: ACS, Ferrovial, Acciona, Sacyr, OHLA, FCC y el Grupo San José. Sus ventas agregadas ascendieron el año pasado a los 72.292 millones, 12.000 millones más que en 2021.',
        image: ''
      }
    ];
    
    renderArticles();