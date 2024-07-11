function calculateBMI() {
    // Input
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let weightUnit = document.getElementById('weight-unit').value;
    let heightUnit = document.getElementById('height-unit').value;

    // Validate input
    if (isNaN(weight) || weight <= 0) {
        alert('Please enter a valid weight.');
        return;
    }

    if (isNaN(height) || height <= 0) {
        alert('Please enter a valid height.');
        return;
    }

    // Conversion to metric (if necessary)
    if (weightUnit === 'lbs') {
        weight *= 0.453592; // lbs to kg
    }

    if (heightUnit === 'in') {
        height *= 2.54; // in to cm
    }

    // Calculate BMI
    let bmi = weight / ((height / 100) ** 2);

    // Display result
    let resultElement = document.getElementById('result');
    resultElement.textContent = `Your BMI: ${bmi.toFixed(2)}`;

    // Determine BMI category
    let categoryElement = document.getElementById('category');
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    categoryElement.textContent = `Category: ${category}`;
}
