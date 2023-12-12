// NASA IMAGE OF THE DAY API
// Function to fetch and display NASA Image of the Day
async function fetchNasaImage() {
    const nasaImageContent = document.getElementById('nasaImageContent');

    try {
        const currentDate = new Date(new Date().toLocaleDateString());

        const apiKey = "ihIIGXz3FlZWsSCy7b4dUtuQDNmncKR4tkd3UrZA";
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate.toISOString().split('T')[0]}`;
        const response = await fetch(apiUrl);

        const data = await response.json();
        nasaImageContent.innerHTML = `
        <hr>
        <div class="text-center">
            <h3>${data.title}</h3>
            <img src="${data.url}" alt="${data.title}" class="nasa-image img-fluid">
            <br><br><hr>
            <p class="nasa-image-description">${data.explanation}</p>
            <hr>
        </div>
        `;

    } catch (error) {
    }
}


// KITUS API ANIME
// incluir las opciones en el select
async function fetchAnimeSuggestions() {
    const animeSelect = document.getElementById('animeSelect');

    try {
        const response = await fetch('https://kitsu.io/api/edge/trending/anime');
        const data = await response.json();
        
        data.data.forEach(anime => {
            const animeTitle = anime.attributes.titles.en || anime.attributes.canonicalTitle;
            const option = document.createElement('option');
            option.value = animeTitle;
            option.text = animeTitle;
            animeSelect.appendChild(option);
        });

        //para que sea responsiva
        animeSelect.classList.add('form-select');
    } catch (error) {
    }
}

// mostrar información en el container
async function fetchSelectedAnimeInfo() {
    const animeSelect = document.getElementById('animeSelect');
    const animeInfoContainer = document.getElementById('animeInfo');
    const selectedAnimeTitle = animeSelect.value;

    try {
        const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${selectedAnimeTitle}`);
        const data = await response.json();

        // Display anime information in the div
        if (data.data.length > 0) {
            const anime = data.data[0];
            const animeTitle = anime.attributes.titles.en || anime.attributes.canonicalTitle;
            const animeSynopsis = anime.attributes.synopsis;
            const animeImage = anime.attributes.posterImage.medium;

            animeInfoContainer.innerHTML = `
            <hr>
            <div class="text-center">
                <h3>${animeTitle}</h3>
                <img src="${animeImage}" alt="${animeTitle} Poster" class="nasa-image img-fluid">
                <br><br><hr>
                <p>${animeSynopsis}</p>
                <hr>
            </div>
            `;
        }
    } catch (error) {

    }
}


// API TRIVIA
const apiTriviaUrl = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium';

async function fetchTriviaQuestions() {
    try {
        const response = await fetch(apiTriviaUrl);
        if (response.ok) {
            const data = await response.json();
            const questionsContainer = document.getElementById('questions-container');
            data.results.forEach((question, index) => {

                const correctIndex = Math.floor(Math.random() * (question.incorrect_answers.length + 1)); 
                let options = [...question.incorrect_answers];
                options.splice(correctIndex, 0, question.correct_answer);//append la respuesta correcta en una posicion aleatoria
                //shuffleArray(options);

                const questionElement = document.createElement('div');
                questionElement.innerHTML = `
                <div>
                    <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                    ${options.map((option, i) => `<button onclick="checkAnswer(this, ${i === correctIndex})">${option}</button>`).join('')}
                    <br><br><hr>
                </div>
                `;
                questionsContainer.appendChild(questionElement);
            });
        }
    } catch (error) {
    }
}
function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.style.backgroundColor = '#bbe3a3';
        alert('¡Correct answer! 🤓🤓🤓');
    } else {
        button.style.backgroundColor = '#e8a2a2';
        alert('Wrong answer. Try again. 😭');
    }
}
fetchTriviaQuestions();
