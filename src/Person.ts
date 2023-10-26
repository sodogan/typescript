import {Personable} from './Personable';

class Person  implements Personable{
  public  _firstName: string;
  public  _lastName: string;

  constructor( firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  

  public set FirstName(fName:string) {
    this._firstName = fName;
  }


  public get FirstName() {
    return this._firstName;
  }
  public get LastName() {
    return this._lastName;
  }

  public describe(): Person {
    const str = "the person is " + this.FirstName + this.LastName;
    console.log(str);
    return this;
  }
  public greet(): void {
    console.log("hello from greet Person Base class");
  }


}
export { Person };
