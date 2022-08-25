function generateHeader(index) {
    const asciiFirstLetter = 65;
    const lettersCount = 26;
    let div = index + 1;
    let label = '';
    let pos;
    while (div > 0) {
        pos = (div - 1) % lettersCount;
        label = String.fromCharCode(asciiFirstLetter + pos) + label;
        div = parseInt(((div - pos) / lettersCount).toString(), 10);
    }
    return label.toLowerCase();
}

function naturalSort(prop, a, b) {
    return a[prop].localeCompare(b[prop], "en", { numeric: true })
}

export function generateFakeDataObject(rowsNumber, colsNumber, cellTemplate) {
    const result = [];
    const columns = {};
    const all = colsNumber * rowsNumber;
    for (let j = 0; j < all; j++) {
        let col = j % colsNumber;
        let row = j / colsNumber | 0;
        if (!result[row]) {
            result[row] = {};
        }
        if (!columns[col]) {
            columns[col] = {
                name: generateHeader(col),
                prop: col,
                sortable: true,
                cellCompare: (col % 2) == 0 ? naturalSort : undefined,
            };
            if (col === 0) {
                columns[col].cellTemplate = cellTemplate;
                columns[col].editor = 'button';
            }
        }
        result[row][col] = row + ':' + col;
    }
    let headers = Object.keys(columns).map((k) => columns[parseInt(k, 10)]);
    return {
        source: result,
        headers
    };
}

export const columnsData = [
    {},
    {
        name: 'Inventory',
        prop: 'id',
    },
    {
        name: 'Manufacture',
        prop: 'manufacturer',
    },
    {
        name: 'Name of a product',
        prop: 'name',
    },
    {
        name: 'Storage',
        prop: 'stock',
    },
    {
        name: 'price',
        prop: 'price',
        columnType: 'numeric'
    },
    {
        name: 'Sales %',
        prop: 'sale_percent',
        columnType: 'numeric'
    },
    {
        name: 'Sales from',
        prop: 'sale_from',
        columnType: 'numeric'
    },
    {
        name: 'Variation (name/price/sales)',
        prop: 'description_short',
    },
]

export const rowsData = [
    {
        "id": "12424234321",
        "supplier_id": "346458246246346",
        "article": "X-1736",
        "manufacturer": "Manufacturer 1",
        "name": "Fuchsia Pink Tote Bag",
        "description_short": "Pink Fuchsia Tote leather bag, decorated with lace",
        "description_long": "This gorgeous pink fuchsia tote, made of rich color mat leather, decorated with lace, is a perfect day bag. made from two pieces of leather, has beautiful mat gold plastic D shape handles, and a long adjustable strap, that enables you to carry it on your shoulder or crossbody. It belongs to a mini collection of totes from embossed leather, the special effect here is the lace embelishment.",
        "price": 150.22,
        "stock": "24",
        "sale_percent": 15,
        "sale_from": '15.07.2007',
        "sale_to": '15.07.2007',
        "packageLength ": "22",
        "packageWidth": "12",
        "packageHeight": "15",
        "packageWeight": "0.1",
        rowClass: 'rowClass',
    },
    {
        "id": "GF545d",
        "supplier_id": "346458246246346",
        "article": "X-1736",
        "manufacturer": "Manufacturer 1",
        "name": "Fuchsia Pink Tote Bag",
        "description_short": "Pink Fuchsia Tote leather bag, decorated with lace",
        "description_long": "This gorgeous pink fuchsia tote, made of rich color mat leather, decorated with lace, is a perfect day bag. made from two pieces of leather, has beautiful mat gold plastic D shape handles, and a long adjustable strap, that enables you to carry it on your shoulder or crossbody. It belongs to a mini collection of totes from embossed leather, the special effect here is the lace embelishment.",
        "price": 150.22,
        "stock": "24",
        "sale_percent": 15,
        "sale_from": '15.07.2007',
        "sale_to": '15.07.2007',
        "packageLength ": "22",
        "packageWidth": "12",
        "packageHeight": "15",
        "packageWeight": "0.1",
        rowClass: 'rowClass',
    },
];
