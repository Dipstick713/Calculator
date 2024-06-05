function reset()
{
    document.getElementById("divide").style.backgroundColor="orange";
    document.getElementById("multiply").style.backgroundColor="orange";
    document.getElementById("minus").style.backgroundColor="orange";
    document.getElementById("plus").style.backgroundColor="orange";
}

function percent(num)
{
    let per=num*0.01;
    document.getElementById("result").innerHTML=per.toPrecision(4);
}

let btns = document.querySelectorAll('button');
let num = 0;
let operator=null;
let val=false;

function operate()
{
    let operation=0;
    val=false;
    if(operator=="+") 
    {
        operation=num+parseFloat(document.getElementById("result").innerHTML);
        document.getElementById("result").innerHTML=operation.toPrecision(5);
    }
    else if(operator=="-")
    {
        operation=num-parseFloat(document.getElementById("result").innerHTML);
        document.getElementById("result").innerHTML=operation.toPrecision(5);
    }
    else if(operator=="*")
    {
        operation=num*parseFloat(document.getElementById("result").innerHTML);
        document.getElementById("result").innerHTML=operation.toPrecision(5);
    }
    else if(operator=="/")
    {
        operation=num/parseFloat(document.getElementById("result").innerHTML);
        document.getElementById("result").innerHTML=operation.toPrecision(5);
    }
}

for (i of btns) {
    i.addEventListener('click', function() {
        if(this.innerHTML=="AC")
        {
            document.getElementById("result").innerHTML="0";
            num=0;
            operator=null;
            document.getElementById("point").disabled = false;
            point=false;
            reset();
        }
        else if (this.innerHTML=="+/-")
        {
            num=-1*parseFloat(document.getElementById("result").innerHTML);
            if(num==0) document.getElementById("result").innerHTML=num;
            else document.getElementById("result").innerHTML=num.toPrecision(5);
        }
        else if (this.innerHTML==".")
        {
            document.getElementById("point").disabled = true;
            let value = document.getElementById("result").innerHTML.indexOf(".");
            if(value==-1)document.getElementById("result").innerHTML+=this.innerHTML;
            else document.getElementById("result").innerHTML="0.";

        }
        else if (this.innerHTML=="%") 
        {
            percent(parseFloat(document.getElementById("result").innerHTML));
            num=0;
            operator=null;
            reset();
        }
        else if (this.innerHTML=="/")
        {
            operate();
            operator="/";
            num = parseFloat(document.getElementById("result").innerHTML);
            document.getElementById("divide").style.backgroundColor="rgb(236, 181, 77)";
            document.getElementById("point").disabled = false;
        }
        else if (this.innerHTML=="*")
        {
            operate();
            operator="*";
            num = parseFloat(document.getElementById("result").innerHTML);
            document.getElementById("multiply").style.backgroundColor="rgb(236, 181, 77)";
            document.getElementById("point").disabled = false;
        }
        else if (this.innerHTML=="-")
        {
            operate();
            operator="-";
            num = parseFloat(document.getElementById("result").innerHTML);
            document.getElementById("minus").style.backgroundColor="rgb(236, 181, 77)";
            document.getElementById("point").disabled = false;
        }
        else if (this.innerHTML=="+")
        {
            operate();
            operator="+";
            num = parseFloat(document.getElementById("result").innerHTML);
            document.getElementById("plus").style.backgroundColor="rgb(236, 181, 77)";
            document.getElementById("point").disabled = false;
        }
        else if (this.innerHTML=="=")
        {
            operate();
            operator=null;
            num=0;
        }
        else
        {
            reset();
            if(document.getElementById("result").innerHTML=="0")
            {
                if(this.innerHTML==".") document.getElementById("result").innerHTML+=this.innerHTML;
                else document.getElementById("result").innerHTML=this.innerHTML;
            }
            else if (document.getElementById("result").innerHTML=="0.")
            {
                document.getElementById("result").innerHTML+=this.innerHTML;
            }
            else if(operator!=null)
            {
                if(document.getElementById("result").innerHTML.indexOf(".")==(document.getElementById("result").innerHTML.length-1) || val==true)
                {
                    document.getElementById("result").innerHTML+=this.innerHTML;
                }    
                else 
                {
                    document.getElementById("result").innerHTML=this.innerHTML;
                    val=true;
                }
            }
            else
            {
                document.getElementById("result").innerHTML+=this.innerHTML;
            }
        }  
    })
}