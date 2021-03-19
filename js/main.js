let numbers = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
let suits = ['s','h','d','c'];

let deal = function(size, dealt = []) {
    let hand = [];

    while ( hand.length < size ) {
        let key = numbers[Math.floor(Math.random() * numbers.length)]; 
        key += suits[Math.floor(Math.random() * suits.length)]; 

        if (!hand.includes(key) && !dealt.includes(key)) {
            hand.push(key);
        }
    }
            
    return hand;
}

let decorateCards = function(cards) {
    let output = '';

    for ( let i = 0; i < cards.length; i++ ) {
        output += '<div class="jw-card'+cards[i].substr(1,1)+'">'+cards[i].substr(0,1)+'</div>';
    }

    return output;
}

let addNextRow = function(table_id, row_id, row_data = {}) {
    let table = document.getElementById(table_id);
    let newRow = table.tBodies.item(1).innerHTML;

    for (const [key, value] of Object.entries(row_data)) {
        newRow = newRow.replace("__"+key+"__", value);
    }

    newRow = newRow.replace(/__id__/g, row_id);
    table.tBodies.item(0).innerHTML += newRow;
}

let generateCSVString = function(table_id) {
    let csv = [], rows = document.getElementById(table_id).tBodies.item(0).rows;
    
    for (let i = 0; i < rows.length; i++) {
        let line = [], cells = rows[i].cells; 
        for (let j = 0; j < cells.length; j++) {
            let data = '';
            if (cells[j].innerHTML.includes("input")) {
                data = cells[j].lastChild.value;
            } else {
                data = cells[j].innerText;
            }
            line.push('"' + data.replace(/"/g, '""') + '"');
        }
        csv.push(line.join());
    }

    return csv.join("\n");
}

let downloadCSV = function(table_id) {
    let csv_string = generateCSVString(table_id);
    let filename = 'export_' + table_id + '.csv';
    let link = document.createElement('a');
    link.style.display = 'none';
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}