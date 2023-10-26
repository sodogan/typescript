interface Burgerable<T>{
    size: T;
    price: number;
  
}

export class Burger<T> implements Burgerable<T>{
  size: T;
  price: number;

  constructor(size: T, price: number) {
    this.price = price;
    this.size = size;
  }
  get Size(){
    return this.size;
  }
}
