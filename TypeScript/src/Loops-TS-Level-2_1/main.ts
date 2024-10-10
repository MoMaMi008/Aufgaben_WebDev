const createImageNames = (lenght: number) => {
    const returnArray: string[] = [];
    let photoName: string;
    for (let i = 1; i <= lenght; i++) {
        if (i <= 9) {
            photoName = `Image_00${i}.jpg`;
        } else if (i <= 99) {
            photoName = `Image_0${i}.jpg`;
        } else {
            photoName = `Image_${i}.jpg`;
        }

        returnArray.push(photoName);
    }
    console.log(returnArray);
};

createImageNames(100);
