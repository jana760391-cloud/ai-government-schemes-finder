
document.getElementById("schemeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let state = document.getElementById("state").value;
    let occupation = document.getElementById("occupation").value;
    let income = document.getElementById("income").value;

    let result = document.getElementById("result");

    result.innerHTML =
        "<h2>Welcome " + name + "!</h2>" +
        "<p>Age: " + age + "</p>" +
        "<p>State: " + state + "</p>" +
        "<p>Occupation: " + occupation + "</p>" +
        "<p>Annual Income: ₹" + income + "</p>" +
        "<h3>Your details submitted successfully!</h3>";
});
