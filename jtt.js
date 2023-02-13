// 1) console.log('a');

// console.log('b');

// setTimeOut(() => console.log('c'), 3000)

// console.log('d');





// 2) console.log('a');

// console.log('b');

// setTimeOut(() => console.log('c'), 3000)

// setTimeOut(() => console.log('d'), 0)

// console.log('e');


console.log('a')
console.log('b')
async function newfunc(){
    const newprom = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('c')
            resolve()
        }, 3000)  
    })
    const newprom1 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('d')
            resolve()
        }, 0)  
    })
    console.log('e')
}
newfunc()
