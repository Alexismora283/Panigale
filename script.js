document.getElementById('change-color-btn').addEventListener('click', function() {
    const selectedColor = document.getElementById('color-selector').value;
    
    // URLs de las imágenes para cada color
    const imageUrls = {
        'images/red.png': 'images/red.png',  // Ruta a la imagen roja
        'images/black.png': 'images/black.png',  // Ruta a la imagen negra
        'images/white.png': 'images/white.png'  // Ruta a la imagen blanca
    };

    // Cambiar la imagen mostrada basada en el color seleccionado
    document.getElementById('color-display').src = imageUrls[selectedColor];
});

// Mostrar información sobre la Ducati Panigale V4S cuando se hace clic en el botón "Discover!"
document.getElementById('discover-btn').addEventListener('click', function() {
    document.getElementById('ducati-details').style.display = 'block';
});

// Mostrar un mensaje oculto cuando se hace clic en la imagen de la motocicleta
document.getElementById('hover-img').addEventListener('click', function() {
    const hiddenMessage = document.getElementById('hidden-message');
    if (hiddenMessage.style.display === 'none' || hiddenMessage.style.display === '') {
        hiddenMessage.style.display = 'block';
    } else {
        hiddenMessage.style.display = 'none';
    }
});
