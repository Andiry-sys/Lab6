let rect = { x: 10, y: 10 }

let _x = parseInt(prompt(`Enetr poin X`))

function SetX(rect, x) {
    return rect.x += x
}

console.log(SetX(rect, _x));