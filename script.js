function generateUid() {
  const crypto = window.crypto || require("crypto");
  const bytes = new Uint8Array(16);
  
  crypto.getRandomValues(bytes);
  
  const uid = bytes.reduce((acc, byte, i) => {
    if(i === 4 || i === 6 || i === 8) {
      acc += "-";
    }
    return acc + byte.toString(16).padStart(2, "0");
  }, "");
  
  return uid;
}

console.log(generateUid());
