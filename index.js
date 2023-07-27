function updateClock() {
  const currentTime = moment().format("HH:mm");
  document.getElementById("clock").textContent = currentTime;
}

// Оновлення часу кожну секунду
setInterval(updateClock, 1000);

// Виклик функції один раз для відображення часу при завантаженні сторінки
updateClock();

function updateDateForElement(elementId) {
  const currentDate = moment().format("DD.MM.YYYY");
  document.getElementById(elementId).textContent = currentDate;
}

updateDateForElement("date");
updateDateForElement("date1");
updateDateForElement("date2");


// FORM1 newRow
const addRowForm1Button = document.getElementById("add-row-form1");
const tbody1 = document.querySelector("table .tbody1");
let rowCount = 2;
addRowForm1Button.addEventListener("click", onAddRowForm1);

function onAddRowForm1() {
  const newRowHtml = `
    <tr class="form1-new-row">
    <th>${rowCount++}</th>
    <th>
      <label>
      <input
      type="text"
      name="action"
      class="form-table-name"
    />
      </label>

    </th>
    <th>
    <label>
    <input
      type="number"
      name="number"
      class="form1-table-text-name"
  /></label>
    </th>
    <th>
      <select class="list-day">
        <option value="units">шт.</option>
        <option value="ampoules">амп.</option>
        <option value="vials">фл.</option>
        <option value="milliliters">мл.</option>
        <option value="grams">гр.</option>
      </select>
    </th>
    <th>
      <label>
      <input
      type="text"
      name="action"
      class="form-table-name"
    />
      </label>
    </th>
    <th>
      <button type="button" class="table1-btn blue copy-button1"><i class="bx bx-copy bx-sm"></i></button>
      <button type="button" class="table1-btn red delete-button1"><i class='bx bx-trash bx-sm'></i></button>
    </th>
  </tr>
  `;

  tbody1.insertAdjacentHTML("beforeend", newRowHtml);
}


// FORM2 newRow
const addRowForm2Button = document.getElementById("add-row-form2");
const tbody2 = document.querySelector(".tbody2");
let rowCount1 = 2;
addRowForm2Button.addEventListener("click", onAddRowForm2);

function onAddRowForm2() {
  const newRowHtml = `
    <tr class="form2-new-row">
    <td>${rowCount1++}</td>
    <td>
      <label>
        <input
          type="text"
          name="text"
          class="form1-table-text-name"
      /></label>
    </td>
    <td>
      <label>
        <input
          type="number"
          name="number"
          class="form1-table-text-name"
      /></label>
    </td>
    <td>
      <select class="list-day">
        <option value="units">шт.</option>
        <option value="ampoules">амп.</option>
        <option value="vials">фл.</option>
        <option value="milliliters">мл.</option>
        <option value="grams">гр.</option>
      </select>
    </td>
    <td>
      <label>
        <input
          type="text"
          name="text"
          class="form1-table-text-name"
      /></label>
    </td>
    <td>
      <button type="button" class="table1-btn blue copy-button1">
        <i class="bx bx-copy bx-sm copy-button1"></i>
      </button>
      <button type="button" class="table1-btn red delete-button1">
        <i class="bx bx-trash bx-sm delete-button1"></i>
      </button>
    </td>
  </tr>
  `;

  tbody2.insertAdjacentHTML("beforeend", newRowHtml);
}


// FORM3 newRow
const addRowForm3Button = document.getElementById("add-row-form3");
const tbody3 = document.querySelector(".tbody3");
let rowCount2 = 2;
addRowForm3Button.addEventListener("click", onAddRowForm3);

function onAddRowForm3() {
  const newRowHtml = `
  <tr class="form3-new-row">
  <td>${rowCount1++}</td>
  <td> <label>
      <input type="text" name="text" class="form1-table-text-name" /></label></td>
  <td><label>
      <input type="text" name="text" class="form1-table-text-name" /></label></td>
  </td>
  <td><label>
      <input type="text" name="text" class="form1-table-text-name" /></label></td>
  </td>
</tr>
  `;

  tbody3.insertAdjacentHTML("beforeend", newRowHtml);
}


const calendar = document.querySelector(".calendar");


flatpickr("#datepicker", {
  dateFormat: "d.m.Y", 
  inline: true,
  locale: {
    firstDayOfWeek: 1 // Неделя начинается с понедельника (1)
  },
  onChange: function(selectedDates, dateStr, instance) {
    const selectedDate = dateStr;
    const newRowHtml = `
    <div class="calendar-container-form">
    <table class="calendar-form">
    <thead>
      <tr>
        <th class="form1-table-size1">${selectedDate}</th>
        <th class="form1-table-title form1-table-size2" colspan="2">
          ХІРУРГІЯ
        </th>
        <th class="form1-table-size3" colspan="3">
          <select class="list-day">
            <option value="1-2day">1-2 доби</option>
            <option value="3days">3 доби</option>
            <option value="4days">4 доби</option>
            <option value="5days">5 діб</option>
          </select>
        </th>
      </tr>
    </thead>
    <tbody class="tbody1">
      <tr>
        <td colspan="6">
          <label for="forName"></label>
          <input id="forName" type="name" name="name" value="Іванов Іван Іванович" class="form-table-name" />
        </td>
      </tr>
      <tr>
        <td class="form-table-text">Дії</td>
        <td colspan="2">
          <label>
            <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
          </label>
          
        </td>
        <td class="form-table-text" colspan="3">Атрибути</td>
      </tr>
      <tr class="form-table2">
        <th>№</th>
        <th>Назва</th>
        <th>Кількість</th>
        <th>Тип</th>
        <th>Примітки</th>
        <th>Управління</th>
      </tr>
      <tr class="form1-new-row">
        <th>1</th>
        <th>
          <label>
            <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
          </label>
          
        </th>
        <th>
          <label>
            <input type="number" name="number" value="2" class="form1-table-text-name" /></label>
        </th>
        <th>
          <select class="list-day">
            <option value="units">шт.</option>
            <option value="ampoules">амп.</option>
            <option value="vials">фл.</option>
            <option value="milliliters">мл.</option>
            <option value="grams">гр.</option>
          </select>
        </th>
        <th>
          <label>
            <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
          </label>
          
        </th>
        <th>
          <button type="button" class="table1-btn blue copy-button1">
            <i class="bx bx-copy bx-sm copy-button1"></i>
          </button>
          <button type="button" class="table1-btn red delete-button1">
            <i class="bx bx-trash bx-sm delete-button1"></i>
          </button>
        </th>
      </tr>
      <tr class="form1-new-row">
      <th>2</th>
      <th>
        <label>
          <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
        </label>
        
      </th>
      <th>
        <label>
          <input type="number" name="number" value="2" class="form1-table-text-name" /></label>
      </th>
      <th>
        <select class="list-day">
          <option value="units">шт.</option>
          <option value="ampoules">амп.</option>
          <option value="vials">фл.</option>
          <option value="milliliters">мл.</option>
          <option value="grams">гр.</option>
        </select>
      </th>
      <th>
        <label>
          <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
        </label>
        
      </th>
      <th>
        <button type="button" class="table1-btn blue copy-button1">
          <i class="bx bx-copy bx-sm copy-button1"></i>
        </button>
        <button type="button" class="table1-btn red delete-button1">
          <i class="bx bx-trash bx-sm delete-button1"></i>
        </button>
      </th>
    </tr>
    <tr class="form1-new-row">
    <th>3</th>
    <th>
      <label>
        <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
      </label>
      
    </th>
    <th>
      <label>
        <input type="number" name="number" value="2" class="form1-table-text-name" /></label>
    </th>
    <th>
      <select class="list-day">
        <option value="units">шт.</option>
        <option value="ampoules">амп.</option>
        <option value="vials">фл.</option>
        <option value="milliliters">мл.</option>
        <option value="grams">гр.</option>
      </select>
    </th>
    <th>
      <label>
        <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
      </label>
      
    </th>
    <th>
      <button type="button" class="table1-btn blue copy-button1">
        <i class="bx bx-copy bx-sm copy-button1"></i>
      </button>
      <button type="button" class="table1-btn red delete-button1">
        <i class="bx bx-trash bx-sm delete-button1"></i>
      </button>
    </th>
  </tr>
  <tr class="form1-new-row">
  <th>4</th>
  <th>
    <label>
      <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
    </label>
    
  </th>
  <th>
    <label>
      <input type="number" name="number" value="2" class="form1-table-text-name" /></label>
  </th>
  <th>
    <select class="list-day">
      <option value="units">шт.</option>
      <option value="ampoules">амп.</option>
      <option value="vials">фл.</option>
      <option value="milliliters">мл.</option>
      <option value="grams">гр.</option>
    </select>
  </th>
  <th>
    <label>
      <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
    </label>
    
  </th>
  <th>
    <button type="button" class="table1-btn blue copy-button1">
      <i class="bx bx-copy bx-sm copy-button1"></i>
    </button>
    <button type="button" class="table1-btn red delete-button1">
      <i class="bx bx-trash bx-sm delete-button1"></i>
    </button>
  </th>
</tr>
<tr class="form1-new-row">
<th>5</th>
<th>
  <label>
    <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
  </label>
  
</th>
<th>
  <label>
    <input type="number" name="number" value="2" class="form1-table-text-name" /></label>
</th>
<th>
  <select class="list-day">
    <option value="units">шт.</option>
    <option value="ampoules">амп.</option>
    <option value="vials">фл.</option>
    <option value="milliliters">мл.</option>
    <option value="grams">гр.</option>
  </select>
</th>
<th>
  <label>
    <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
  </label>
  
</th>
<th>
  <button type="button" class="table1-btn blue copy-button1">
    <i class="bx bx-copy bx-sm copy-button1"></i>
  </button>
  <button type="button" class="table1-btn red delete-button1">
    <i class="bx bx-trash bx-sm delete-button1"></i>
  </button>
</th>
</tr>
<tr class="form1-new-row">
<th>6</th>
<th>
  <label>
    <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
  </label>
  
</th>
<th>
  <label>
    <input type="number" name="number" value="2" class="form1-table-text-name" /></label>
</th>
<th>
  <select class="list-day">
    <option value="units">шт.</option>
    <option value="ampoules">амп.</option>
    <option value="vials">фл.</option>
    <option value="milliliters">мл.</option>
    <option value="grams">гр.</option>
  </select>
</th>
<th>
  <label>
    <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
  </label>
  
</th>
<th>
  <button type="button" class="table1-btn blue copy-button1">
    <i class="bx bx-copy bx-sm copy-button1"></i>
  </button>
  <button type="button" class="table1-btn red delete-button1">
    <i class="bx bx-trash bx-sm delete-button1"></i>
  </button>
</th>
</tr>
<tr class="form1-new-row">
<th>7</th>
<th>
  <label>
    <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
  </label>
  
</th>
<th>
  <label>
    <input type="number" name="number" value="2" class="form1-table-text-name" /></label>
</th>
<th>
  <select class="list-day">
    <option value="units">шт.</option>
    <option value="ampoules">амп.</option>
    <option value="vials">фл.</option>
    <option value="milliliters">мл.</option>
    <option value="grams">гр.</option>
  </select>
</th>
<th>
  <label>
    <input type="text" name="action" value="Іванов Іван Іванович" class="form-table-name" />
  </label>
  
</th>
<th>
  <button type="button" class="table1-btn blue copy-button1">
    <i class="bx bx-copy bx-sm copy-button1"></i>
  </button>
  <button type="button" class="table1-btn red delete-button1">
    <i class="bx bx-trash bx-sm delete-button1"></i>
  </button>
</th>
</tr>
    </tbody>
  </table>
  </div>
    `;
    calendar.insertAdjacentHTML("afterend", newRowHtml);
  },
});

const calendarDay = document.querySelector(".flatpickr-day");

calendarDay.addEventListener('click', addNewTable)

function addNewTable() {
  console.log('hi');
}

function updateDate1() {
  // Получаем текущую дату в формате "DD.MM.YYYY"
  const currentDate = moment().format("DD.MM.YYYY");

  // Находим все элементы с классом "date"
  const dateElements = document.querySelectorAll(".date-notification");

  // Устанавливаем текст с текущей датой для каждого элемента
  dateElements.forEach((element) => {
    element.textContent = currentDate;
  });}

  updateDate1();



  const listItems = document.querySelectorAll(".item-notification");
const modal = document.querySelector(".modal");
const modalText = document.getElementById("modalText");

listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const text = item.getAttribute("data-text");
    modalText.textContent = text;
    modal.style.display = "block";
    item.classList.remove("accent-notification");
  });

  item.addEventListener("mouseout", () => {
    modal.style.display = "none";
  });
});
// class="flatpickr-day"

// tbody1.addEventListener("click", (e) => {
//   const target = e.target;
//   const row = target.parentNode.parentNode;
//   if (target.classList.contains("copy-button1")) {

//     const newRow = row.cloneNode(true);

//     tableBody.appendChild(newRow);

//   } else if (target.classList.contains("delete-button1")) {
//     row.remove();
//   }
// });

// function updateRowNumbers() {
//   const rows = tableBody.querySelectorAll("tr");
//   for (let i = 1; i < rows.length; i++) {
//     rows[i].cells[0].textContent = i + 0;
//   }
// }

// document.addEventListener("click", function (event) {
//   var clickedElement = event.target;
//   console.log("Вы нажали на элемент:", clickedElement);
// });