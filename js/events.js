const CheckInputValue = event =>
{
    let allowedValues = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '♠' ];

    if(event.target.value.length === 1 && allowedValues.findIndex(v => v === event.target.value) === -1)
    {
        event.target.value = '';
    }
};

const Solve = event =>
{
    let localGrid = [];

    for(let r = 1; r <= numberOfRows; r++)
    {
        for(let c = 1; c <= numberOfColumns; c++)
        {
            let value = document.getElementById(`R${r}C${c}`).value;
            let field = 
            {
                Row: r,
                Column: c,
                Values: [ ]
            };

            if(value.length !== 0)
            {
                field.Values.push(value);
            }

            localGrid.push(field);
        }
    }

    

    console.log(localGrid);

};

const Reset = event =>
{
    for(let r = 1; r <= numberOfRows; r++) 
    {
        for(let c = 1; c <= numberOfColumns; c++)
        {
            document.getElementById(`R${r}C${c}`).value = '';
        }
    }
};

let buttonSolve = document.getElementById('solve');
let buttonReset = document.getElementById('reset');

for(let r = 1; r <= numberOfColumns; r++)
{
    for(let c = 1; c <= numberOfColumns; c++)
    {
        let inputField = document.getElementById(`R${r}C${c}`);

        inputField.addEventListener('blur', CheckInputValue);
    }
}

buttonSolve.addEventListener('click', Solve);
buttonReset.addEventListener('click', Reset);