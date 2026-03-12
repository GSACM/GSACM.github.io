function loadratings() {

    fetch("../Data/ratings.json")
        .then(res => res.json())
        .then(data => {

            const tbody = document.getElementById("ratingBody");
            if (!tbody) return;

            data.ratings.forEach(r => {

                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${r.name}</td>
                    <td>${r.role}</td>
                    <td>${r.enjoyment}</td>
                    <td>${r.difficulty}</td>
                    <td>${r.classes}</td>
                    <td>${r.comments}</td>
                `;

                tbody.appendChild(row);
            });

        })
        .catch(err => console.error("Failed to load ratings:", err));
}

document.addEventListener("DOMContentLoaded", loadratings);
