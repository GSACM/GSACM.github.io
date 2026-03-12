function loadsection(sectionKey, containerId) {
    fetch("Data/sections.json")
        .then(res => res.json())
        .then(data => {
            if (!data[sectionKey]) return; // nothing to load
            const container = document.getElementById(containerId);
            if (!container) return;

            const section = data[sectionKey];

            let html = `<section id="${sectionKey}">
                <h2>${section.title}</h2>
                <p>${section.content}`;

            // Add links if they exist
            if (section.links) {
                section.links.forEach(link => {
                    html += ` <a href="${link.href}" target="_blank">${link.text}</a>`;
                });
            }

            html += `</p>`;

            // Add button if it exists
            if (section.button) {
                html += `<button onclick="window.location.href='${section.button.link}'">${section.button.text}</button>`;
            }

            html += `</section>`;

            container.innerHTML = html;
        })
        .catch(err => console.error("Failed to load section:", err));
}
