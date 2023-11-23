const nemo = ['nemo']

const members = ['m1', 'm2', 'm3', 'm4', 'm5', 'nemo']

function findNemo(array){
    let t0 = performance.now()
    for(let i=0; i<array.length; i++){
        if(array[i]==='nemo'){
            console.log('Found NEMO!')
        }
    }
    let t1= performance.now()
    console.log('Found Nemo in '+ (t1-t0) + ' milliseconds')
}

findNemo(members)
