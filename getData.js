const url = 'https://jsonplaceholder.typicode.com/users';

function getData() {
	const request = new XMLHttpRequest();
	request.open('GET', 'https://jsonplaceholder.typicode.com/users');
	request.send();

	request.onload = function() {
		let userData = JSON.parse(request.response);
			let tableData = document.createElement('table');
			tableData.id = 'table1'; 
			document.body.append(tableData);

			var dataValue = [];

			let table2 = document.createElement('table');
			document.body.append(table2);
			table2.id = 'table2';

			for(let obj of userData) {
			    dataValue = dataValue.concat(Object.values(obj));
			}
			//console.log(dataValue)
			for(let i = 0; i < userData.length; i++) {
				let tr = document.createElement('tr');
				tr.onclick = function clonTr() {
					if(i !== 0) {
						let nextTable = document.getElementById('table2');
						nextTable.append(tr);
						nextTable.id = 'nextTable';
						console.logh(nextTable.cells)
						//tr.removeEventListener("click", clonTr);
					}
				};

				if(i == 0) {
					for(let dataName in userData[i]) {
						if(dataName !== 'id' && dataName !== 'address' && dataName !== 'company') {
							let th = document.createElement('th');
							tr.append(th);
							th.innerText = dataName;
						}
					}
				} 
				else {
					let j = 0;
					for(let dataName in userData[i]) {
						let td = document.createElement('td');
						let value = Object.values(userData[i]);

						if(dataName !== 'id' && dataName !== 'address' && dataName !== 'company') {	
							tr.append(td);
						}
						td.innerText = value[j];
						j++;
					}
				}
				tableData.append(tr);	
		}
	};
}
getData();
