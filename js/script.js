const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const formMessage = document.getElementById("form-message");
const submitBtn = document.getElementById("submit-btn");

const totalExpensesEl = document.getElementById("total-expenses");
const expensesCountEl = document.getElementById("expenses-count");

const filterCategory = document.getElementById("filter-category");
const searchDescription = document.getElementById("search-description");

const expensesTableBody = document.getElementById("expenses-table-body");

let expenses = [];
let editExpenseId = null;

function showMessage(message, type = "success") {
  formMessage.innerHTML = `
    <div class="alert alert-${type}" role="alert">
      ${message}
    </div>
  `;
}

function clearMessage() {
  formMessage.innerHTML = "";
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("it-IT");
}

function getCategoryBadgeClass(category) {
  switch (category) {
    case "Casa":
      return "text-bg-primary";
    case "Cibo":
      return "text-bg-success";
    case "Trasporti":
      return "text-bg-warning";
    case "Tempo libero":
      return "text-bg-info";
    case "Salute":
      return "text-bg-danger";
    default:
      return "text-bg-secondary";
  }
}

function updateSummary() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalExpensesEl.textContent = `€ ${total.toFixed(2)}`;
  expensesCountEl.textContent = expenses.length;
}

function getFilteredExpenses() {
  const selectedCategory = filterCategory.value;
  const searchText = searchDescription.value.trim().toLowerCase();

  return expenses.filter((expense) => {
    const matchesCategory =
      selectedCategory === "Tutte" || expense.category === selectedCategory;

    const matchesSearch =
      expense.description.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });
}

function renderExpenses() {
  const filteredExpenses = getFilteredExpenses();

  if (filteredExpenses.length === 0) {
    expensesTableBody.innerHTML = `
      <tr id="empty-row">
        <td colspan="5" class="text-center text-muted py-4">
          Nessuna spesa trovata.
        </td>
      </tr>
    `;
    return;
  }

  expensesTableBody.innerHTML = "";

  filteredExpenses.forEach((expense) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${expense.description}</td>
      <td>€ ${expense.amount.toFixed(2)}</td>
      <td>
        <span class="badge badge-category ${getCategoryBadgeClass(expense.category)}">
          ${expense.category}
        </span>
      </td>
      <td>${formatDate(expense.date)}</td>
      <td class="text-center">
        <div class="actions-btns">
          <button class="btn btn-sm btn-outline-warning" onclick="editExpense(${expense.id})">
            Modifica
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteExpense(${expense.id})">
            Elimina
          </button>
        </div>
      </td>
    `;

    expensesTableBody.appendChild(row);
  });
}

function resetForm() {
  expenseForm.reset();
  editExpenseId = null;
  submitBtn.textContent = "Aggiungi spesa";
}

function validateForm(description, amount, category, date) {
  if (!description || !amount || !category || !date) {
    showMessage("Tutti i campi sono obbligatori.", "danger");
    return false;
  }

  if (isNaN(amount) || Number(amount) <= 0) {
    showMessage("L'importo deve essere un numero maggiore di 0.", "danger");
    return false;
  }

  return true;
}

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  clearMessage();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;
  const date = dateInput.value;

  if (!validateForm(description, amount, category, date)) {
    return;
  }

  if (editExpenseId !== null) {
    const expenseIndex = expenses.findIndex((expense) => expense.id === editExpenseId);

    if (expenseIndex !== -1) {
      expenses[expenseIndex] = {
        ...expenses[expenseIndex],
        description,
        amount,
        category,
        date
      };

      showMessage("Spesa modificata con successo.", "warning");
    }
  } else {
    const newExpense = {
      id: Date.now(),
      description,
      amount,
      category,
      date
    };

    expenses.push(newExpense);
    showMessage("Spesa aggiunta con successo.", "success");
  }

  updateSummary();
  renderExpenses();
  resetForm();
});

function deleteExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);

  updateSummary();
  renderExpenses();
  showMessage("Spesa eliminata con successo.", "info");

  if (editExpenseId === id) {
    resetForm();
  }
}

function editExpense(id) {
  const expenseToEdit = expenses.find((expense) => expense.id === id);

  if (!expenseToEdit) return;

  descriptionInput.value = expenseToEdit.description;
  amountInput.value = expenseToEdit.amount;
  categoryInput.value = expenseToEdit.category;
  dateInput.value = expenseToEdit.date;

  editExpenseId = id;
  submitBtn.textContent = "Salva modifica";

  showMessage("Stai modificando una spesa.", "warning");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

filterCategory.addEventListener("change", renderExpenses);
searchDescription.addEventListener("input", renderExpenses);

updateSummary();
renderExpenses();