function exercise1(node) {
    let date = new Date();
    if (node.children.length <= 1) {
        for(let year = date.getFullYear(); year >= 1970; year--) {
            let option = document.createElement("option");
            option.setAttribute("value", year);
            option.innerText = year;
            node.appendChild(option);
        }
    }
}