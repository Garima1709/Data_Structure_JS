/*
Every language has a built in hash table Just like a race in Python.

They're called dictionaries.

JavaScript, as we said, are objects.

Java has maps and Ruby has hashes.

Hash Table Operations:

1. insert - O(1)
2. lookup - O(1)
3. delete - O(1)
4. search - O(1)

Types of Hash tables :

With Objects, we can only have string as key, with Maps, we can have any type as key
Sets is another feature very similar to MAP. The only difference is that it only stores the keys, no values.

*/

let user = {
    age : 29,
    name : 'Twinkle',
    magic : true,
    scream : function() {
        console.log('Bhoooooo');
    }
}

// All operations are O(1) as hash table eaxctly knows where data is stored and where to save new data

console.log(user.age)   // o(1)
user.spell = 'Abra Kadabra'
