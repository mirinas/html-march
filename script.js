

function filterMenuItems() {
    let table = document.querySelector('table');
    let searchText = document.querySelector('#search').value;

    table.querySelectorAll('tr').forEach((row, i) => {
        if(i == 0) {
            return;
        }

        let rowText = row.children.item(0).innerHTML;

        if(rowText.toLowerCase().includes(searchText.toLowerCase())) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    })
}



function showSubmenu(elementThatWasHovered) {
    elementThatWasHovered.querySelector('.submenu').style.display = 'inline-block'
}

function hideSubmenu(elementThatWasHovered) {
    elementThatWasHovered.querySelector('.submenu').style.display = 'none'
}

