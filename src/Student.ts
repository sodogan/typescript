import { Person } from "./Person";
class Student extends Person {
  constructor(firstName: string, lastName: string, private readonly score: number) {
    super(firstName, lastName);
  }
 
}

export { Student };
