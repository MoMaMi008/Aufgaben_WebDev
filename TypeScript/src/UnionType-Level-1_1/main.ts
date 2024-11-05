type Result = "succes" | "error" | "pending";

function handleResult(result: Result) {
    switch (result) {
        case "succes":
            console.info("Der Vorgang war erfolgreich!");
            break;
        case "error":
            console.error("Bei dem Vorgang liegt ein Error vor!");
            break;
        case "pending":
            console.warn("Bei dem Vorgang ist dein Eingreifen nötig!");
            break;
        default:
            console.error("Es gibt ein Problem mit dem Typen der Meldung! Bitte wende dich an den Systemadministrator oder einen zuständigen Entwickler.");
            break;
    }
}

handleResult("error");
handleResult("succes");
handleResult("pending");
