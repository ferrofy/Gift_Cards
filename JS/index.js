document.addEventListener("DOMContentLoaded", () => {
    const giftCards = [
        { name: 'Amazon', discount: '1%', min: 10, max: 10000, image: './IMG/Amazon.png' },
        { name: 'Play_Store', discount: '1.5%', min: 10, max: 10000, image: './IMG/Play_Store.png' },
        { name: 'AJIO', discount: '3%', min: 10, max: 10000, image: './IMG/AJIO.png' },
        { name: 'Myntra', discount: '2.5%', min: 250, max: 2000, image: './IMG/Myntra.png' },
        { name: 'Zepto', discount: '2.5%', min: 100, max: 10000, image: './IMG/Zepto.png' },
        { name: 'KFC', discount: '3.5%', min: 100, max: 1000, image: './IMG/KFC.png' },
        { name: 'Book_My_Show', discount: '3%', min: 100, max: 5000, image: './IMG/Book_My_Show.png' },
        { name: 'PVR', discount: '7.5%', min: 100, max: 5000, image: './IMG/PVR.png' },
        { name: 'Barbeque_Nation', discount: '4.5%', min: 500, max: 10000, image: './IMG/Barbeque_Nation.png' },
        { name: 'Fab_India', discount: '5%', min: 250, max: 50000, image: './IMG/Fab_India.png' },
        { name: 'Fastrack', discount: '5%', min: 500, max: 2000, image: './IMG/Fastrack.png' },
        { name: 'Big_Basket', discount: '1.5%', min: 50, max: 5000, image: './IMG/Big_Basket.png' },
        { name: 'Croma', discount: '2%', min: 500, max: 10000, image: './IMG/Croma.png' },
        { name: 'Lakme', discount: '2%', min: 500, max: 25000, image: './IMG/Lakme.png' },
        { name: 'V_Mart', discount: '3%', min: 100, max: 3000, image: './IMG/V_Mart.png' },
        { name: 'Nykaa', discount: '5%', min: 10, max: 10000, image: './IMG/Nykaa.png' },
        { name: 'MamaEarth', discount: '7.5%', min: 500, max: 5000, image: './IMG/MamaEarth.png' },
        { name: 'Dominos', discount: '7.5%', min: 100, max: 2000, image: './IMG/Dominos.png' },
        { name: 'Puma', discount: '6%', min: 500, max: 10000, image: './IMG/Puma.png' },
        { name: 'My_Glamm', discount: '8%', min: 250, max: 10000, image: './IMG/My_Glamm.png' },
        { name: 'Himalaya', discount: '1.75%', min: 100, max: 10000, image: './IMG/Himalaya.png' },
        { name: 'Bewakoof', discount: '6.5%', min: 500, max: 10000, image: './IMG/Bewakoof.png' },
        { name: 'Cafe_Coffee_Day', discount: '6%', min: 100, max: 5000, image: './IMG/Cafe_Coffee_Day.png' }
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

        const hr = document.createElement('hr');
        button.appendChild(hr);

        const discountText = document.createElement('div');
        discountText.classList.add('discount');
        discountText.textContent = `Discount: ${card.discount}`;
        button.appendChild(discountText);

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
