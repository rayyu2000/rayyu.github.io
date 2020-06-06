// Ray: Declare variables of our team data names 'we'
let we = [
    {
        First: 'Eric',
        Last: 'Inoue',
        Age: 20,
        Grade: 'Sophomore',
    },

    {
        First: 'Satveer',
        Last: 'Kaur',
        Age: 19,
        Grade: 'Junior',
    },

    {
        First: 'Lars',
        Last: 'Vik',
        Age: 19,
        Grade: 'Sophomore',
    },


    {
        First: 'Ray',
        Last: 'Yu',
        Age: 19,
        Grade: 'Freshmen',
    },
];

// Ray: Set function that will execute when page is loaded.
document.body.onload = function () {
    for (let i = 0; i < we.length; i++) {
        const me = we[i];

        let tr = document.createElement('tr');
        tr.onmouseover = function () {
            console.log('me', me);
            tr.className = 'focus';
            tr.style.cursor = 'pointer';
        }
        tr.onmouseout = function () {
            console.log('me', me);
            tr.className = '';
        }
        tr.onclick = function () {
            window.alert(`this is team member ${i + 1}, name is ${me.First} ${me.Last}, ${me.Age} years old`);
        }

        let td = document.createElement('td');

        if (me.First === 'Ray') {
            a = document.createElement('a');
            a.className = 'no-decoration'
            a.href = '#ray-work'
            a.innerText = me.First;
            td.appendChild(a);
        } else {
            td.innerText = me.First;
        }

        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = me.Last;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = me.Age;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = me.Grade;
        tr.appendChild(td);

        document.getElementById('team').appendChild(tr);
    }
}
