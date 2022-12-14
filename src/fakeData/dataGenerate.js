const defColumns = [
	{
		name: 'Inventory',
		prop: 'article',
		rowDrag: true,
		sortable: true,
		order: 'asc',
		pin: 'colPinStart',
		size: 150
	},
	{
		sortable: true,
        name: 'Manufacture',
        prop: 'manufacturer',
	},
	{
		sortable: true,
        name: 'Sales %',
        prop: 'sale_percent',
        columnType: 'number'
	},
	{
		sortable: true,
        name: 'Sales from',
        prop: 'sale_from',
		columnType: 'date',
		size: 150
	},
	{
		sortable: true,
        name: 'Sales to',
        prop: 'sale_to',
		columnType: 'date',
		size: 150
	},
    {
        name: 'Variation (name/price/sales)',
        prop: 'description_short',
		size: 250
    },
    {
        name: 'Variation (name/price/sales)',
        prop: 'description_short',
		size: 250
    },
	// {
	// 	name: 'Eyes',
	// 	prop: 'eyeColor',
	// 	sortable: true,
	// 	cellTemplate: (createElement, props) => (createElement('span', {
	// 		class: 'bubble',
	// 		style: {
	// 			backgroundColor: props.model[props.prop]
	// 		},
	// 	}, props.model[props.prop])
	// 	)
	// },
];

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
	return label;
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

export default function generateFakeDataObject(rows, colsNumber) {
	const result = [...rows];
	const columns = [...defColumns];

	for (let j = 0; j < colsNumber; j++) {
		columns.push({
			name: generateHeader(j),
			prop: j
		});
	}

	for (let i in result) {
		result[i]['highlighted'] = result[i]['eyeColor'];
		for (let j = 0; j < colsNumber; j++) {
			result[i][j] = `${i}:${j}`;
		}
	}
	const pinnedTopRows = result[10] && [result[10]] || [];
	const pinnedBottomRows = result[1] && [result[1]] || [];

	return {
		source: result,
		pinnedTopRows,
		pinnedBottomRows,
		columns,
	};
}

export function generateFakeDataDemo(rows, colsNumber) {
	const result = [...rows];
	const columns = [...defColumns];

	// const companies = Object.keys(rows.reduce((r, p) => {
	// 	r[p.company] = p.company;
	// 	return r;
	// }, {}));
	// const companyColumn = columns[2];
	// columns[2] = {
	// 	...companyColumn,
	// 	columnType: 'select',
	// 	source: companies,
	// };

	// columns.push({
	// 	name: 'Birth date',
	// 	prop: 'date',
	// 	columnType: 'date',
	// 	size: 150
	// });

	// for (let j = 0; j < colsNumber; j++) {
	// 	columns.push({
	// 		name: generateHeader(j),
	// 		prop: j,
	// 		columnType: 'number'
	// 	});
	// }

	for (let i in result) {
		result[i]['highlighted'] = result[i]['eyeColor'];
		result[i]['date'] = '2020-08-24';
		for (let j = 0; j < colsNumber; j++) {
			result[i][j] = getRandomArbitrary(0, 10000);
		}
	}

	return {
		source: result,
		columns,
	};
}