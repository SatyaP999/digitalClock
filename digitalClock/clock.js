setInterval(PrintSeconds, 1000)

function PrintSeconds(){
    const currentDate = new Date()
    let hh = currentDate.getHours()
    let mm = currentDate.getMinutes()
    let ss = currentDate.getSeconds()
    let merediam = "AM"

    if(hh === 0){
        hh == 12
        merediam = "AM"
    }else if(hh === 12){
        merediam = "PM"
    }else if(hh > 12){
        hh = hh - 12;
        merediam = "PM"
    }

    hh = (hh < 10) ? "0" + hh : hh
    mm = (mm < 10) ? "0" + mm : mm
    ss = (ss < 10) ? "0" + ss : ss
    
    document.getElementById("h").innerHTML = hh
    document.getElementById("m").innerHTML = mm
    document.getElementById("s").innerHTML = ss
}

PrintSeconds()