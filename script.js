const incomeForm = document.getElementById("income-form")
const incomeAmount = document.getElementById("income-amount")
const incomeDisplay = document.querySelector("#displayIncome")


const expenseForm = document.getElementById("expense-form");
const expenseAmount = document.getElementById("expenseAmount");
const expenseDesc = document.getElementById("expenseDesc");
const expenseCategory = document.getElementById("expenseCategory");

const balanceElement = document.getElementById("balance")

let expenses=[]
// Income form handling

let income = 0
incomeForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    income = parseInt(incomeAmount.value)
    incomeAmount.value=''
    incomeDisplay.textContent=`Income amount: ${income}`

    updateBalance();

})

// Handle submit of expense form

expenseForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const expense={
        description:expenseDesc.value,
        amount: parseFloat(expenseAmount.value),
        category:expenseCategory.value
    }
    expenses.push(expense);
    
    expenseDesc.value='';
    expenseAmount.value='';
    expenseCategory.value='Food';
      updateBalance();
})

const updateBalance = ()=>{
    const totalExpenses = expenses.reduce((sum,expense)=> sum+expense.amount,0)

    const balance = income - totalExpenses;
   
    balanceElement.textContent = `Balance: Rs ${balance.toFixed(2)}`
}