let studentId;

function saveStudent(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  var data = {};
  for (singleKey of formData.keys()) {
    data[singleKey] = formData.get(singleKey);
  }
  console.log(JSON.stringify(data));
  document.getElementById("output").innerHTML = JSON.stringify(data);
  if (studentId) {
    fetch(`http://localhost:3000/students/${studentId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        response.json().then(data => {
          console.log(data);
          alert("Student Details Updated Successfully");
          location.href = "table.html";
          return false;
        });
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    fetch("http://localhost:3000/students", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        response.json().then(data => {
          console.log(data);
          alert("Student Details Saved Successfully");
          location.href = "table.html";
          return false;
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}

function getSingleStudent(id) {
  studentId = id;
  fetch(`http://localhost:3000/students/${id}`)
    .then(response => {
      response.json().then(singleStudent => {
        console.log(singleStudent);
        document.getElementById("firstName").value = singleStudent.firstName;
        document.getElementById("lastName").value = singleStudent.lastName;
        if (singleStudent.gender === 'MALE') {
          document.getElementById("male").checked = true;
        } else {
          document.getElementById("female").checked = true;
        }
        document.getElementById("dob").value = singleStudent.DOB;
        document.querySelector("button[type='submit']").innerHTML = "Update Student Details";
      });
    })
    .catch(error => {
      console.error(error);
    });
}


