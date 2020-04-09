console.clear();

let grid = document.getElementById('grid');

const numberOfRows = 9;
const numberOfColumns = 9;

let html = `<table>\r\n`;

for(let r = 1; r <= numberOfRows; r++)
{
    html += `  <tr>\r\n`;

    for(let c = 1; c <= numberOfColumns; c++)
    {
        let classes = [];

        if(r % 3 === 1)
        {
            classes.push('border-top-solid');
        }
        else
        {
            classes.push('border-top-dotted');
        }

        if(r === 9)
        {
            classes.push('border-bottom-solid');
        }

        if(c % 3 === 1)
        {
            classes.push('border-left-solid');
        }
        else
        {
            classes.push('border-left-dotted');
        }

        if(c === 9)
        {
            classes.push('border-right-solid');
        }

        html += `    <td class="${classes.join(' ')}">`;
        html += `<input type="text" class="input" id="R${r}C${c}" name="R${r}C${c}" maxlength="1">`;
        html += `</td>`;
    }

    html += `  </tr>\r\n`;
}

html += `</table>\r\n`;

grid.innerHTML = html;