Here's a **brief `README.md`** for your project. This will describe the functionality and how to use it.

---

# Car Model Selection Tool

This web tool allows users to select a car make (via `Make ID`) and a year (either a specific year or a range from 1990 to 2025) to fetch car model data from an external API. It ensures that only unique car models are displayed without any repetition.

## Features:

* **Enter Make ID**: Users can input the make ID of the car manufacturer (e.g., `4` for BMW).
* **Select Year**:

  * Users can select a specific year or choose the "All Years" option to get car models from 1990 to 2025.
  * If "All Years" is selected, the tool loops through all the years from 1990 to 2025 and fetches car models for each year.
* **Unique Car Models**: Displays only unique car models, avoiding duplicates, even if they are available across multiple years.

## How It Works:

1. **Make ID Input**: The user enters the make ID of the car manufacturer (e.g., `BMW` = `4`).
2. **Year Selection**:

   * The user can select a specific year (e.g., `2022`), which fetches models for that year.
   * Alternatively, the user can select "All Years", which fetches models from 1990 to 2025, showing unique models only.
3. **API Call**: The app calls the external API `https://policywagon.com/api/v1/auto-insurance/lookup/model?makeId=${makeId}&year=${year}` to fetch the data.
4. **Unique Model Display**: The tool ensures that each model appears only once, even if it appears in multiple years.

### Technologies Used:

* **HTML**: For the structure and user interface.
* **JavaScript**: For the functionality, including API calls and data processing.
* **Fetch API**: For making API calls to the external endpoint.
* **Set**: To store unique car models and avoid duplicates.

## How to Use:

1. Clone or download the project files.
2. Open `index.html` in any modern browser.
3. Enter a valid `Make ID` (e.g., `4` for BMW).
4. Select a specific year or choose "All Years (1990-2025)".
5. Click "Fetch Car Models" to view the unique car models.

### Example:

1. **Make ID**: 4 (for BMW)
2. **Year**: 2022 or "All Years (1990-2025)"

The tool will display the car models available for the selected year(s).

## Error Handling:

* If an invalid or missing `Make ID` is entered, the user will see a prompt to provide a valid ID.
* In case the API fails or no data is returned, an appropriate message will be displayed.

## Future Enhancements:

* Add more car brands and make IDs.
* Optimize UI for better user experience.
* Implement error handling for network issues or API errors.

---

### Usage Example:

1. **Input:**

   * Make ID: `4` (BMW)
   * Year: `All Years (1990–2025)`

2. **Output:**

   * The list of unique BMW car models will appear, such as:

   ```
   M235i
   M240i
   X1
   X5
   EDGE
   M3
   ```

### License:

This project is open-source and available under the MIT License.