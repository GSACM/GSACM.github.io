fetch("/data/officers.json")
.then(response => response.json())
.then(data => {

    const container = document.getElementById("board-container");

    data.forEach(member => {

        const section = document.createElement("section");

        let details = "";
        member.details.forEach(item => {
            details += `<li>${item}</li>`;
        });

        section.innerHTML = `
            <h2>
                <a href="${member.linkedin}" target="_blank">${member.name}</a>
                - ${member.role}
            </h2>

            <img src="${member.image}" class="board-img" alt="${member.role}">

            <ul>
                ${details}
            </ul>
        `;

        container.appendChild(section);

    });

});
