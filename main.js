function DataTable(config, data) {
    // creation and adding of table
    let table = document.createElement("table");
    document.querySelector(config.parent).appendChild(table);

    // creation and adding of the first line of table
    let firstLine = document.createElement("tr");
    table.appendChild(firstLine);

    //creation and adding of the column for number
    let th = document.createElement("th");
    th.innerHTML = "№";
    firstLine.appendChild(th);

    //creation and adding of the other columns
    for (const column of config.columns) {
        let thHead = document.createElement("th");
        thHead.innerHTML = column.title;
        firstLine.appendChild(thHead);
    }

    //creation and adding of the table content
    let index = 1;
    for (const user of data) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        let number = document.createElement("td");
        number.innerHTML = index;
        tr.appendChild(number);
        for (const column of config.columns) {
            let td = document.createElement("td");
            td.innerHTML = user[column.value];
            tr.appendChild(td);
        }
        index++;
    }

}

const config1 = {
    parent: '#usersTable',
    columns: [
        { title: 'Ім’я', value: 'name' },
        { title: 'Прізвище', value: 'surname' },
        { title: 'Вік', value: 'age' },
    ]
};

const users = [
    { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
    { id: 30051, name: 'Вася', surname: 'Васечкін', age: 15 },
];

DataTable(config1, users);