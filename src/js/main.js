
// Alternancia entre tela de horários e tela de avisos.
document.addEventListener("DOMContentLoaded", function() {
    // Initial setup
    let currentPage = 2;
    showPage(currentPage);

    // Switch pages every minute
    setInterval(function() {
        currentPage = currentPage === 1 ? 2 : 2; // Alterar para 1
        showPage(currentPage);
    }, 1000);

    function showPage(pageNumber) {
        // Hide all pages
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => page.classList.remove('active'));

        // Show the selected page
        const currentPageElement = document.getElementById(`page${pageNumber}`);
        currentPageElement.classList.add('active');
    }

});


// Busca 5 avisos da api, apresenta o conteúdo do primeiro aviso e
// apresenta apenas o título dos outros 4 na barra lateral.
document.addEventListener('DOMContentLoaded', function() {
    fetch('lista-avisos.json')
        .then(response => response.json())
        .then(data => {
            // Extrair os 5 primeiros avisos da lista
            const primeirosAvisos = data.slice(0, 5);

            // Apresentar o primeiro aviso na div 'aviso-apresentado'
            const primeiroAviso = primeirosAvisos[0];
            document.querySelector('.aviso-apresentado__titulo').textContent = primeiroAviso.titulo;
            document.querySelector('.aviso-apresentado__texto').textContent = primeiroAviso.texto;
            document.querySelector('.aviso-apresentado__professor').textContent = primeiroAviso.professor;

            // Apresentar os títulos dos outros 4 avisos na div 'lista-avisos'
            const outrosAvisos = primeirosAvisos.slice(1);
            const listaAvisos = document.querySelector('.lista-avisos__titulo ul');
            outrosAvisos.forEach(aviso => {
                const avisoElement = document.createElement('li');
                avisoElement.textContent = aviso.titulo;
                listaAvisos.appendChild(avisoElement);
            });
        })
        .catch(error => console.error('Ocorreu um erro ao buscar dados da API:', error));
});

// Busca e atualiza a cada 5s a data e hora na tela.
function updateCurrentDate() {
    // Create a new Date object for the current date and time
    var currentDate = new Date();

    // Get the current date components
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Note: January is 0!
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    // Format the date as "DD/MM/YYYY - HH:MM"
    var formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year + ' - ' + (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;

    // Update the content of the element with id="currentDate"
    var spanElement = document.querySelector('#page2__header .data_hora span');
    spanElement.textContent = formattedDate;
}

// Call the function initially to display the current date and time
updateCurrentDate();

// Update the current date and time every 5 seconds
setInterval(updateCurrentDate, 5000);
