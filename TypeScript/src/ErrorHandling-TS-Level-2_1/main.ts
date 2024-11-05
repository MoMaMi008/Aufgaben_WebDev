const lottoResults: number[] = [];

function generateLottoNumber() {
    const lottoNumber: number = Math.ceil(Math.random() * 100);

    if (lottoNumber > 49) {
        throw new Error("Die generierte Zahl ist größer 49!");
    } else {
        return lottoNumber;
    }
}

while (lottoResults.length <= 6) {
    try {
        const number: number = generateLottoNumber();
        if (!lottoResults.includes(number)) {
            lottoResults.push(number);
        }
    } catch (error) {
        console.error(error);
    }
}

console.log(lottoResults);
