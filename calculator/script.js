let currentInput = "";
let storedValue = "";
let operator = "";


function btnClick(value)
{
    if (isNaN(value))
    {
        if(currentInput !== "")
        {
            storedValue = currentInput;
            currentInput = "";
        }
        operator = value;
    }
    else
    {
        if (value === '.' && currentInput.includes('.'))
        {
            return;
        }
        currentInput += value;
    }
    updateScreen();
}

function clearScreen()
{
    currentInput ="";
    storedValue ="";
    operator="";
    updateScreen();
}

function equalClick()
{
  if(currentInput !== "" && storedValue !== "")
  {
    let result;
    switch (operator)
    {
        case '+':
            result = parseFloat(storedValue) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(storedValue) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(storedValue) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(storedValue) / parseFloat(currentInput);
            break;
    }
    currentInput = result.toString();
    storedValue="";
    operator="";
    updateScreen();
  }
}

function updateScreen()
{
    document.getElementById("screen").value = currentInput;
}
function delButton()
{
    currentInput = currentInput.slice(0,-1)
    updateScreen();
}
function sqrButton()
{
    let square;
    if(currentInput !=="")
    {
        square=parseFloat(currentInput)*(currentInput);
        currentInput = square.toString();
        updateScreen();
    }
}