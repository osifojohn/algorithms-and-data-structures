// Given two strings, write a fuction to determine if
// the second string is an anagram of the first
// validAnagram('','')//true, validAnagram('aaz','zaa')//true
// validAnagram('anagram','nagaram')//true, validAnagram('rat','car')//false

function validAnagram(str1, str2) {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  if (str1.length !== str2.length) return false;

  for (let val of str1) {
    frequencyCounter1[val]
      ? (frequencyCounter1[val] += 1)
      : (frequencyCounter1[val] = 1);
  }
  for (let val of str2) {
    frequencyCounter2[val]
      ? (frequencyCounter2[val] += 1)
      : (frequencyCounter2[val] = 1);
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}
validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false) // false
validAnagram('awesome', 'awesom'); // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true
