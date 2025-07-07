function calculatorbutton(val){
     
     console.log(`${val}`);
     
     const mainframe = document.getElementById("myDiv")
     if(val != "="  && val != "_"){
     mainframe.textContent += val
    }
    else if(val == "_"){
        mainframe.textContent = ""
    }
    else {
         try {
  mainframe.textContent = eval(mainframe.textContent);
} catch (err) {
  mainframe.textContent = "Error";
}                                                            //Number(mainframe.textContent here the number method wll convert the expression into nan
                                                                    // so dont use number instead of that just use eval(mainframe.textContent)
      
        
    }

}