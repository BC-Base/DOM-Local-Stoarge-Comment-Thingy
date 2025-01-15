//  The variable "let clickCount" is an important part of the code. This creates the variable clickCount, which is what we will use to keep track of the amount of times the button has been pressed, which will them be displahyed later.
const clickCountDisplay = document.getElementById('click-count');
        const header = document.getElementById('header');
        const button = document.getElementById('click-button');
  let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

        // Update display on load
        clickCountDisplay.textContent = clickCount;
        updateUI();

//2.Explain what this event listener function does (and what function it calls).
//This event listener function keeps track for if the button is being pressed or not. When the button is pressed, it calls the clickCount function, adding 1 to the amount in order to keep the current number it has up to date. This number will then be stored, ensuring that the number will always be kept and not lost.
        // Add event listener to button
        button.addEventListener('click', () => {
            clickCount++;
            localStorage.setItem('clickCount', clickCount);
            clickCountDisplay.textContent = clickCount;
            updateUI();
        });

//3.Explain what function updateUI does and is holding the colors and texts
//The function updateUI 

        function updateUI() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#E91E63'];
            const texts = [
                'Keep going!',
                'Great job!',
                'You are amazing!',
                'Fantastic!',
                'Click click hooray!'
            ];

            const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
            header.textContent = texts[randomIndex];
        }

