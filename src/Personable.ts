export interface Personable {
  readonly _firstName: string;
  readonly _lastName: string;
  get FirstName():string;
  get LastName():string;
  describe():void;

}
 
