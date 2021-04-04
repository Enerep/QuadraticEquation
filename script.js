

function myFunc(){
    var element = document.getElementById("origeq");
    
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    var z = document.getElementById("z");

    //default values for x y and z
    if( x.value == ""){
        x.value=1;
    }
    if(y.value==""){
        y.value=1;
    }

    if (z.value == ""){
        z.value = 1;
    }
    
    //if(Number.isInteger(x.value)) {
      //  && Number.isInteger(y.value) && Number.isInteger(z.value)
    //}
    
    element.innerHTML = "(" + x.value + "x²)" + "+(" + y.value +"x)" + "+(" + z.value + ")" + "=0" ;
    // equation answer
    // (-b +- sqr(b^2 - 4ac)) / 2a
    var answerforeq = document.getElementById("ans");
    var xo = parseInt(x.value);
    var yo = parseInt(y.value);
    var zo = parseInt(z.value);

    // fixed
    var sqnum = (yo * yo) - (4*xo*zo);
    if (sqnum >= 0 ) {

    var ans1 = -yo + Math.sqrt(sqnum);
    ans1 = ans1 / (2 * xo);
    
    var ans2 = -yo - Math.sqrt(sqnum);
    ans2 = ans2 / (2 * xo);
    }
    else {
        var ans1 = "(" + -yo  + "+√"+ sqnum + ") /" + 2*xo;
        var ans2 = "(" + -yo  + "-√"+ sqnum + ") /" + 2*xo;
    }
    
    answerforeq.innerHTML = "x₁= " + ans1  + "; x₂=" + ans2;
 
    if(sqnum < 0){
        var calculationsteps = document.getElementById("calculation");
        calculationsteps.innerHTML = "(-" + yo + "± √(" + yo + "⋅" +yo + ")-" + "(4⋅" +xo+"⋅"+zo+ ")) / " + "2⋅"+ xo + "<br>(-" + yo + "± √" +sqnum + ")/" + 2*xo+"<br>"  ;
    }
    else if (sqnum >= 0){
        var calculationsteps = document.getElementById("calculation");
        calculationsteps.innerHTML = "(-" + yo + "± √(" + yo + "⋅" +yo + ")-" + "(4⋅" +xo+"⋅"+zo+ ")) / " + "2⋅"+ xo + "<br>(-" + yo + "± √" +sqnum + ")/" + 2*xo+"<br>(-" + yo + "±" + Math.sqrt(sqnum) + ")/" + 2*xo + "<br>" + "x₁=" + (-yo + Math.sqrt(sqnum)) + "/" + 2*xo + "; x₂=" + (-yo - Math.sqrt(sqnum)) + "/" + 2*xo + "<br> x₁=" + ans1 +  "; x₂=" + ans2;
    }
    
}
