function showHero(heroName:string, heroPower:string, heroEnemy:string):void {
    let nameOutput: string = `Mein Lieblingsheld aus dem Marveluniversum ist ${heroName}.`;
    let powerOutput: string = `Er bzw. Sie hat folgende Fähigkeit: ${heroPower}.`;
    let enemyOutput: string = `Sein bzw. ihr größter Gegner ist: ${heroEnemy}.`;

    console.log(nameOutput + " " + powerOutput + " " + enemyOutput);  
}

showHero("Thor", "Kontrolle über Blitz und Donner. Führt einen mächtigen Hammer, den keine andere Kreatur bewegen kann", "Sein Stiefbruder Loki")