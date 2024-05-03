function createcard(title, cName, View, monthOld, duration, thumbnail,) {

    let Viewstr
    if (View < 1000) {
        Viewstr = View
    }
    else if (View > 1000000) {
        Viewstr = View / 1000000 + "M"
    }
    else {
        Viewstr = View / 1000 + "k"
    }
    let html = `<div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${Viewstr} views . ${monthOld} Month ago</p>
        </div>
    </div>`
    document.querySelector(".mycont").innerHTML = document.querySelector(".mycont").innerHTML + html
}
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
78, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
78, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
78, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
78, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
78, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
78, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
562000, 7, "31:22", "hqdefault.webp")
createcard("Installing vs code & How Websites Work |", "CodeWithHarry",
78, 7, "31:22", "hqdefault.webp")