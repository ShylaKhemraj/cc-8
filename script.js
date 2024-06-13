//U20026580

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#registrationForm');
    const displayArea = document.querySelector('#displayArea');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        let allFieldsFilled = true;

        formData.forEach((value,key) => {
            if (!value.trimRight()) {
                allFieldsFilled = false;
            }
        });

        if(!allFieldsFilled) {
            alert('Please fill out all fields.');
            return;
        }

//Finalize registration details

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('registration-details');

        const name = formData.get('name');
        const email = formData.get('email');
        const eventDate = formData.get('eventDate');
        const preferences = formData.get('preferences');

        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = 'Name: ${name}' ;
        detailsDiv.appendChild(nameParagraph);

        const emailParagraph = document.createElement('p');
        emailParagraph.textContent = 'Email: ${email}' ;
        detailsDiv.appendChild(emailParagraph);

        const eventDateParagraph = document.createElement('p');
        eventDateParagraph.textContent = 'Event Date: ${eventDate}' ;
        detailsDiv.appendChild(eventDateParagraph);

        const preferencesParagraph = document.createElement('p');
        preferencesParagraph.textContent = 'Preferences: ${preferences}' ;
        detailsDiv.appendChild(preferencesParagraph);

        formData.forEach((value, key) => {
            const detailParagraph = document.createElement('p');
            detailParagraph.textContent = '${key}: ${value}';
            detailsDiv.appendChild(detailParagraph);
        });
        displayArea.appendChild(detailsDiv);
//Form reset
        form.reset();

    });
})