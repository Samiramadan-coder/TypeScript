// for (let i: number = 0; i < 10; i++) {
//   console.log(i);
// }

// let nums: number[] = [10, 20, 30 ,40, 50, 60, 70];
// for(let i: number = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// let mixData: (string | number)[] = ["Cosmos", 13, 50, "Star"];
// for (let item of mixData) console.log(item);
// for (let item of mixData.entries()) console.log(item[0], item[1]);
// for (let [i, item] of mixData.entries()) console.log(i, item);

let data: (string | number)[] = ["Cosmos", 13, 15, "Star"];

for (let dataPoint in data) {
  // console.log(dataPoint);
  // console.log(typeof dataPoint); // + == parseInt() 
  // console.log(+dataPoint);
  console.log(`${+dataPoint + 1}- ${data[dataPoint]}`);
}

