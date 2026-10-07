const getData = () => {
  try {
    let data = localStorage.getItem("bmiData");

    if (data) {
      let dataObj = JSON.parse(data);

      document.getElementById("bmiValue").innerText = dataObj.bmi;

      document.getElementById("bmiCategory").innerText = dataObj.category;
    } else {
      document.getElementById("bmiValue").innerText = "No data";

      document.getElementById("bmiCategory").innerText = "";
    }
  } catch (error) {
    console.log(error);
  }
};

const onCalculate = () => {
  try {
    let height = (document.getElementById("height").value);

    let weight = (document.getElementById("weight").value);

    if (height <= 0 || weight <= 0) {
      alert("Please enter height and weight");

      return;
    }

    let heightMeter = height / 100;

    let bmi = weight / (heightMeter * heightMeter);

    bmi = bmi.toFixed(2);

    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    let obj = {
      height: height,

      weight: weight,

      bmi: bmi,

      category: category,
    };

    let jsonObj = JSON.stringify(obj);

    localStorage.setItem("bmiData", jsonObj);

    alert("BMI calculated successfully");

    getData();
  } catch (error) {
    console.log(error);
  }
};

const onDelete = () => {
  try {
    localStorage.removeItem("bmiData");

    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";

    alert("Successfully deleted");

    getData();
  } catch (error) {
    console.log(error);
  }
};

getData();
