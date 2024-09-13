function saveStudent(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    var data = {};
    for(singleKey of formData.keys()){
        data[singleKey] = formData.get(singleKey);
    }
    console.log(JSON.stringify(data));
    document.getElementById("output").innerHTML = JSON.stringify(data);
    if(StudentId){
        fetch(`http://localhost:3000/students/${studentId}`,{
        method: "PATCH",
        body: JSON.stringify(data),
        "Content-Type": "application/json"
        }).then(response=>{
            response.json().then(data=>{
                console.log(data);
                alert("Student Details Updated Successfully");
                location.href = "table.html";
                return false;
            })
        })
    } else {
        fetch("http://localhost:3000/students",{
        method: "POST",
        body: JSON.stringify(data),
        "Content-Type": "application/json"
        }).then(response=>{
            response.json().then(data=>{
                console.log(data);
                alert("Student Details Saved Successfully");
                location.href = "table.html";
                return false;
            })
        })
    }
}

function getSingleStudent(id){
    fetch(`http://localhost:3000/students/${id}`).then(response=>{
        response.json().then(singleStudent=>{
            console.log(singleStudent);
            firstName.value = singleStudent.firstName;
            lastName.value = singleStudent.lastName;
            if(singleStudent.gender === 'MALE'){
                male.checked = true;
            } else {
                female.checked = true;
            }
            dob.value = singleStudent.DOB;
            document.querySelector("button[type='submit']").innerHTML = "Update Student Details";
            studentId = singleStudent.id;
        });
    })
}