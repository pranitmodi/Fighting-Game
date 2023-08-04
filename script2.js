let n1 = localStorage.getItem('name1');
let n2 = localStorage.getItem('name2');

const d1 = document.getElementById('na1')
const d2 = document.getElementById('na2')

const score1 = document.getElementById('v1')
const score2 = document.getElementById('v2')

let s1
let s2

const process = () =>
{
    d1.innerText = n1
    d2.innerText = n2

    s1 = 100
    s2 = 100

    score1.innerText = `Score: ${s1}`
    score2.innerText = `Score: ${s2}`
}
process()

const a = ducument.getElementById('fheal')
console.log(a)

document.addEventListener('keydown',function(e)
{
    if(e.key == 'Q')
    {
        ducument.getElementById('fpunch').play()
    }
})