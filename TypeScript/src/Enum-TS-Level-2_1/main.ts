enum HTMLError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500,
}

const showHTMLError = () => {
    switch (Math.floor(Math.random() * 6)) {
        case 0:
        case 1:
        case 2:
            console.log("Serverantwort: ", HTMLError.OK);
            break;
        case 3:
            console.log("Serverantwort: ", HTMLError.Redirect);
            break;
        case 4:
            console.log("Serverantwort: ", HTMLError.BadRequest);
            break;
        case 5:
            console.log("Serverantwort: ", HTMLError.InternalServerError);
            break;
        default:
            break;
    }
};

showHTMLError();
