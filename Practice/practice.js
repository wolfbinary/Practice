class Ship{
   constructor({
      name = '',
   }={}){
      this.name = name;
   }
   
}

class SpaceShip extends Ship{
    /*
    constructor({a = 'default a value', b = 'default b value', c = 'default c value'} = {a:'default option a', b:'default option b', c:'default option c'}) {
this.a = a;
this.b = b;
this.c = c;
}
    */
    constructor({
        firstname = '',
        lastname = '',
        spaceship = '',
        job = '',
        gender = '',
        retired = false
     } = {} ){
      super(spaceship);
      
      this.firstname = firstname;
      this.lastname = lastname;
      this.job = job;
      this.gender = gender;
      this.retired = retired;
     }
     
     get firstname(){
      return this._firstname;
     }

     set firstname(newFirstname){
        this._firstname = newFirstname;
     }

      get spaceship(){
         return this.name;
      }

     methodA(){
        this.methodB();
     }

     methodB(){
        console.log("Method B");
     }
     
}

let t = new SpaceShip({firstname:'Pickard',lastname:'Stoner',spaceship:'Enterprise'});
let tt = new SpaceShip({firstname:'Janeway',lastname:'Stoner',spaceship:'Voyager'});

console.log(tt.spaceship);
console.log(t.spaceship);
