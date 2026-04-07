function loadform(containerId, formKey) {
  fetch("../Data/forms.json")  // path to your JSON
    .then(res => res.json())
    .then(data => {
      const formData = data[formKey];
      if (!formData) return;

      const container = document.getElementById(containerId);
      if (!container) return;

      let html = `<section id="contact" class="section contact-section">
                    <div class="container">
                      <h2 class="section-title">${formData.title}</h2>
                      <div class="contact-card">
                        <form id="contact-form" action="${formData.formspree.action}" method="POST" novalidate>
                          <input type="hidden" name="_subject" value="${formData.formspree.subject}">
                          <input type="hidden" name="_next" value="${formData.formspree.next}">`;

      // Add fields
      formData.fields.forEach(field => {
        if (field.type === "textarea") {
          html += `<div class="form-floating mb-4">
                     <textarea id="${field.id}" name="${field.name}" class="form-control fancy-input" placeholder="${field.placeholder}" rows="${field.rows}" ${field.required ? 'required' : ''}></textarea>
                     <label for="${field.id}">${field.label}</label>
                   </div>`;
        } else {
          html += `<div class="form-floating mb-3">
                     <input type="${field.type}" id="${field.id}" name="${field.name}" class="form-control fancy-input" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}>
                     <label for="${field.id}">${field.label}</label>
                   </div>`;
        }
      });

      // Submit button
      html += `<div class="text-center">
                 <button type="submit" class="btn-custom btn-color btn-pill">${formData.button.text}</button>
               </div>
               <div class="form-feedback" aria-live="polite" role="status" id="formFeedback"></div>
             </form>
           </div>
         </div>
       </section>`;

      container.innerHTML = html;

      // Add async Formspree JS
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
            feedback.style.color = "#00696c";
          } else {
            feedback.textContent = "Oops! Something went wrong.";
            feedback.style.color = "#c00";
          }
        } catch (err) {
          feedback.textContent = "Error sending message.";
          feedback.style.color = "#c00";
        }
      });
    })
    .catch(err => console.error("Failed to load contact form:", err));
}
