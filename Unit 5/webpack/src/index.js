import{sum} from "./cal"

import"./index.css"

console.log(sum(5,5))

const root =document.getElementById("root")

const img1= document.createElement("img")
img1.src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"

const h1= document.createElement("h1")
h1.textContent="Github"
h1.setAttribute("class","bluetext")

root.append(img1,h1)