'use strict';

// write code here
const headers = [...document.querySelectorAll('table thead tr th')];

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const indexHeader = headers.indexOf(header);
    const rows = [...document.querySelectorAll('table tbody tr')];

    let sortedRows;

    if (header.textContent === 'Name' || header.textContent === 'Position') {
      sortedRows = [...rows].sort((a, b) => {
        return a.children[indexHeader].textContent
          .trim()
          .localeCompare(b.children[indexHeader].textContent.trim());
      });
    }

    if (header.textContent === 'Age') {
      sortedRows = [...rows].sort((a, b) => {
        const aAge = Number(a.cells[2].textContent);
        const bAge = Number(b.cells[2].textContent);

        return aAge - bAge;
      });
    }

    if (header.textContent === 'Salary') {
      sortedRows = [...rows].sort((a, b) => {
        const aSalary = Number(
          a.cells[3].textContent.replace(/[^0-9.-]+/g, ''),
        );
        const bSalary = Number(
          b.cells[3].textContent.replace(/[^0-9.-]+/g, ''),
        );

        return aSalary - bSalary;
      });
    }

    const tbody = document.querySelector('table tbody');

    tbody.innerHTML = '';

    sortedRows.forEach((row) => {
      tbody.append(row);
    });
  });
});
