function card(title, cName, views, monthsOld, duration, thumbnail, link) {
    let newViews;
    if(views >= 1000000) {
        newViews = views/1000000 + "M"
    } else if (views >= 1000) {
        newViews = views/1000 + "K"
    } else {
        newViews = views
    }

    let html = `<div class="card">
            <div class="img">
            <a href="${link}" target="_blank"><img src="${thumbnail}"></a>
                <div class="capsule">${duration}</div>
            </div>
            <div class="title">
                <h1>${title}</h1>
                <p>${cName} . ${newViews} views . ${monthsOld} months ago</p>
            </div>
        </div>`
    
    document.querySelector(".containor").innerHTML = document.querySelector(".containor").innerHTML + html
}

card("Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodingWith Harsh", 350000, 5, "24:50", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg", "https://www.youtube.com/watch?v=kJEsTjH5mVg&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=2")

card("Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3", "CodingWith Harsh", 12000000, 3, "40:20", "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg", "https://www.youtube.com/watch?v=BGeDBfCIqas&list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&index=3")