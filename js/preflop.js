let openingRules = {
    "MP2": [
        "OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","T","OR","OR","OR","OR","T","T","VT","VT","VT","F","F","F","OR","OR","OR","T","VT","F","F","F","F","F","F","OR","OR","T","F","F","F","F","F","F","F","OR","OR","T","F","F","F","F","F","F","OR","T","T","F","F","F","F","F","OR","T","T","F","F","F","F","OR","T","F","F","F","F","OR","VT","F","F","F","T","VT","F","F","T","F","F","T","F","T","OR","OR","OR","OR","F","F","F","F","F","F","F","F","OR","T","VT","F","F","F","F","F","F","F","F","VT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
    ],
    "HJ": [
        "OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","VT","VT","VT","OR","OR","OR","OR","T","VT","F","F","F","F","F","OR","OR","OR","T","VT","F","F","F","F","F","OR","OR","T","VT","F","F","F","F","F","OR","OR","T","F","F","F","F","F","OR","OR","T","VT","F","F","F","OR","T","T","F","F","F","OR","T","VT","F","F","OR","T","F","F","OR","F","F","T","F","T","OR","OR","OR","OR","VT","F","F","F","F","F","F","F","OR","OR","OR","VT","F","F","F","F","F","F","F","OR","T","F","F","F","F","F","F","F","F","T","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
    ],
    "CO": [
        "OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","T","OR","OR","OR","OR","OR","OR","T","T","T","VT","VT","OR","OR","OR","OR","T","T","F","F","F","F","OR","OR","OR","T","T","F","F","F","F","OR","OR","OR","T","VT","F","F","F","OR","OR","T","VT","F","F","F","OR","OR","T","VT","F","F","OR","OR","T","VT","F","OR","T","VT","F","OR","VT","F","OR","F","OR","OR","OR","OR","OR","OR","OR","T","T","T","T","VT","VT","OR","OR","OR","T","F","F","F","F","F","F","F","OR","OR","T","F","F","F","F","F","F","F","OR","T","F","F","F","F","F","F","F","VT","F","F","F","F","F","F","F","VT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
    ],
    "BTN": [
        "OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","T","T","T","OR","OR","OR","OR","OR","T","VT","VT","VT","OR","OR","OR","OR","T","VT","VT","VT","OR","OR","OR","OR","VT","VT","VT","OR","OR","OR","T","VT","VT","OR","OR","OR","T","VT","OR","OR","T","VT","OR","T","VT","OR","VT","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","T","T","OR","OR","OR","OR","OR","T","T","T","T","T","T","OR","OR","OR","T","T","VT","VT","VT","VT","VT","OR","OR","T","T","VT","F","F","F","F","OR","T","T","VT","F","F","F","F","T","T","VT","F","F","F","F","T","VT","F","F","F","F","VT","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
    ],
    "SB": [
        "OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","T","OR","OR","OR","OR","OR","OR","OR","T","T","T","OR","OR","OR","OR","OR","T","T","T","T","OR","OR","OR","OR","T","T","VT","VT","OR","OR","OR","OR","T","VT","VT","OR","OR","OR","T","VT","VT","OR","OR","OR","T","VT","OR","OR","T","VT","OR","T","VT","OR","VT","OR","OR","OR","OR","OR","OR","OR","OR","OR","OR","T","T","T","OR","OR","OR","OR","T","T","VT","VT","VT","VT","VT","OR","OR","OR","T","VT","F","F","F","F","F","OR","OR","T","VT","F","F","F","F","F","T","T","VT","F","F","F","F","F","T","VT","F","F","F","F","F","T","F","F","F","F","F","VT","F","F","F","F","VT","F","F","F","F","F","F","F","F","F"
    ]
}

let callingRules = {
    "HJ": {
        "MP2": [
            "3BV","3BV","C.50|3BV.50","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CVT","CVT","CVT","CT.50|3BB.50","CVT","CVT","CVT","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CVT","F","F","F","F","F","F","F","3BV","C.50|3BB.50","CT","CVT","F","F","F","F","F","F","F","3BV","C","CVT","F","F","F","F","F","F","F","C.50|3BB.50","C","CVT","F","F","F","F","F","F","C","CT","CVT","F","F","F","F","F","C","CT.75|3BB.25","F","F","F","F","F","C","3BB.25|CVT.75","F","F","F","F","CT","3BB.25|CVT.75","F","F","F","CT","F","F","F","CT","F","F","CT","F","CT","3BV","C.50|3BV.50","CT.75|3BB.25","F","F","F","F","F","F","F","F","F","CT.75|3BB.25","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
        ]
    },
    "CO": {
        "MP2": [
            "3BV","3BV","3BV","C.50|3BV.50","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C","C","C.50|3BB.50","CT","CT","CT","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CT","CVT","CVT","F","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","CT","F","F","F","F","F","F","F","3BV","C.50|3BB.50","CT","F","F","F","F","F","F","F","3BV","CT","CT","F","F","F","F","F","F","C.50|3BV.50","CT","CVT","F","F","F","F","F","C","CT","CVT","F","F","F","F","C","C.75|3BB.25","CVT","F","F","F","C","CT.75|3BB.25","F","F","F","C","CT.75|3BB.25","F","F","C","F","F","C","F","C","3BV","C.50|3BV.50","CT.75|3BB.25","CVT","F","F","F","F","F","F","F","F","CT.75|3BB.25","CVT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
        ],
        "HJ": [
            "3BV","3BV","3BV","C.50|3BV.50","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C","C","C.50|3BB.50","CT","CT","CT","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CT","CVT","CVT","F","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","CT","F","F","F","F","F","F","F","3BV","C.50|3BB.50","CT","F","F","F","F","F","F","F","3BV","CT","CT","F","F","F","F","F","F","C.50|3BV.50","CT","CVT","F","F","F","F","F","C","CT","CVT","F","F","F","F","C","C.75|3BB.25","CVT","F","F","F","C","CT.75|3BB.25","F","F","F","C","CT.75|3BB.25","F","F","C","F","F","C","F","C","3BV","C.50|3BV.50","CT.75|3BB.25","CVT","F","F","F","F","F","F","F","F","CT.75|3BB.25","CVT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
        ]
    },
    "BTN": {
        "MP2": [
            "3BV","3BV","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C","C","C.50|3BB.50","C.50|3BB.50","CT","CT","3BV","C.50|3BV.50","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CT","CVT","CVT","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CT","F","F","F","F","F","F","3BV","C.50|3BB.50","C","CVT","F","F","F","F","F","F","C.50|3BV.50","C.50|3BB.50","C.50|3BB.50","CVT","F","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","F","C","C.75|3BB.25","CVT","F","F","F","C","C.75|3BB.25","CVT","F","F","C","C.75|3BB.25","F","F","C","F","F","C","F","C","3BV","3BV","C.75|3BB.25","CT","CVT","F","F","F","F","F","F","F","C.75|3BB.25","CT","CVT","F","F","F","F","F","F","F","F","CVT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
        ],
        "HJ": [
            "3BV","3BV","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C","C","C.50|3BB.50","C.50|3BB.50","CT","CT","3BV","C.50|3BV.50","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CT","CVT","CVT","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CT","F","F","F","F","F","F","3BV","C.50|3BB.50","C","CVT","F","F","F","F","F","F","C.50|3BV.50","C.50|3BB.50","C.50|3BB.50","CVT","F","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","F","C","C.75|3BB.25","CVT","F","F","F","C","C.75|3BB.25","CVT","F","F","C","C.75|3BB.25","F","F","C","F","F","C","F","C","3BV","3BV","C.75|3BB.25","CT","CVT","F","F","F","F","F","F","F","C.75|3BB.25","CT","CVT","F","F","F","F","F","F","F","F","CVT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
        ],
        "CO": [
            "3BV","3BV","C.50|3BV.50","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CVT","CVT","CVT","CT.50|3BB.50","CVT","CVT","CVT","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CVT","F","F","F","F","F","F","F","3BV","C.50|3BB.50","CT","CVT","F","F","F","F","F","F","F","3BV","C","CVT","F","F","F","F","F","F","F","C.50|3BB.50","C","CVT","F","F","F","F","F","F","C","CT","CVT","F","F","F","F","F","C","CT.75|3BB.25","F","F","F","F","F","C","3BB.25|CVT.75","F","F","F","F","CT","3BB.25|CVT.75","F","F","F","CT","F","F","F","CT","F","F","CT","F","CT","3BV","C.50|3BV.50","CT.75|3BB.25","F","F","F","F","F","F","F","F","F","CT.75|3BB.25","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
        ]
    },
    "SB": {
        "MP2": [
            "3BV","3BV","3BV","C.50|3BV.50","C.50|3BB.50","CT","CT","CT","CVT","CT.50|3BB.50","CVT","CVT","CVT","3BV","3BV","C.50|3BB.50","C.50|3BB.50","CVT","F","F","F","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","CVT","F","F","F","F","F","F","F","3BV","C.50|3BB.50","CT","F","F","F","F","F","F","F","3BV","CT.75|3BB.25","CVT","F","F","F","F","F","F","C.50|3BV.50","CT.75|3BB.25","CVT","F","F","F","F","F","C","CT.75|3BB.25","F","F","F","F","F","C","3BB.25|CVT.50|F.25","F","F","F","F","C","3BB.25|CVT.25|F.50","F","F","F","C.50|CT.50","3BB.25|CVT.25|F.50","F","F","C.50|CT.50","F","F","C.50|CT.50","F","C.50|CT.50","3BV","3BV","CT","CVT","F","F","F","F","F","F","F","F","CT","CVT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
        ],
        "HJ": [
            "3BV","3BV","3BV","C.50|3BV.50","C.50|3BB.50","CT","CT","CT","CVT","CT.50|3BB.50","CVT","CVT","CVT","3BV","3BV","C.50|3BB.50","C.50|3BB.50","CVT","F","F","F","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","CVT","F","F","F","F","F","F","F","3BV","C.50|3BB.50","CT","F","F","F","F","F","F","F","3BV","CT.75|3BB.25","CVT","F","F","F","F","F","F","C.50|3BV.50","CT.75|3BB.25","CVT","F","F","F","F","F","C","CT.75|3BB.25","F","F","F","F","F","C","3BB.25|CVT.50|F.25","F","F","F","F","C","3BB.25|CVT.25|F.50","F","F","F","C.50|CT.50","3BB.25|CVT.25|F.50","F","F","C.50|CT.50","F","F","C.50|CT.50","F","C.50|CT.50","3BV","3BV","CT","CVT","F","F","F","F","F","F","F","F","CT","CVT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
        ],
        "CO": [
            "3BV","3BV","3BV","C.50|3BV.50","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C","C","C.50|3BB.50","CT","CT","CT","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CT","CVT","CVT","F","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","CT","F","F","F","F","F","F","F","3BV","C.50|3BB.50","CT","F","F","F","F","F","F","F","3BV","CT","CT","F","F","F","F","F","F","C.50|3BV.50","CT","CVT","F","F","F","F","F","C","CT","CVT","F","F","F","F","C","C.75|3BB.25","CVT","F","F","F","C","CT.75|3BB.25","F","F","F","C","CT.75|3BB.25","F","F","C","F","F","C","F","C","3BV","C.50|3BV.50","CT.75|3BB.25","CVT","F","F","F","F","F","F","F","F","CT.75|3BB.25","CVT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"     
        ],
        "BTN": [
            "3BV","3BV","3BV","C.50|3BV.50","C.50|3BB.50","CT","CT","CT","CVT","CT.50|3BB.50","CVT","CVT","CVT","3BV","3BV","C.50|3BB.50","C.50|3BB.50","CVT","F","F","F","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","CVT","F","F","F","F","F","F","F","3BV","C.50|3BB.50","CT","F","F","F","F","F","F","F","3BV","CT.75|3BB.25","CVT","F","F","F","F","F","F","C.50|3BV.50","CT.75|3BB.25","CVT","F","F","F","F","F","C","CT.75|3BB.25","F","F","F","F","F","C","3BB.25|CVT.50|F.25","F","F","F","F","C","3BB.25|CVT.25|F.50","F","F","F","C.50|CT.50","3BB.25|CVT.25|F.50","F","F","C.50|CT.50","F","F","C.50|CT.50","F","C.50|CT.50","3BV","3BV","CT","CVT","F","F","F","F","F","F","F","F","CT","CVT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
        ]
    },
    "BB": {
        "MP2": [
            "3BV","3BV","3BV","C.50|3BV.50","C.50|3BB.50","C","C","C","C","C.50|3BB.50","C","C","C","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C","CT","CVT","CVT","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","C","CT","F","F","F","F","F","F","C.50|3BV.50","C.50|3BB.50","C","CT","F","F","F","F","F","F","C.50|3BV.50","C.75|3BB.25","CT","F","F","F","F","F","F","C","C","CT","F","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","C","C.75|3BB.25","CT","F","F","C","C.75|3BB.25","CVT","F","C","CVT","F","C","F","C","3BV","C.50|3BV.50","C","C.50|CT.50","F","F","F","F","F","F","F","F","C","C.50|CT.50","CVT","F","F","F","F","F","F","F","F","CT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"
        ],
        "HJ": [
            "3BV","3BV","3BV","C.50|3BV.50","C.50|3BB.50","C","C","C","C","C.50|3BB.50","C","C","C","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C","CT","CVT","CVT","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","C","CT","F","F","F","F","F","F","C.50|3BV.50","C.50|3BB.50","C","CT","F","F","F","F","F","F","C.50|3BV.50","C.75|3BB.25","CT","F","F","F","F","F","F","C","C","CT","F","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","C","C.75|3BB.25","CT","F","F","C","C.75|3BB.25","CVT","F","C","CVT","F","C","F","C","3BV","C.50|3BV.50","C","C.50|CT.50","F","F","F","F","F","F","F","F","C","C.50|CT.50","CVT","F","F","F","F","F","F","F","F","CT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"    
        ],
        "CO": [
            "3BV","3BV","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C","C","C.50|3BB.50","C.50|3BB.50","CT","CT","3BV","C.50|3BV.50","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CT","CVT","CVT","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","CT","F","F","F","F","F","F","3BV","C.50|3BB.50","C","CVT","F","F","F","F","F","F","C.50|3BV.50","C.50|3BB.50","C.50|3BB.50","CVT","F","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","F","C","C.75|3BB.25","CVT","F","F","F","C","C.75|3BB.25","CVT","F","F","C","C.75|3BB.25","F","F","C","F","F","C","F","C","3BV","3BV","C.75|3BB.25","CT","CVT","F","F","F","F","F","F","F","C.75|3BB.25","CT","CVT","F","F","F","F","F","F","F","F","CVT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"     
        ],
        "BTN": [
            "3BV","3BV","3BV","C.50|3BV.50","C.50|3BB.50","C","C","C","C","C.50|3BB.50","C","C","C","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C","CT","CVT","CVT","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","C","CT","F","F","F","F","F","F","C.50|3BV.50","C.50|3BB.50","C","CT","F","F","F","F","F","F","C.50|3BV.50","C.75|3BB.25","CT","F","F","F","F","F","F","C","C","CT","F","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","C","C.75|3BB.25","CT","F","F","C","C.75|3BB.25","CVT","F","C","CVT","F","C","F","C","3BV","C.50|3BV.50","C","C.50|CT.50","F","F","F","F","F","F","F","F","C","C.50|CT.50","CVT","F","F","F","F","F","F","F","F","CT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"    
        ],
        "SB": [
            "3BV","3BV","3BV","C.50|3BV.50","C.50|3BB.50","C","C","C","C","C.50|3BB.50","C","C","C","3BV","C.50|3BB.50","C.50|3BB.50","C.50|3BB.50","C","CT","CVT","CVT","F","F","F","F","3BV","C.50|3BB.50","C.50|3BB.50","C","CT","F","F","F","F","F","F","C.50|3BV.50","C.50|3BB.50","C","CT","F","F","F","F","F","F","C.50|3BV.50","C.75|3BB.25","CT","F","F","F","F","F","F","C","C","CT","F","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","F","C","C.75|3BB.25","CT","F","F","F","C","C.75|3BB.25","CT","F","F","C","C.75|3BB.25","CVT","F","C","CVT","F","C","F","C","3BV","C.50|3BV.50","C","C.50|CT.50","F","F","F","F","F","F","F","F","C","C.50|CT.50","CVT","F","F","F","F","F","F","F","F","CT","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F","F"     
        ]
    }
}


class Preflop {
    constructor(tableId){
        this.seats = {"MP2":[], "HJ":[], "CO":[], "BTN":[], "SB":[], "BB":[ ]};
        
        this.dealtCards = [];
        this.pot = 1.5;
        this.openRaise = 3;

        this.tableId = tableId;

        this.actions = [];
    }

    play(tableOutput) {
        let cards, dealtCards = [];
        
        for (const position in this.seats) {
            let action;

            if (position.hasOwnProperty("cards")) {
                let combo = parseHoleCombo(position.cards);
                let idx = combos.indexOf(combo);
                action = this.get4BetAction(position, idx);
            } else {
                this.seats[position].cards = cards = deal(2, dealtCards);
                dealtCards.push(cards[0]);
                dealtCards.push(cards[1]);
                action = this.getAction(cards.join(''), position);

                tableOutput += '<tr><td>'+position+'</td>';
                tableOutput += '<td><div class="cardset hide-cards"><div class="jw-card'+cards[0][1]+' jw-cardx">'+cards[0][0]+'</div>';
                tableOutput += ' <div class="jw-card'+cards[1][1]+' jw-cardx">'+cards[1][0]+'</div></div></td>';
                tableOutput += '<td>'+action+'</td></tr>';
            }

            console.log(this.seats[position].hasOwnProperty("cards"));

            if (action === "Fold") {
                delete this.seats[position];
            }
    
            console.log(position+": "+cards+" = "+action);
        }

        let outcome = this.getOutcome();
        if (outcome === null) {
           //this.play(tableOutput);
           console.log(this.seats);
        } else {
            tableOutput += '<tr><td></td>';
            tableOutput += '<td></td>';
            tableOutput += '<td>'+outcome+'</td></tr>';            
        }

        document.getElementById(this.tableId).innerHTML = tableOutput;
    }

    getOutcome() {

        let outcome = null;
        if (this.actions.length > 1) {
            let lastAction = this.actions[this.actions.length-1];
            if (lastAction.action === 'C') {
                let players = [];
                for (let i = 0; i < this.actions.length; i++) {
                    players.push(this.actions[i].pos);
                }
                outcome = players.join(' & ') + ' going to flop with '+ this.pot +'bb pot';
            }
        } else if (this.actions.length > 0) {
            outcome = this.actions[0].pos + ' takes the pot: '+this.pot+'bb';
        } else {
            outcome = 'BB takes the pot: '+this.pot+'bb';
        }

        return outcome;
    }

    getAction(cards, pos) {

        let combo = parseHoleCombo(cards);
        let idx = combos.indexOf(combo);
        
        let seatAction = 'Fold';
        if (this.actions.length > 0) {
            seatAction = this.getCallingAction(pos, idx);
        } else {
            seatAction = this.getOpeningAction(pos, idx);
        }

        return seatAction;
    }

    getOpeningAction(pos, idx) {
        let action = 'Fold';
        if (pos === 'BB') {
            action = 'Check';
        } else if (openingRules[pos][idx] !== 'F') {
            if (pos === 'SB') {
                this.pot -= 0.5;
            }
            this.pot += this.openRaise;
            this.actions.push({"pos": pos, action: "open", "raise": this.openRaise});
            action = 'Raise ' + this.openRaise + 'bb';
        } 

        return action;
    }

    getCallingAction(pos, idx) {
        let lastAction = this.actions[this.actions.length-1];

        let actionSet = callingRules[pos][lastAction.pos][idx].split('|');
        let ruleAction = 'F';
        if (actionSet.length > 1) {
            ruleAction = this.pickRandomAction(actionSet);
        } else {
            ruleAction = actionSet[0];
        }

        let action = 'Fold';
        if (ruleAction === 'C') {
            if (pos === 'SB') {
                this.pot -= 0.5;
            } else if (pos === 'BB') {
                this.pot -= 1;
            }
            this.pot += lastAction.raise;
            this.actions.push({"pos": pos, "action": ruleAction, "raise": lastAction.raise});
            action = 'Call ' + lastAction.raise + 'bb';
        } else if (ruleAction === '3BV' || ruleAction === '3BB') {
            if (pos === 'SB') {
                this.pot -= 0.5;
            } else if (pos === 'BB') {
                this.pot -= 1;
            }
            this.pot += lastAction.raise*3;
            this.actions.push({"pos": pos, "action": ruleAction, "raise": lastAction.raise*3});
            action = '3Bet ' + lastAction.raise*3 + 'bb';
        } 

        return action;
    }

    pickRandomAction(actions) {
        let d100Roll = Math.floor(Math.random() * 100);
        let total = 0;
        for (let i = 0; i < actions.length - 1; ++i) {
            let action = actions[i].split('.');
            total += action[1];

            if (total >= d100Roll) {
                return action[0];
            }
        }
    }

    get4BetAction(pos, idx) {
        let lastAction = this.actions[this.actions.length-1];
        this.pot += lastAction.raise;
        this.actions.push({"pos": pos, "action": "C", "raise": lastAction.raise});
        return 'Call';
    }
}