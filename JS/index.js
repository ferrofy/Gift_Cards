document.addEventListener("DOMContentLoaded", () => {
    const giftCards = [
        { name: 'Amazon', discount: '1%', min: 10, max: 10000, image: './IMG/Amazon.png' },
        { name: 'Play Store', discount: '1.5%', min: 10, max: 10000, image: './IMG/Play_Store.png' },
        { name: 'Comming Soon', discount: '0%', min: 10, max: 0, image: './IMG/Comming_Soon.png' },
        { name: 'Comming Soon', discount: '0%', min: 0, max: 0, image: './IMG/Comming_Soon.png' },
        { name: 'Comming Soon', discount: '0%', min: 0, max: 0, image: './IMG/Comming_Soon.png' },
        { name: 'Comming Soon', discount: '0%', min: 0, max: 0, image: './IMG/Comming_Soon.png' },
        { name: 'Comming Soon', discount: '0%', min: 0, max: 0, image: './IMG/Comming_Soon.png' },
        { name: 'Comming Soon', discount: '0%', min: 0, max: 0, image: './IMG/Comming_Soon.png' },
        { name: 'Comming Soon', discount: '0%', min: 0, max: 0, image: './IMG/Comming_Soon.png' },
        { name: 'Comming Soon', discount: '0%', min: 0, max: 0, image: './IMG/Comming_Soon.png' }
    ];

    const buttonsContainer = document.getElementById('buttonsContainer');

    giftCards.forEach(card => {
        const button = document.createElement('button');
        button.classList.add('Btn');

        const img = document.createElement('img');
        img.src = card.image || '';
        img.alt = card.name;
        if (!card.image) {
            img.style.display = 'none';
            const name = document.createElement('div');
            name.textContent = card.name;
            button.appendChild(name);
        } else {
            button.appendChild(img);
        }

        button.addEventListener('click', () => {
            const popup = document.getElementById('popup');
            const inputAmount = document.getElementById('inputAmount');
            const toBuyAmount = document.getElementById('toBuyAmount');
            const youPayAmount = document.getElementById('youPayAmount');
            const profitAmount = document.getElementById('profitAmount');

            document.getElementById('minLimit').textContent = `${card.min} ₹`;
            document.getElementById('maxLimit').textContent = `${card.max} ₹`;
            document.getElementById('discountValue').textContent = `${card.discount}`;

            inputAmount.min = card.min;
            inputAmount.max = card.max;
            inputAmount.placeholder = "Add A custom value";
            inputAmount.value = ''; // Default value

            const calculateAmounts = (value) => {
                const toPay = value - (value * parseFloat(card.discount) / 100);
                const profit = value - toPay;
                toBuyAmount.textContent = `${value} ₹`;
                youPayAmount.textContent = `${toPay.toFixed(2)} ₹`;
                profitAmount.textContent = `${profit.toFixed(2)} ₹`;
            }

            inputAmount.addEventListener('input', (e) => {
                const value = parseInt(e.target.value);
                if (value >= card.min && value <= card.max) {
                    calculateAmounts(value);
                } else {
                    // Handle out of range value
                }
            });

            popup.style.display = 'flex';

            // Close the popup when clicking outside the content
            window.addEventListener('click', (e) => {
                if (e.target === popup) {
                    popup.style.display = 'none';
                }
            });
        });

        buttonsContainer.appendChild(button);
    });

    const closePopup = document.getElementById('closePopup');
    closePopup.addEventListener('click', () => {
        document.getElementById('popup').style.display = 'none';
    });
});
