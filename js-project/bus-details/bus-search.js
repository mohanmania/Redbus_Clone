document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("routeF");
    
    searchButton.addEventListener("click", (event) => {
        fetchData(event);
    });
});

async function fetchData(event) {
    // Prevent default behavior for the button
    event.preventDefault(); 

    const from = document.getElementById("input-label-from").value;
    const end = document.getElementById("input-label-to").value;

    try {
        const response = await fetch("http://localhost:4000/api/Routes");
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        const filteredRoutes = data.filter((route) =>
            route.from.toLowerCase() === from.toLowerCase() &&
            route.end.toLowerCase() === end.toLowerCase()
        );

        displayResults(filteredRoutes);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

function displayResults(routes) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";  

    if (routes.length > 0) {
        routes.forEach((route) => {
            const routeElement = document.createElement("div");
            routeElement.classList.add("route-card", "border", "p-3", "mb-2");

            routeElement.innerHTML = `
                <div class="route-info">
                    <img src="https://png.pngtree.com/png-clipart/20230119/original/pngtree-creative-special-offer-banner-shape-tag-png-image_8922232.png" class="img-style" />
                    <div class="route-time">${route.from} — ${route.end}</div>
                    <p class="route-seats">${route.journey} · ${route.seats} Seats</p>
                    <h3>${route.Bus}</h3>
                    <p>${route.type} (2+1)</p>
                    <div class="route-ontime">80% On Time</div>
                </div>
                <div>
                    <div>
                        <button class="bookticket btn btn-danger" id="Bookticket-${route.Bus}">Book tickets</button>
                    </div>
                    <div class="route-price"><del>₹999</del> ₹${route.price}</div>
                    <div class="route-rating">★ ${route.rating}
                        <span style="margin-left: 5px; color: gold;" class="fa fa-star checked"></span>
                        <span style="margin-left: 5px;" class="fa fa-star checked"></span>
                    </div>
                </div>
            `;

            const bookTicketButton = routeElement.querySelector(`#Bookticket-${route.Bus}`);
            bookTicketButton.addEventListener('click', () => {
                window.location.href = "../seat-selection/seats.html"; 
            });

            resultsDiv.appendChild(routeElement);
        });
    } else {
        resultsDiv.innerHTML = "<p>No routes found for the selected journey.</p>";
    }
}
