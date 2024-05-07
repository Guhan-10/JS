function computerMove(){
    let compMove=''
    a=Math.random()
    if(0<a && a<1/3){
        compMove='Rock'
    }
    else if(1/3<a && a<2/3){
        compMove='Paper'
    }
    else{2/3<a && a<1
        compMove='Scissor'
    }
    return compMove
}
function playerMove(selection)
{
    const compMove=computerMove()
    let result=''
    if(selection==='Rock'){
        if(compMove==='Rock'){
            result='Tie'
        }
        else if(compMove==='Paper'){
            result='You Lose'
        }
        else{
            result='You Win'
        }
    }
    if(selection==='Paper'){
        if(compMove==='Rock'){
            result='You Win'
        }
        else if(compMove==='Paper'){
            result='Tie'
        }
        else{
            result='You Lose'
        }
    }
    if(selection==='Scissor'){
        if(compMove==='Rock'){
            result='You Lose'
        }
        else if(compMove==='Paper'){
            result='You Win'
        }
        else{
            result='Tie'
        }
    }
    document.querySelector('.result').innerHTML=result
    let a=document.querySelector('.moves')
    a.innerHTML=`You Selected <img src=icons/${selection.toLowerCase()}-emoji.png class="icon-img">
    || Computer Selected <img src="icons/${compMove.toLowerCase()}-emoji.png" class="icon-img">` 
if(result==='You Win'){
        score.Win+=1
    }else if(result==='You Lose'){
        score.Lose+=1
    }else{
        score.Tie+=1
    }
    localStorage.setItem('score',JSON.stringify(score))
    updateScore()
} 
let score=JSON.parse(localStorage.getItem('score'))            
||{
Win:0,
Lose:0,
Tie:0
}
updateScore()
function updateScore(){document.querySelector('.score').innerHTML=`Win:${score.Win} Lose:${score.Lose} Tie:${score.Tie}`}
let intervalId=false
function autoPlay(){
if(!intervalId)
{
setInterval(function(){
    let selection=computerMove()
    playerMove(selection)
    intervalId=true
    document.querySelector('.auto-play-button').innerHTML='Reset Play'
},1000)
}else{
    clearInterval(intervalId)
    intervalId=false
    document.querySelector('.auto-play-button').innerHTML='Auto Play'
}
}