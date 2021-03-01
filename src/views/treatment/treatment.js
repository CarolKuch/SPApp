import $ from 'jquery';
import axios from 'axios';

export const treatments = () => {
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2>Zabiegi</h2>');
    const treatmentsList = $('<section>Loading...</section>');
    fragment.append(h2);
    fragment.append(treatmentsList)
    axios
        .get('http://localhost:3000/treatments')
        .then(response=>response.data)
        .then(treatments=>
            treatments.map(treatment => {
                const article = $(`
                <article style="background-color: #fbbc04">
                    <p>Obszar: ${treatment.area}</p>
                    <p>Czas trwania: ${treatment.time}</p>
                    <p>Cena: ${treatment.price.toFixed(2)} zł</p>
                </article>
            `);

            const h4 = $(`<h4>${treatment.name}</h4>`);
            h4.on('click', () => {
                const customEvent = new CustomEvent('navigation', {
                    detail: {
                        name: 'treatment-details',
                        treatmentID: treatment.id
                    }
                });
                document.dispatchEvent(customEvent);
            });

            article.prepend(h4);

            return article;

            }
            ))
        .then(articles => {
            treatmentsList.empty().append(articles);
        });    

    return fragment;
};