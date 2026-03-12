fetch("../Data/members.json")
.then(response => response.json())
.then(data => {

    const container = document.querySelector(".container");

    data.forEach((member, index) => {

        const section = document.createElement("section");
        section.id = `Member ${index + 1}`;

        let details = "";
        member.details.forEach(item => {
            details += `<li>${item}</li>`;
        });

        section.innerHTML = `
            <h2>
                <a href="${member.linkedin}" target="_blank">${member.name}</a> - Member
            </h2>

            <img src="${member.image}" class="board-img" alt="Member">

            <ul>
                ${details}
            </ul>
        `;

        container.appendChild(section);

    });

});
