'use-strict'

class HashTable {
constructor(size) {
    this.data = new Array(size)
}


// charCodeAt returns an integer between 0 and 65535 representing the UTF-16 code unit of the given index
_hash(key) {
    let hash = 0;
    for(let i=0;i< key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
        console.log('Hash : ',hash)
    }
    return hash;
}

set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
        console.log('Inside')
        this.data[address] = []
        
    }
    this.data[address].push([key, value])
    console.log(this.data)
    return this.data
}  // O(1)

get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address];
    console.log('Current Bucket : ', currentBucket)
    // return value based on key
    if(currentBucket) {
        for(let i=0; i<currentBucket.length;i++) {
            if(currentBucket[i][0]=== key) {
                console.log('Found current value :',currentBucket[i][1])
                return currentBucket[i][1]
            }
        }
    }
    return undefined
}   // O(1)

keys() {
    const keysArrays = [];
    for(let i=0;i<this.data.length;i++) {
        if(this.data[i]) {
            keysArrays.push(this.data[i][0][0])  // There is array inside array, so first 0 is to remove outer array
        }
    }
    console.log('Keys Array : ', keysArrays)

}

keysWithoutCollision() {
    if()
}
}

const myHashTable = new HashTable(50);
// myHashTable._hash('grapes',10000)
myHashTable.set('grapes', 90);
myHashTable.set('apples', 54);
myHashTable.set('Banana', 100);

myHashTable.get('grapes')
myHashTable.get('apples')
// myHashTable.get('Watermelon')
myHashTable.get('appes')  // undefined 

myHashTable.keys()
