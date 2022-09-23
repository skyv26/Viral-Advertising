function viralAdvertising(n) {
  // Write your code here
  let commulative = 0; // OR
  let commulativeArray = [];
  let shared = 5;

  for(let Iter=1; Iter<=n; Iter++){
      // Adverise 
      let likedPeople = Math.floor(shared / 2); //2.5
      commulative+=likedPeople; // commulative = 0 + 2
      shared = likedPeople * 3;
  }
  
  return commulative;
}

viralAdvertising(3);
// Output: 9

viralAdvertising(4);
// Output: 15
