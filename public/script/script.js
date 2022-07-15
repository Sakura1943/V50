let Week = new Date().getDay()

switch (Week) {
  case 0:
    Week = "Sunday"
    break;
  case 1:
    Week = "Monday"
    break;
  case 2:
    Week = "Tuesday"
    break;
  case 3:
    Week = "Wednesday"
    break;
  case 4:
    Week = "Thursday"
    break;
  case 5:
    Week = "Friday"
    break;
  case 6:
    Week = "Saturday"
    break;
  default:
    Week = undefined
    break;
}

alert(`ERROR: Hey, bro, KFC Crazy ${Week}, V me $50!`)
while(true) {
  let ans = prompt("V me $50?(yes/no):")
  if (ans === "Y" || ans === "y" || ans === "Yes" || ans === "YES" || ans === "yes") {
    break
  }
}



throw new Error(`Hey, bro, KFC Crazy ${Week}, V me $50!`)