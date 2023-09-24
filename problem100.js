function canPay(notes, chipPrice) {
    if (!Array.isArray(notes) || notes.length === 0) {
      return [];
    }
  
    const totalNotes = notes.reduce((acc, note) => acc + note, 0);
    
    return totalNotes >= chipPrice;
  }
  
  // Test cases
  console.log(canPay([1, 2, 5], 10)); // Output: false
  console.log(canPay([1, 5, 5], 10)); // Output: true
  console.log(canPay([], 10)); // Output: []
  