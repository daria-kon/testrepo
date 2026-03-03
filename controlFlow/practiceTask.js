let userType = "employee";
let accessLevel;

if (userType === "employee"){
    accessLevel = "Eligible: Dietary Services";
} else if (userType === "enrolled member") {
    accessLevel = "Eligible: Dietary Services + 1:1 dietician"
} else if (userType === "subscriber") {
    accessLevel = "Eligible: Partial access for Dietary Services only";
} else if (userType === "non-subscriber") {
    accessLevel = "Not eligible: Please enroll or subscribe to avail this facility."
} else {
    accessLevel = "Unknown user type: Please provide a valid role.";
}
console.log("User access", accessLevel)