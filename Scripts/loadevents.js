fetch("../Data/events.json")
.then(response => response.json())
.then(data => {

    const list = document.getElementById("events-list");

    data.forEach(event => {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>
                <a href="${event.link}" target="_blank" rel="noopener noreferrer">
                    ${event.title}
                </a>:
            </strong>
            ${event.description} <em>${event.date}</em>
        `;

        list.appendChild(li);

    });

})
.catch(err => console.error("Events failed to load:", err));
