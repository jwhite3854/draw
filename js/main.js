let numbers = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
let suits = ['s','h','d','c'];
let rangeResults = [];

let combos = ["AA","AKs","AQs","AJs","ATs","A9s","A8s","A7s","A6s","A5s","A4s","A3s","A2s","KK","KQs","KJs","KTs","K9s","K8s","K7s","K6s","K5s","K4s","K3s","K2s","QQ","QJs","QTs","Q9s","Q8s","Q7s","Q6s","Q5s","Q4s","Q3s","Q2s","JJ","JTs","J9s","J8s","J7s","J6s","J5s","J4s","J3s","J2s","TT","T9s","T8s","T7s","T6s","T5s","T4s","T3s","T2s","99","98s","97s","96s","95s","94s","93s","92s","88","87s","86s","85s","84s","83s","82s","77","76s","75s","74s","73s","72s","66","65s","64s","63s","62s","55","54s","53s","52s","44","43s","42s","33","32s","22","AKo","AQo","AJo","ATo","A9o","A8o","A7o","A6o","A5o","A4o","A3o","A2o","KQo","KJo","KTo","K9o","K8o","K7o","K6o","K5o","K4o","K3o","K2o","QJo","QTo","Q9o","Q8o","Q7o","Q6o","Q5o","Q4o","Q3o","Q2o","JTo","J9o","J8o","J7o","J6o","J5o","J4o","J3o","J2o","T9o","T8o","T7o","T6o","T5o","T4o","T3o","T2o","98o","97o","96o","95o","94o","93o","92o","87o","86o","85o","84o","83o","82o","76o","75o","74o","73o","72o","65o","64o","63o","62o","54o","53o","52o","43o","42o","32o"];

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
        let regex = new RegExp("__"+key+"__", "g");
        newRow = newRow.replace(regex, value);
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