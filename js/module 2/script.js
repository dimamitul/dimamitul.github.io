var areaNum = prompt(`
выберите один из курортов:
1 - taba
2 - sharm
3 - hurgada`);


var areaName ="";

switch(parseInt(areaNum))
{
    case 1: areaName= "taba";
    case 2: areaName= "sharm";
    case 3: areaName= "hurgada";
}


if(areaName.length>0)
alert("Вы выбрали курорт: " + areaName);

else 
alert("Введено число, варианта курорта для которого не было!")