let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbutton = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");
let turn0=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,7],
    [6,7,8],
];

boxes.forEach((box)=>
{
    box.addEventListener("click",() =>
    {
        if(turn0)
        {
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="0";
            turn0=true;
        }
        box.disabled=true;
        winner();

    });
});
const showwinner = (winner) => {
    msg.innerText= `congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();

};
const disablebtn = () => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enalebtn = () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

const resetgame = () => {
    turn0 = true;
    enalebtn();
    msgcontainer.classList.add("hide");
}



const winner = ()=> {
    for(let pattern of win)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
}

newbutton.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);