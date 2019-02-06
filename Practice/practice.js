class Calculator{
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
        this.firstname = firstname;
        this.lastname = lastname;
        this.spaceship = spaceship;
        this.job = job;
        this.gender = gender;
        this.retired = retired;
     }
     

     methodA(){
        this.methodB();
     }

     methodB(){
        console.log("Method B");
     }
     
}

let t = new Calculator({firstname:'Cameron',lastname:'Stoner',spaceship:'Enterprise'});

t.methodA();
