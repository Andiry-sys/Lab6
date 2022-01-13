let rect = { x: 11, y: 12 }

let _x = parseInt(prompt(`Enter point X`))
let _y = parseInt(prompt(`Enter point Y`))

function SetPoint(rect, x, y) {
    rect.x += x
    rect.y += y
    return rect
}

console.log(SetPoint(rect, _x, _y));