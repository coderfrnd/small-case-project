import smallCase from "../../JSON /smallcases.json";
let data = smallCase.data;
export default function CombineStratgey(
  setMySet,
  currentSet,
  applyStratgey,
  setData
) {
  let arr = [];
  data.forEach((ele) => {
    let stratgey = ele.info.investmentStrategy;
    let check = true;
    for (let index = 0; index < applyStratgey.length; index++) {
      let res = stratgey.find((val) => applyStratgey[index] == val.displayName);
      if (!res) {
        check = false;
        break;
      }
    }
    if (check) {
      setMySet((prevState) => {
        let newSet = new Set(prevState);
        newSet.add(ele);
        return newSet;
      });
      arr.push(ele);
    }
  });
  console.log(arr);
}
