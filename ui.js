class UI{
    constructor(firstSelect,secondSelect){
        this.firstSelect=firstSelect;
        this.secondSelect=secondSelect;

        this.outPutFirst=document.getElementById("outputFirst");
        this.outPutSecond= document.getElementById("outputSecond");
        this.outputResult=document.getElementById("outputResult");
    }

    changeFirst(){
        this.outPutFirst.textContent=this.firstSelect.options[firstSelect.selectedIndex].textContent
    }



    changeSecond(){
        this.outPutSecond.textContent =this.secondSelect.options[secondSelect.selectedIndex].textContent

    }
    displayResult(result){
        this.outputResult.value=result;
    }

}