function loadsection(sectionKey, containerId) {
    fetch("../Data/sections.json")
        .then(res => res.json())
        .then(data => {
            const section = data[sectionKey];
            if (!section) return; // nothing to load
            const container = document.getElementById(containerId);
            if (!container) return;

            // Replace placeholders with links (handles spaces)
            let content = section.content;
            if (section.links) {
                section.links.forEach(link => {
                    // Create regex to match placeholder, ignore case
                    const placeholder = new RegExp(`\\{${link.text.replace(/\s+/g, '\\s*')}\\}`, 'gi');
                    const anchor = `<a href="${link.href}" target="_blank">${link.text}</a>`;
                    content = content.replace(placeholder, anchor);
                });
            }

            // Build HTML
            let html = `<section id="${sectionKey}">
                <h2>${section.title}</h2>
                <p>${content}</p>`;

            // Add button if it exists
            if (section.button) {
                html += `<button onclick="window.location.href='${section.button.link}'">${section.button.text}</button>`;
            }

            html += `</section>`;

            container.innerHTML = html;
        })
        .catch(err => console.error("Failed to load section:", err));
}
