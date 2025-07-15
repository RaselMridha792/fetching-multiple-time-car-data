window.onload = function() {
  const yearSelect = document.getElementById("year");
  for (let year = 1990; year <= 2025; year++) {
    let option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }
};

async function fetchCarModels() {
  const makeId = document.getElementById("makeId").value;
  const year = document.getElementById("year").value;
  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = '';

  if (!makeId || makeId <= 0) {
    outputDiv.innerHTML = "Please enter a valid Make ID!";
    return;
  }

  if (year !== "all") {
    const apiUrl = `https://policywagon.com/api/v1/auto-insurance/lookup/model?makeId=${makeId}&year=${year}`;
    await fetchData(apiUrl);
  } 
  else {
    const modelsSet = new Set();
    for (let year = 1990; year <= 2025; year++) {
      const apiUrl = `https://policywagon.com/api/v1/auto-insurance/lookup/model?makeId=${makeId}&year=${year}`;
      await fetchData(apiUrl, modelsSet);
    }
    displayModels(modelsSet);
  }
}
async function fetchData(apiUrl, modelsSet = new Set()) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data && data.models && data.models.length > 0) {
      data.models.forEach(model => {
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

function displayModels(modelsSet) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = '';

  if (modelsSet.size > 0) {
    modelsSet.forEach(model => {
      const modelInfo = document.createElement("p");
      modelInfo.textContent = model;
      outputDiv.appendChild(modelInfo);
    });
  } else {
    const noDataMessage = document.createElement("p");
    noDataMessage.textContent = "No models found for this year.";
    outputDiv.appendChild(noDataMessage);
  }
}
