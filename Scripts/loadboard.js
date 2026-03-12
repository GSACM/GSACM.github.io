fetch("../Data/board.json")
.then(response => response.json())
.then(data => {

    const container = document.querySelector(".container");

    data.forEach((member, index) => {

        const section = document.createElement("section");
        section.id = `Board Member ${index + 1}`;

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

})
.catch(err => console.error("Board failed to load:", err));
