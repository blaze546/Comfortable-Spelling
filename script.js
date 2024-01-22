const comfortableWord = word => {
    const leftHand = "qwertasdfgzxcvb";
    const rightHand = "yuiophjklmn";
  
    // Function to check if a word follows the alternating pattern
    const followsAlternatingPattern = (str, hand1, hand2) => {
      for (let i = 0; i < str.length - 1; i++) {
        if ((hand1.includes(str[i]) && hand1.includes(str[i + 1])) || (hand2.includes(str[i]) && hand2.includes(str[i + 1]))) {
          return false; // Two consecutive letters belong to the same hand
        }
      }
      return true;
    };
  
    // Check if the word follows the alternating pattern for both hands
    return followsAlternatingPattern(word, leftHand, rightHand) && followsAlternatingPattern(word, rightHand, leftHand);
  };
  
  // Examples
  console.log(comfortableWord("yams")); // true
  console.log(comfortableWord("test")); // false

  // most pop answer
  const comfortable_word = word => {
    const LEFT = '[qwertasdfgzxcvb]';
    const RIGHT = '[yuiophjklnm]';
    
    var alternating = `^${LEFT}?(${RIGHT}${LEFT})*${RIGHT}?$`;
    
    return RegExp(alternating).test(word);
  };
  