//Date and Time//
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
      <h3 class="titulo-articulo">${article.title}</h3>
      <img src="${article.image}" alt="${"imagen"}">
      <p class="texto-articulo">${article.content}</p>
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
    title: 'Titulo de prueba',
    content: 'Articulo de prueba Articulo de prueba Articulo de prueba Articulo de prueba Articulo de prueba Articulo de prueba Articulo de prueba Articulo de prueba Articulo de prueba Articulo de prueba',
    image: 'Imagen'
  },
  {
    title: 'Titulo de prueba',
    content: 'Articulo de prueba Articulo de prueba Articulo de prueba Articulo de prueba Articulo de prueba',
    image: 'Imagen'
  },
  {
    title: 'Titulo de prueba',
    content: 'Articulo de prueba',
    image: 'imagen de prueba'
  }
];


renderArticles();