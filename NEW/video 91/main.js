
import fsp from "fs/promises"
import fs from "fs"
import path from "path"

const basepath = "C:\\Users\\Renish Ponkiya\\Desktop\\GIT\\Web-Devlopment\\NEW\\video 91"

let files = await fsp.readdir(basepath)

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {


        if (fs.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if its not a js or json file
            fsp.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fsp.mkdir(ext)
            fsp.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

}