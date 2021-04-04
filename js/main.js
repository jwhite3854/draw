let numbers = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
let suits = ['s','h','d','c'];
let rangeResults = [];

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

let parseHoleCombo = function(hole) {
    let card1Value = hole[0];
    let card1Suit = hole[1];
    let card2Value = hole[2];
    let card2Suit = hole[3];

    if (card1Value === card2Value) {
        return card1Value + card1Value;
    } else if ( card1Suit === card2Suit ) {
        return orderCards(card1Value, card2Value) + 's';
    } else {
        return orderCards(card1Value, card2Value) + 'o';
    }
}

let orderCards = function(card1Value, card2Value) {
    let card1ValueIdx = numbers.indexOf(card1Value);
    let card2ValueIdx = numbers.indexOf(card2Value);

    if (card1ValueIdx < card2ValueIdx) {
        return card2Value + card1Value;
    } else {
        return card1Value + card2Value
    }
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

let clearBoard = function(table_id) {
    let table = document.getElementById(table_id);
    table.tBodies.item(0).innerHTML = '';
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

async function printCont(text) {
    const a = await text;
    
    let textLines = a.split(/\r\n|\n/);
    let combos = textLines[0].split(',');

    for (let i = 1; i < textLines.length; i++) {
        let cells = textLines[i].split(',');
        let range = [];
        for (let j = 1; j < cells.length; j++) {
            range[combos[j]] = cells[j];
        }
        rangeResults[cells[0]] = range;
    }
}

async function getCSVContents(filePath) {

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'text/csv');

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    let myRequest = new Request(filePath);

    let text = await fetch(myRequest, myInit)
        .then((response) => response.text())
        .then((responseText) => {
            return responseText;
        });


    return printCont(text);
}