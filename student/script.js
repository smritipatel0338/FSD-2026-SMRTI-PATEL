function REGISTER() {
    const name = document.getElementById("name").value.trim();
    const rollno = document.getElementById("rollno").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("p1").value;
    const address = document.getElementById("text").value.trim();
    const date = document.getElementById("date1").value;
    const course = document.querySelector('input[name="course"]:checked');

    if (name === "" || rollno === "" || email === "" || password === "") {
        alert("Please fill in the basic details.");
        return false;
    }

    if (!document.getElementById("f1").checked || course === null || address === "" || date === "") {
        alert("Please complete the remaining details.");
        return false;
    }

    alert("Registration successful, " + name);
    return false;
}