import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "size") {
//             window.alert(`User chose size ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    // interates the array, just like for...of does BUT invokes the function that you define
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    // .join() -- joins all of the individual items in the array into one single string
    html += listItems.join("")
    html += "</ul>"

    return html
}

