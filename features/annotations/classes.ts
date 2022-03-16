class Electronics {
  constructor(public color: string) {}

  protected open(): void {
    console.log('I do work.');
  }
  close(): void {
    console.log('I am cut off');
  }
  privateCaller(): void {
    this.open();
  }
}

class Headphones extends Electronics {
  constructor(public price: number, color: string) {
    super(color);
  }

  open(): void {
    console.log('I do work.');
  }

  startWorking(): void {
    this.open();
    this.close();
    this.privateCaller();
  }
  toString(): string {
    return `The color of the product is ${this.color} and the price is ${this.price}`;
  }
}

const headPhones: Headphones = new Headphones(300, 'red');
console.log(headPhones.toString());

headPhones.startWorking();
