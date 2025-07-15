// Populate the year dropdown with options from 1990 to 2025
window.onload = function() {
  const yearSelect = document.getElementById("year");
  for (let year = 1990; year <= 2025; year++) {
    let option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }
};

// Function to fetch car models based on selected year or 'all'
async function fetchCarModels() {
  const makeId = document.getElementById("makeId").value;
  const year = document.getElementById("year").value;
  const outputDiv = document.getElementById("output");

  // Clear previous output
  outputDiv.innerHTML = '';

  // Check if Make ID is provided
  if (!makeId || makeId <= 0) {
    outputDiv.innerHTML = "Please enter a valid Make ID!";
    return;
  }

  // If a specific year is selected
  if (year !== "all") {
    const apiUrl = `https://policywagon.com/api/v1/auto-insurance/lookup/model?makeId=${makeId}&year=${year}`;
    await fetchData(apiUrl);
  } 
  // If 'All Years' is selected, loop through all years from 1990 to 2025
  else {
    const modelsSet = new Set(); // Set to store unique models
    for (let year = 1990; year <= 2025; year++) {
      const apiUrl = `https://policywagon.com/api/v1/auto-insurance/lookup/model?makeId=${makeId}&year=${year}`;
      await fetchData(apiUrl, modelsSet); // Pass the modelsSet to fetchData
    }
    // After fetching data for all years, display the unique models
    displayModels(modelsSet);
  }
}

// Function to fetch data from the API and add unique models to the Set
async function fetchData(apiUrl, modelsSet = new Set()) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if data is available
    if (data && data.models && data.models.length > 0) {
      data.models.forEach(model => {
        // Add the model name to the set to avoid duplicates
        modelsSet.add(model.name);
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Error fetching data. Please try again.";
    document.getElementById("output").appendChild(errorMessage);
  }
}

// Function to display the unique car models
function displayModels(modelsSet) {
  const outputDiv = document.getElementById("output");

  // Clear the output before displaying new results
  outputDiv.innerHTML = '';

  if (modelsSet.size > 0) {
    modelsSet.forEach(model => {
      const modelInfo = document.createElement("p");
      modelInfo.textContent = model; // Only model name
      outputDiv.appendChild(modelInfo);
    });
  } else {
    const noDataMessage = document.createElement("p");
    noDataMessage.textContent = "No models found for this year.";
    outputDiv.appendChild(noDataMessage);
  }
}
