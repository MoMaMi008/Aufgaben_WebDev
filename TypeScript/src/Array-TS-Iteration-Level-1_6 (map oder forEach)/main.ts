let album: string[] = ["holidays.jpg", "Restaurant.jpg", "desktop", "rooms.GIF", "DOGATBEACH.jpg"];

const changedNames: string[] = album.map((element) => {
    if (element.includes(".")) {
        element = element.slice(0, element.indexOf(".")).toLowerCase();
        return element;
    } else {
        return "invalid";
    }
});

console.log(changedNames);
