const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  ];

const randomNames = [
    "Ashley",
    "Sarah",
    "Loom",
    "Brian",
    "Kelly",
    "Shaun"
];

const randomOccupations = [
    "Dentist",
    "Barber",
    "Butcher",
    "Electrician",
    "Plummer",
    "Roofer"
];

const randomPrices = [56,45,70,60,99,35];

const maxRows = 10;

const freelancerIntervalId = setInterval(addFreelancer, 1000);

function calculateAveragePrice() {
    const sum = freelancers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);
    const average = sum / freelancers.length;
    return average;
};

function render() {
    // Render the freelancers
    const freelancersId = document.querySelector("#freelancers");
    // Keep header but clear previous table rows
    freelancersId.innerHTML =
    /* html*/
        `<tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Starting Price</th>
        </tr>`;

        freelancers.forEach((freelancer) => {
            const tr = document.createElement("tr");
            const tdName = document.createElement("td");
            tdName.textContent = freelancer.name;
        
            const tdOccupation = document.createElement("td");
            tdOccupation.textContent = freelancer.occupation;
        
            const tdPrice = document.createElement("td");
            tdPrice.classList.add("price");
            tdPrice.textContent = `$${freelancer.price}`;
        
            tr.appendChild(tdName);
            tr.appendChild(tdOccupation);
            tr.appendChild(tdPrice);
        
            freelancersId.appendChild(tr);
        
            const average = document.querySelector("#average");
            average.innerHTML = `The average starting price is: $${calculateAveragePrice().toFixed(2)}`;
        });
};


        render();

  function addFreelancer() {
    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
    const randomOccupation = randomOccupations[Math.floor(Math.random() * randomOccupations.length)];
    const randomPrice = randomPrices[Math.floor(Math.random() * randomPrices.length)];

    freelancers.push({name:randomName, occupation: randomOccupation, price:randomPrice});

    render();

    if (freelancers.length >= maxRows) {
        clearInterval(freelancerIntervalId);
    }
};
