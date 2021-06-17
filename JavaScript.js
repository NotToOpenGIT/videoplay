
setInterval(() => {
    let d=new Date();
    let h,m,s,hr,mr,sr;
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    hr=h*30+m/2;
    mr=6*m;
    sr=6*s;
    let Hour=document.getElementById("Hour");
    let Sec=document.getElementById("Sec");
    let Min=document.getElementById("Min");
    Sec.style.transform=`rotate(${sr}deg)`;
    Hour.style.transform=`rotate(${hr}deg)`;
    Min.style.transform=`rotate(${mr}deg)`;
}, 1000);