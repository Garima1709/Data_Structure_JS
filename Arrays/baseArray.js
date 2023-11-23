const chars = ['a', 'b', 'c']

console.log('First Char :', chars[0])   // O(1)

chars.push('d')   // O(1)

console.log('After Push :', chars)
chars.pop()    // O(1)


chars.unshift('x')
// This will add x at beginning of array, each index needs to be shifted , so complexity is O(n)

chars.splice(2, 0, 'Twinkle')   // O(n) 

