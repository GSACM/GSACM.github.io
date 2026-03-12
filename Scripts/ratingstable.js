document.addEventListener("DOMContentLoaded", function () {

    /* SEARCH FILTER */
    document.getElementById("searchInput").addEventListener("keyup", function () {
        let filter = this.value.toLowerCase();
        let rows = document.querySelectorAll("#ratingTable tbody tr");

        rows.forEach(row => {
            let text = row.innerText.toLowerCase();
            row.style.display = text.includes(filter) ? "" : "none";
        });
    });

    /* SORTING */
    const tbody = document.querySelector("#ratingTable tbody");

    let originalRows = [];

    document.querySelectorAll("#ratingTable th").forEach((header, index) => {

        header.dataset.sortState = "0";

        header.addEventListener("click", () => {

            let rows = Array.from(tbody.querySelectorAll("tr"));
            let sortType = header.getAttribute("data-sort");
            let state = parseInt(header.dataset.sortState);

            if (originalRows.length === 0) {
                originalRows = rows.slice();
            }

            document.querySelectorAll("#ratingTable th").forEach(h => {
                if (h !== header) {
                    h.textContent = h.textContent.replace(/ ▲| ▼/g, '');
                    h.dataset.sortState = "0";
                }
            });

            state = (state + 1) % 3;
            header.dataset.sortState = state;

            header.textContent = header.textContent.replace(/ ▲| ▼/g, '');
            if (state === 1) header.textContent += " ▲";
            else if (state === 2) header.textContent += " ▼";

            if (state === 0) {
                tbody.innerHTML = "";
                originalRows.forEach(row => tbody.appendChild(row));
                return;
            }

            rows.sort((rowA, rowB) => {

                let cellA = rowA.children[index].innerText.trim();
                let cellB = rowB.children[index].innerText.trim();

                if (index === 0) {
                    let lastA = cellA.split(" ").slice(-1)[0].toLowerCase();
                    let lastB = cellB.split(" ").slice(-1)[0].toLowerCase();

                    return state === 1
                        ? lastA.localeCompare(lastB)
                        : lastB.localeCompare(lastA);
                }

                if (sortType === "number") {
                    return state === 1 ? cellA - cellB : cellB - cellA;
                }

                return state === 1
                    ? cellA.localeCompare(cellB)
                    : cellB.localeCompare(cellA);

            });

            tbody.innerHTML = "";
            rows.forEach(row => tbody.appendChild(row));

        });

    });

});
