let rect = { Widht: 10, Hight: 20 }
let _num = parseInt(prompt(`Enter widght`))

function SetWidght(rect, widht) {
    return rect.Widht += widht
}

console.log(SetWidght(rect, _num));