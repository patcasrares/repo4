let n=10;
let m=10;
let z=1;
let lmx=5;
let rmx=5;
let lmy=5;
let rmy=5;
let K=5;
let curent=0;
let cnt=0;
let inceput=0;

const move_p=document.querySelector(".move > p");

function setup() {
    createCanvas(3000,3000);
    let ly=-10;
     let l=40;
    if(z==0)
    {
        n=1+Math.floor(Math.random()*10);
        m=1+Math.floor(Math.random()*10);
        n=Math.max(n,3);
        m=Math.max(m,3);

        lmx=1+Math.floor(Math.random()*n);
        rmx=lmx;

        lmy=1+Math.floor(Math.random()*m);
        rmy=lmy;
        K=1+Math.floor(Math.random()*Math.min(n,m));
        move_p.innerHTML = "K="+K;
        curent=0;
        cnt=0;
        inceput=0;
    }
    z=1;
    for(i=1;i<=n;i++)
    {
        ly+=l;
        let lx=500;
        for(j=1;j<=m;j++)
         {
             lx+=l;
             //console.log(i,j,lx,ly,rx,ry);
             if(i>=lmx && j>=lmy)
                if(i<=rmx && j<=rmy)
                {
                    //console.log(i,j,lx,ly,rx,ry);
                    fill(255,102,102);
                }
             rect(lx,ly,l,l);
             fill(255,255,255);
         }
    }
   // background(200);
}

function draw() {
    
}

function desen()
{
    
    for(i=1;i<=n;i++)
        for(j=1;j<=m;j++)
            {
               // console.log(i,j);
                //fill(0,0,255);
                //rect(300,300,300,300);
            }
}

function mutare(ch)
{
    console.log(cnt,ch,rmy,K);
    
    if(cnt==K)
    {
        return;
    }
console.log("chh");
    
    if(ch==1)
    {
        if(lmx==1)
            return;
    }
    if(ch==2)
    {
        if(rmx==n)
            return;
    }
    

    if(ch==3)
    {
        if(lmy==1)
            return;
    }

    if(ch==4)
    {
        if(rmy==m)
            return;
    }
    
    if(curent==0)
    {
        curent=ch;
    }
    if(curent!=ch)
    {
        return;
    }
    if(ch==1)
    {
        lmx--;
    }

    if(ch==2)
    {
        rmx++;
    }

    if(ch==3)
    {
        lmy--;
    }

    if(ch==4)
    {
        rmy++;
    }
    
    cnt++;
    inceput=1;
    //setup();
    if(lmx==1&&rmx==n)
    if(lmy==1&&rmy==m)
    {
        move_p.innerHTML = "YOU WIN";
    }
}

function pc_move()
{
    var sol = [0,(lmx-1),(n-rmx),(lmy-1),(m-rmy)];
    let sum=0;
    for(i=1;i<5;i++)
    {
        sum=sum^(sol[i]%(K+1));
    }
    if(sum>0)
    {
        console.log(sum);
        for(i=1;i<5;i++)
        {
            if(sol[i]%(K+1)>(sum^(sol[i]%(K+1))))
            {
                console.log(sol[i]%(K+1)-(sum^(sol[i]%(K+1))),i);
                let nrr=(sol[i]%(K+1))-(sum^(sol[i]%(K+1)));
                for(j=1;j<=nrr;j++)
                    mutare(i);
                 i=6;
            }
        }
    }
    else
    {
        for(i=1;i<5;i++)
            if(sol[i]>0)
            {
                mutare(i);
                break;
            }
    }
    if(lmx==1&&rmx==n)
    if(lmy==1&&rmy==m)
    {
        move_p.innerHTML = "YOU LOSE";
    }
}

function main()
{
    desen();
    document.addEventListener("keyup",function(e) {
        if(e.keyCode == 82)
        {
            z=0;
        }

        if(e.keyCode == 87)
        {
            
            mutare(1);
        }

        if(e.keyCode == 83)
        {
            
            mutare(2);
        }

        if(e.keyCode == 65)
        {
            
            mutare(3);
        }

        if(e.keyCode == 68)
        {
            
            mutare(4);
        }


        if(e.keyCode == 80)
        {
            console.log("Pc");
            if(cnt>0||inceput==0)
            {
                console.log("zPc");
                curent=0;
                inceput=1;
                cnt=0;
                pc_move();
                cnt=0;
                curent=0;
                console.log(cnt);
            }
        }
        setup();
    })
}



main();