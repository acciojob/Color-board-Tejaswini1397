document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    // Create 800 boxes
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        // Add event listener to reset color after 1 second
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = '#e74c3c';
            setTimeout(() => {
                square.style.backgroundColor = '#3498db';
            }, 1000);
        });
    }
});
