function loadChallenges() {
    fetch("../Data/challenges.json")
        .then(res => res.json())
        .then(data => {

            const container = document.getElementById("challenge-list");
            if (!container) return;

            data.challenges.forEach(challenge => {

                let html = `<section class="challenge">
                    <h2>`;

                if (challenge.link) {
                    html += `<a href="${challenge.link}" target="_blank" rel="noopener noreferrer">${challenge.title}</a>`;
                } else {
                    html += challenge.title;
                }

                if (challenge.type) {
                    html += ` - ${challenge.type}`;
                }

                html += `</h2>`;

                if (challenge.image) {
                    html += `<img src="${challenge.image}" class="challenge-img" alt="${challenge.title}">`;
                }

                if (challenge.steps) {
                    html += `<ul>`;
                    challenge.steps.forEach(step => {
                        html += `<li>${step}</li>`;
                    });
                    html += `</ul>`;
                }

                html += `</section>`;

                container.innerHTML += html;
            });

        })
        .catch(err => console.error("Failed to load challenges:", err));
}
