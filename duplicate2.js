const names = ['abul', 'babul', 'kabul', 'asbul', 'dabul', 'abul', 'babul', 'kabul', 'lebu', 'labu', 'lebu', 'rime', 'akash', 'batash', 'tushvander', 'kup', 'kup'];

function RemoveDuplicates(names) {
    const unique = [];
    for (let i = 0; i <   names.length; i++) {
        const element = names[i];
        if (unique.includes(element) == false) {
            unique.push(element);
    
}
        return unique;   
        
    }
    
}

const totalUniqueNames = RemoveDuplicates(names);
console.log(totalUniqueNames);