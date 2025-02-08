document.addEventListener("DOMContentLoaded", () => {
    const MAX_ALL = 1000000;
    const giftCards = [
        { name: 'Amazon', discount: '1%', min: 10, max: MAX_ALL, image: './IMG/Amazon.png', tags: ['E-Commerce'] },
        { name: 'Play_Store', discount: '1.75%', min: 10, max: MAX_ALL, image: './IMG/Play_Store.png', tags: ['Gaming'] },
        { name: 'AJIO', discount: '3%', min: 10, max: MAX_ALL, image: './IMG/AJIO.png', tags: ['Fasion'] },
        { name: 'Myntra', discount: '2.5%', min: 250, max: MAX_ALL, image: './IMG/Myntra.png', tags: ['Fasion'] },
        { name: 'Zepto', discount: '2.5%', min: 100, max: MAX_ALL, image: './IMG/Zepto.png', tags: ['Food'] },
        { name: 'KFC', discount: '3.5%', min: 100, max: MAX_ALL, image: './IMG/KFC.png', tags: ['Food'] },
        { name: 'Book_My_Show', discount: '3%', min: 100, max: MAX_ALL, image: './IMG/Book_My_Show.png', tags: ['Trip'] },
        { name: 'PVR', discount: '7.5%', min: 100, max: MAX_ALL, image: './IMG/PVR.png', tags: ['Movie'] },
        { name: 'Barbeque_Nation', discount: '4.5%', min: 500, max: MAX_ALL, image: './IMG/Barbeque_Nation.png', tags: ['Food'] },
        { name: 'Fab_India', discount: '5%', min: 250, max: MAX_ALL, image: './IMG/Fab_India.png', tags: ['Fasion'] },
        { name: 'Fastrack', discount: '5%', min: 500, max: MAX_ALL, image: './IMG/Fastrack.png', tags: ['Other'] },
        { name: 'Big_Basket', discount: '1.5%', min: 50, max: MAX_ALL, image: './IMG/Big_Basket.png', tags: ['Food'] },
        { name: 'Croma', discount: '2%', min: 500, max: MAX_ALL, image: './IMG/Croma.png', tags: ['E-Commerce'] },
        { name: 'Lakme', discount: '2%', min: 500, max: MAX_ALL, image: './IMG/Lakme.png', tags: ['Fasion'] },
        { name: 'V_Mart', discount: '3%', min: 100, max: MAX_ALL, image: './IMG/V_Mart.png', tags: ['E-Commerce'] },
        { name: 'Nykaa', discount: '5%', min: 10, max: MAX_ALL, image: './IMG/Nykaa.png', tags: ['Fasion'] },
        { name: 'MamaEarth', discount: '7.5%', min: 500, max: MAX_ALL, image: './IMG/MamaEarth.png', tags: ['Fasion'] },
        { name: 'Dominos', discount: '7.5%', min: 100, max: MAX_ALL, image: './IMG/Dominos.png', tags: ['Food'] },
        { name: 'Puma', discount: '6%', min: 500, max: MAX_ALL, image: './IMG/Puma.png', tags: ['Fasion'] },
        { name: 'My_Glamm', discount: '8%', min: 250, max: MAX_ALL, image: './IMG/My_Glamm.png', tags: ['Fasion'] },
        { name: 'Himalaya', discount: '1.75%', min: 100, max: MAX_ALL, image: './IMG/Himalaya.png', tags: ['Fasion'] },
        { name: 'Bewakoof', discount: '6.5%', min: 500, max: MAX_ALL, image: './IMG/Bewakoof.png', tags: ['Fasion'] },
        { name: 'Cafe_Coffee_Day', discount: '6%', min: 100, max: MAX_ALL, image: './IMG/Cafe_Coffee_Day.png', tags: ['Food'] }
    ];
    const buttonsContainer = document.getElementById('buttonsContainer');
    const tagsContainer = document.getElementById('tagsContainer');
    const renderGiftCards = (filterTag) => {
        buttonsContainer.innerHTML = '';
        const filteredCards = filterTag === 'all' ? giftCards : giftCards.filter(card => card.tags.includes(filterTag));
        filteredCards.forEach(card => {
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
                document.getElementById('discountValue').textContent = `${card.discount}`;
                inputAmount.min = card.min;
                inputAmount.max = MAX_ALL;
                inputAmount.placeholder = "Add A custom value";
                inputAmount.value = '';
                const calculateAmounts = (value) => {
                    const toPay = value - (value * parseFloat(card.discount) / 100);
                    const profit = value - toPay;
                    toBuyAmount.textContent = `${value} ₹`;
                    youPayAmount.textContent = `${toPay.toFixed(2)} ₹`;
                    profitAmount.textContent = `${profit.toFixed(2)} ₹`;
                }
                inputAmount.addEventListener('input', (e) => {
                    const value = parseInt(e.target.value);
                    if (value >= card.min && value <= MAX_ALL) {
                        calculateAmounts(value);
                    }
                });
                popup.style.display = 'flex';
                window.addEventListener('click', (e) => {
                    if (e.target === popup) {
                        popup.style.display = 'none';
                    }
                });
            });
            buttonsContainer.appendChild(button);
        });
    };
    renderGiftCards('all');
    const tagButtons = document.querySelectorAll('.TagButton');
    tagButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const tag = e.target.getAttribute('data-tag');
            renderGiftCards(tag);
            tagButtons.forEach(btn => btn.classList.remove('selected'));
            e.target.classList.add('selected');
        });
    });
    document.querySelector('.TagButton[data-tag="all"]').classList.add('selected');
    const closePopup = document.getElementById('closePopup');
    closePopup.addEventListener('click', () => {
        document.getElementById('popup').style.display = 'none';
    });
});
