let rect = { Widht: 10, Hight: 20 }
let _num = parseInt(prompt(`Enter hight`))

function SetHight(rect, hight) {
    return rect.Hight += hight
}

console.log(SetHight(rect, _num));