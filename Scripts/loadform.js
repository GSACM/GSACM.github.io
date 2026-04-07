function loadform(containerId, formKey) {
    fetch("../Data/forms.json")
        .then(res => res.json())
        .then(data => {
            const formData = data[formKey];
            if (!formData) return;

            const container = document.getElementById(containerId);
            if (!container) return;

            let html = `<section id="contact">
                <h2>${formData.title}</h2>
                <form id="contact-form" action="${formData.formspree.action}" method="POST" novalidate>
                    <input type="hidden" name="_subject" value="${formData.formspree.subject}">
                    <input type="hidden" name="_next" value="${formData.formspree.next}">`;

            formData.fields.forEach(field => {
                if (field.type === "textarea") {
                    html += `<div>
                        <textarea id="${field.id}" name="${field.name}" placeholder="${field.placeholder}" rows="${field.rows}" ${field.required ? 'required' : ''}></textarea>
                    </div>`;
                } else {
                    html += `<div>
                        <input type="${field.type}" id="${field.id}" name="${field.name}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}>
                    </div>`;
                }
            });

            html += `<button type="submit">${formData.button.text}</button>
                    <div id="formFeedback"></div>
                </form>
            </section>`;

            container.innerHTML = html;

            const form = document.getElementById("contact-form");
            const feedback = document.getElementById("formFeedback");

            form.addEventListener("submit", async e => {
                e.preventDefault();
                const data = new FormData(form);

                try {
                    const response = await fetch(form.action, {
                        method: form.method,
                        body: data,
                        headers: { 'Accept': 'application/json' }
                    });

                    if (response.ok) {
                        form.reset();
                        feedback.textContent = "Message sent successfully!";
                    } else {
                        feedback.textContent = "Oops! Something went wrong.";
                    }
                } catch (err) {
                    feedback.textContent = "Error sending message.";
                }
            });
        })
        .catch(err => console.error("Failed to load contact form:", err));
}
