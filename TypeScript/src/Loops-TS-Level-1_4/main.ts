let friendNames: string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for (let i = 0; i < friendNames.length; i++) {
    const element = friendNames[i];
    console.log(element);
}

console.log("----------------------------");

for (const friendName of friendNames) {
    console.log(friendName);
}
