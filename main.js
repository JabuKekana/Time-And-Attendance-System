// DATE AND TIME EFFECT

// DATE AND TIME EFFECT
function displayDateTime(formId) {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    document.getElementById("datetime-" + formId).value = dateTimeString;
  }
  
  // Call the function to display the current date and time immediately for each form
  displayDateTime("form1");
  
  // Update the time every second (1000 milliseconds) for each form
  setInterval(function() {
    displayDateTime("form1");
  }, 1000);





// PREVIOUS TIME BLUR EFFECT


function togglePreviousTime(formId) {
    var previousTimeDiv = document.getElementById("previous-time-" + formId);
    var isBlurred = previousTimeDiv.classList.contains("blurred");
    if (isBlurred) {
        previousTimeDiv.classList.remove("blurred");
    } else {
        previousTimeDiv.classList.add("blurred");
    }
}



// ADMIN LOGIN MODAL


// Open the modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  // Close the modal
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Perform login action
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "admin") {
      window.location.href = "admin.html"; // Redirect to admin.html if login is successful
    } else {
      alert("Invalid username or password");
    }
  }


  function logout() {
    window.location.href = "index.html";
  }








// SYNCHRONIZING THE DROP DOWN SELECTION



const dropdown1 = document.querySelector("#dropdown1");
const dropdown2 = document.querySelector("#dropdown2");

// Function to synchronize the selected options
function syncDropdowns(event) {
  const selectedOption = event.target.value;
  dropdown1.value = selectedOption;
  dropdown2.value = selectedOption;
}

// Add event listeners to both dropdowns
dropdown1.addEventListener('change', syncDropdowns);
dropdown2.addEventListener('change', syncDropdowns);






  // Function to synchronize the input values
  function syncInputValues() {
    const fullname1 = document.getElementById('fullname1');
    const fullname2 = document.getElementById('fullname2');
    const date1 = document.getElementById('date1');
    const date2 = document.getElementById('date2');
    const time1 = document.getElementById('time1');
    const time2 = document.getElementById('time2');

    fullname1.addEventListener('input', function () {
      fullname2.value = this.value;
    });

    fullname2.addEventListener('input', function () {
      fullname1.value = this.value;
    });

    date1.addEventListener('input', function () {
      date2.value = this.value;
    });

    date2.addEventListener('input', function () {
      date1.value = this.value;
    });

    time1.addEventListener('input', function () {
      time2.value = this.value;
    });

    time2.addEventListener('input', function () {
      time1.value = this.value;
    });
  }

  // Call the function to synchronize the input values
  syncInputValues();






// FORM SUBMIT FUNCTION

const form = document.querySelector("#form1");
const submitButton = document.querySelector("#submit");
const scriptURL = 'https://script.google.com/macros/s/AKfycby21fbxqp0s-DIJjhid_CCg1fYF11YbJVsgWFc6iPUtsOV1kxW96pHTnJVnxuwfhYIubg/exec';

form.addEventListener('submit', e => {
  submitButton.disabled = true;
  e.preventDefault();

  // Get the current date and time
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  // Add the date and time values to the FormData object
  const requestBody = new FormData(form);
  requestBody.append('Date', date);
  requestBody.append('Time', time);


  
  fetch(scriptURL, { method: 'POST', body: requestBody })
    .then(response => {
      alert('Successfully Submitted!', response);
      submitButton.disabled = false;
    })
    .catch(error => {
      alert('Error!', error.message);
      submitButton.disabled = false;
    });
});














