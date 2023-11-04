class Vehicle{
    constructor (make,model,year){
        this.make=make 
        this.model=model
        this.year=year
    }
    honk(){
        return 'Beep.'
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    } 
}
// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk(); // 
class Car extends Vehicle{
    constructor (make,model,year){
        super(make, model, year)
        this.numWheels=4   
    }
} 
class Motorcycle extends Vehicle{
    constructor (make,model,year){
         super(make, model, year)
         this.numWheels=2
    }
    revEngine(){
        return "VROOM!!!"
    }
}
class Garage{
    constructor(compacity){
        this.compacity=compacity
        this.vehicles=[]
    }
    add(vehicle){
        if (vehicle instanceof Vehicle){
            if (this.vehicle.length<this.compacity){
                this.vehicles.push(vehicle)
                return  "Vehicle added!"
            }else{
                return "Sorry, we're full."
            }
        }else{
            return "Only vehicles are allowed in here!"
        }

    }

} 
