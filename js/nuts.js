class RangeGrid {
    constructor() {
        this.grid = [];
        this.selected = [];
        this.hands = [
            "AA","AKs","AQs","AJs","ATs","A9s","A8s","A7s","A6s","A5s","A4s","A3s","A2s",
            "AKo","KK","KQs","KJs","KTs","K9s","K8s","K7s","K6s","K5s","K4s","K3s","K2s",
            "AQo","KQo","QQ","QJs","QTs","Q9s","Q8s","Q7s","Q6s","Q5s","Q4s","Q3s","Q2s",
            "AJo","KJo","QJo","JJ","JTs","J9s","J8s","J7s","J6s","J5s","J4s","J3s","J2s",
            "ATo","KTo","QTo","JTo","TT","T9s","T8s","T7s","T6s","T5s","T4s","T3s","T2s",
            "A9o","K9o","Q9o","J9o","T9o","99","98s","97s","96s","95s","94s","93s","92s",
            "A8o","K8o","Q8o","J8o","T8o","98o","88","87s","86s","85s","84s","83s","82s",
            "A7o","K7s","Q7o","J7o","T7o","97o","87o","77","76s","75s","74s","73s","72s",
            "A6o","K6s","Q6o","J6o","T6o","96o","86o","76o","66","65s","64s","63s","62s",
            "A5o","K5s","Q5o","J5o","T5o","95o","85o","75o","65o","55","54s","53s","52s",
            "A4o","K4s","Q4o","J4o","T4o","94o","84o","74o","64o","54o","44","43s","42s",
            "A3o","K3s","Q3o","J3o","T3o","93o","83o","73o","63o","53o","43o","33","32s",
            "A2o","K2s","Q2o","J2o","T2o","92o","82o","72o","62o","52o","42o","32o","22"]
        this.percentage_table = {
            "AA":.005,"AKs":.035,"AQs":.040,"AJs":.055,"ATs":.060,"A9s":.085,"A8s":.105,"A7s":.120,"A6s":.155,"A5s":.155,"A4s":.170,"A3s":.205,"A2s":.215,
            "AKo":.050,"KK":.010,"KQs":.070,"KJs":.085,"KTs":.100,"K9s":.145,"K8s":.180,"K7s":.210,"K6s":.240,"K5s":.265,"K4s":.300,"K3s":.350,"K2s":.355,
            "AQo":.070,"KQo":.115,"QQ":.015,"QJs":.120,"QTs":.150,"Q9s":.185,"Q8s":.265,"Q7s":.320,"Q6s":.350,"Q5s":.375,"Q4s":.405,"Q3s":.415,"Q2s":.470,
            "AJo":.080,"KJo":.140,"QJo":.195,"JJ":.020,"JTs":.210,"J9s":.295,"J8s":.335,"J7s":.400,"J6s":.445,"J5s":.480,"J4s":.520,"J3s":.530,"J2s":.545,
            "ATo":.105,"KTo":.175,"QTo":.235,"JTo":.315,"TT":.025,"T9s":.335,"T8s":.400,"T7s":.445,"T6s":.525,"T5s":.545,"T4s":.590,"T3s":.615,"T2s":.635,
            "A9o":.145,"K9o":.225,"Q9o":.295,"J9o":.385,"T9o":.430,"99":.030,"98s":.425,"97s":.525,"96s":.560,"95s":.615,"94s":.665,"93s":.700,"92s":.710,
            "A8o":.165,"K8o":.285,"Q8o":.375,"J8o":.455,"T8o":.510,"98o":.560,"88":.035,"87s":.540,"86s":.610,"85s":.655,"84s":.715,"83s":.760,"82s":.785,
            "A7o":.200,"K7s":.345,"Q7o":.440,"J7o":.515,"T7o":.585,"97o":.620,"87o":.675,"77":.055,"76s":.650,"75s":.675,"74s":.745,"73s":.790,"72s":.895,
            "A6o":.255,"K6s":.365,"Q6o":.480,"J6o":.605,"T6o":.635,"96o":.720,"86o":.735,"76o":.770,"66":.090,"65s":.715,"64s":.760,"63s":.840,"62s":.895,
            "A5o":.250,"K5s":.395,"Q5o":.500,"J5o":.630,"T5o":.695,"95o":.705,"85o":.800,"75o":.820,"65o":.850,"55":.145,"54s":.780,"53s":.840,"52s":.900,
            "A4o":.275,"K4s":.415,"Q4o":.550,"J4o":.645,"T4o":.740,"94o":.810,"84o":.850,"74o":.895,"64o":.905,"54o":.900,"44":.230,"43s":.855,"42s":.900,
            "A3o":.305,"K3s":.465,"Q3o":.575,"J3o":.660,"T3o":.745,"93o":.830,"83o":.900,"73o":.930,"63o":.950,"53o":.940,"43o":.960,"33":.320,"32s":.910,
            "A2o":.345,"K2s":.490,"Q2o":.600,"J2o":.685,"T2o":.800,"92o":.900,"82o":.915,"72o":.970,"62o":.990,"52o":.980,"42o":.995,"32o":.995,"22":.420
        };

        this.generate();
    }

    generate() {
        this.grid = [];
        let pos = 0;
        for (let y = 0; y < 13; y++) {
            this.grid.push([]);
            for (let x = 0; x < 13; x++) {
                let tile = new Tile([y, x], this.hands[pos], this.percentage_table[this.hands[pos]]);
                this.grid[y].push(tile);
                pos++;
            }
        }
    }

    insertRange(range) {
        this.generate();
        this.selected = range.split(',');
        for (let i = 0; i < this.selected.length; i++) {
            let index = this.hands.indexOf(this.selected[i]);
            let row = Math.floor(index/13);
            let cell = index % 13;
            let tile = this.grid[row][cell];

            tile.toggleSelect();
        }
    }

    decorateTable(table_id) {
        let table = document.getElementById(table_id);
        table.innerHTML = '';
        
    
        for (let y = 0; y < 13; y++) {
            let row = document.createElement('tr');
            for (let x = 0; x < 13; x++) {
                let cell = document.createElement('td');
                cell.appendChild(this.grid[y][x].decorate());
                row.appendChild(cell);
            }

            table.appendChild(row);
        }
    }
}

class Tile {
    constructor(pos, unit, percentage) {
        this.pos = pos;
        this.unit = unit;
        this.selected = false;
        this.percentage = percentage;
    }

    isSelected() {
        return this.selected;
    }

    toggleSelect() {
        this.selected = !this.selected;
    }

    decorate() {
        let tile = document.createElement('div');
        let className = 'tile';

        if (this.selected) {
            className += ' selected'
        } 

        if (this.pos[0] === this.pos[1]) {
            className += ' pair';
        }

        if (this.pos[0] < this.pos[1]) {
            className += ' suited';
        }

        tile.className = className;
        tile.innerText = this.unit;

        return tile;
    }
}



class CommTable {
    constructor(board){
        this.board = [];
        
        let cards = board.match(/.{2}/g);
        for (let i = 0; i < cards.length; i++) {
            let card = new Card(cards[i][0], cards[i][1]);
            this.board.push(card);
        }
    }

    evaluate() {
        let hand = new Hand(this.board);
        console.log(hand.isPossible.constructor.name);
    }
}