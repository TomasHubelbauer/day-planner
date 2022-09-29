const table = document.querySelector('table');

for (let hour = 0; hour < 24; hour++) {
  const tr = document.createElement('tr');

  const th = document.createElement('th');
  th.textContent = hour.toString().padStart(2, 0);
  tr.append(th);

  for (let minute = 0; minute < 60; minute += 10) {
    const td = document.createElement('td');
    td.textContent = ':' + minute.toString().padStart(2, 0);
    tr.append(td);
  }

  table.append(tr);
}

function renderTypes() {
  const typeDiv = document.querySelector('#typeDiv');
  typeDiv.replaceChildren();

  const types = JSON.parse(localStorage.getItem('types') ?? '[]');
  for (const type of types) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'type';

    input.addEventListener('change', () => {

    });

    const span = document.createElement('span');
    span.textContent = type.name;

    label.append(input, span);
    typeDiv.append(label);
  }

  const button = document.createElement('button');
  button.textContent = '+';
  button.addEventListener('click', () => {
    const name = prompt('Name');
    if (!name) {
      return;
    }

    types.push({ name });
    localStorage.setItem('types', JSON.stringify(types));
  });

  typeDiv.append(button);
}

renderTypes();
