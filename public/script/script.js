alert("ERROR: Hey, bro, KFC Crazy Thursday, V me $50!")
while(true) {
  let ans = prompt("V me $50?(yes/no):")
  if (ans === "Y" || ans === "y" || ans === "Yes" || ans === "YES" || ans === "yes") {
    break
  }
}

throw new Error("Hey, bro, KFC Crazy Thursday, V me $50!")