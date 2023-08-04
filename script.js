const n1 = document.getElementById('name1')
const n2 = document.getElementById('name2')

const verify = () =>
{
    if(n1.value == '' || n2.value == '')
    {
        alert("Enter names of both the players")
    }
    else
    {
        window.open("fight.html")
        localStorage.setItem('name1', n1.value);
        localStorage.setItem('name2', n2.value);
    }
}