// app.js

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = event.target[0].value;  // Récupère le nom
    const date = event.target[1].value;  // Récupère la date
    const time = event.target[2].value;  // Récupère l'heure

    // Affiche un message de confirmation
    alert(`Réservation réussie pour ${name} le ${date} à ${time}`);
});
