document.addEventListener('DOMContentLoaded', function() {
    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentDay = new Date().getDay();

    // Get a random number between 1 and 7 (for 7 different images)
    const randomImageNumber = Math.floor(Math.random() * 7) + 1;

    // Define an array of images and corresponding text
    const images = [
        { src: 'image1.jpg', text: 'Image 1 Text' },
        { src: 'image2.jpg', text: 'Image 2 Text' },
        { src: 'image3.png', text: 'Image 3 Text' },
        { src: 'image4.jpeg', text: 'Image 4 Text' },
        { src: 'image2.jpg', text: 'Image 5 Text' },
        { src: 'image1.jpg', text: 'Image 6 Text' },
        { src: 'image2.jpg', text: 'Image 7 Text' }
    ];

    // Set the image and text based on the day of the week and random number
    const imageElement = document.getElementById('image');
    const textElement = document.getElementById('text');

    imageElement.src = images[randomImageNumber - 1].src;
    textElement.textContent = images[randomImageNumber - 1].text;
});
