function check(){
    let yes=document.getElementById("yes");
    let no=document.getElementById("no");
    const output = document.getElementById("output");
    if (!(no.checked)&& yes.checked){
        output.value="eligible";
    }
    else if (!(yes.checked)&& no.checked){
        output.value=" not eligible to vote";
    }
    if (!(yes.checked)&& !(no.checked)){
        output.value="please select to know result";
    }

    }
