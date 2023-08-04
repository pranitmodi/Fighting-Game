let n1 = localStorage.getItem('name1');
let n2 = localStorage.getItem('name2');

const d1 = document.getElementById('na1')
const d2 = document.getElementById('na2')

const score1 = document.getElementById('v1')
const score2 = document.getElementById('v2')

const res = document.getElementById('res')

let c = 1

let s1
let s2

const display = () =>
{
    score1.innerText = `Health: ${Math.trunc(s1)}`
    score2.innerText = `Health: ${Math.trunc(s2)}`

    if(s1 < 0)
    {
        res.innerText = `${n2} Won`
        document.getElementById('vic').play()
        c = 0
    }
    else if(s2 < 0)
    {
        res.innerText = `${n1} Won`
        document.getElementById('vic').play()
        c = 0
    }
    else
    {
        res.innerText = ''
    }
}

const process = () =>
{
    d1.innerText = n1
    d2.innerText = n2

    s1 = 100
    s2 = 100

    display()
}

process()

document.addEventListener('keydown',function(e)
{
    if(c == 1)
    {
        if(e.key == 'Q' || e.key == 'q')
        {
            s2 = s2 - (Math.random()*10)
            document.getElementById('fpunch').play()
        }
        else if(e.key == 'A' || e.key == 'a')
        {
            s1 = s1 + (Math.random()*10)
            document.getElementById('fheal').play()
        }
        else if(e.key == 'P' || e.key == 'p')
        {
            s1 = s1 - (Math.random()*10)
            document.getElementById('qhit').play()
        }
        else if(e.key == 'L' || e.key == 'l')
        {
            s2 = s2 + (Math.random()*10)
            document.getElementById('qheal').play()
        }
        display()
    }
})

function reset()
{
    c = 1
    s1 = 100
    s2 = 100
    display()
}