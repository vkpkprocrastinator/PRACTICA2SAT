document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'https://urldefense.com/v3/__http://www.omdbapi.com/?i=tt3896198&apikey=43c34db1__;!!D9dNQwwGXtA!Tx-LlKHDTp4VL1I5zEgkbtlddt-gXJLwyUDeNUZVpI2OB6NwJ4Guc6dmraZ9Vvkz35uIUq4f6pjc3E2EBTQ9_tQbdnV6jiE3PC30$'; 
    const searchBtn = document.getElementById('searchBtn');
    const result = document.getElementById('result');

    searchBtn.addEventListener('click', () => {
        const movieTitle = document.getElementById('movieTitle').value;
        if (movieTitle) {
            fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    if (data.Response === 'True') {
                        result.textContent = `Director: ${data.Director}, Year: ${data.Year}`;
                    } else {
                        result.textContent = 'Movie not found!';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    result.textContent = 'An error occurred.';
                });
        } else {
            result.textContent = 'Please enter a movie title.';
        }
    });
});
