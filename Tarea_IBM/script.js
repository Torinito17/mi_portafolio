document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('recommendationInput');
    const newRecommendation = input.value.trim();
    if (newRecommendation !== '') {
      const li = document.createElement('li');
      li.textContent = newRecommendation;
      document.getElementById('recommendationList').appendChild(li);
      alert('¡Gracias por tu recomendación!');
      input.value = '';
    }
  });
  