let rect = { Widht: 10, Hight: 20 }
let _widht = parseInt(prompt(`Enter widht `))
let _hight = parseInt(prompt(`Enter hight `))

function SetParametres(rect, widht, hight) {
    rect.Hight += hight
    rect.Widht += widht
    return rect
}

console.log(SetParametres(rect, _widht, _hight));
