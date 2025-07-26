
let day=parseInt(prompt("Enter Days(1-7):"));

let dyaName;

switch(day)
{
     case 1:
    
     dyaName="monday";
     break;

      case 2:
     dyaName="Tuesday";
     break;
 
    case 3:
     dyaName="Wednesday";
     break;
     
     case 4:
     dyaName="Thuesday";
     break;

     case 5:
     dyaName="Friday";
     break;

     case 6:
     dyaName="Saturday";
     break;

     case 7:
     dyaName="Sunday";
     break;

     default:

     dyaName="Invalid";

}

document.write("Todys day is "+dyaName);