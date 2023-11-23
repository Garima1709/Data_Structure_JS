// instantiation


// First thing that gets run is constructor, and it gonna create these properties on player object
class Player {
    constructor (name, type ) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${name} I am a ${type}`)
    }
}

// Whenever you extend a class, you need to call constructor of parent class

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play () {
        console.log(`WEEEEEE I am a ${this.type}`)
    }
}

const Wizard1 = new Wizard('Garima', 'Healer')
const Wizard2 = new Wizard('Twinkle', 'Dark Magic')