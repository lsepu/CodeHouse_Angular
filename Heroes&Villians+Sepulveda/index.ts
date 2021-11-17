interface villian {
  name: string;
  crimes: Number;
}

class Heroe {
  constructor(
    private name: string,
    private universe: string,
    private age: Number,
    private villians: villian[]
  ) {}

  public getHeroeInfo = () => {
    return `Name: ${this.name}\nUniverse: ${this.universe}\nAge: ${this.age}\n`;
  };

  public getVillians = () => {
    return this.villians;
  };

  public addVillian = (villian:villian) => {
      this.villians.push(villian)
  }
}

const joker:villian = {
    name: 'Jack Napier',
    crimes: 120
}

const batman = new Heroe("Bruce banner", "DC", 40, [joker]);

console.log(batman.getHeroeInfo());

const penguin:villian = {
    name: 'Oswald Cobblepot',
    crimes: 80
}

batman.addVillian(penguin);

console.log(batman.getVillians());