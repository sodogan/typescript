import { Person } from "../src/Person";

describe("Initial Test", () => {
  let myPerson: Person;
  beforeEach(() => {
    console.log("beforeeach is called");
    myPerson = new Person("sol", "dog");
  });
  afterEach(() => {
    console.log("Aftereach is called");
  });

  test("Test firstname", () => {
    expect(myPerson.FirstName).toBe("sol");
  });

  test("Test Lastname", () => {
    expect(myPerson.LastName).toBe("dog");
  });
});
