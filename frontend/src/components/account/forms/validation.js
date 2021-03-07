
const errorTypes = {
    emptyField: "emptyField",
    paswMismatch: "paswMismatch",
    invalidEmail: "invalidEmail",
    termsOfUse: "termsOfUse" 
}


function clearError(element){
    element.parentElement.className = element.parentElement.className.replace(/\sinput-error/, "");
    element.parentElement.removeAttribute("data-tooltip");
}


export function clearInputs(inputs){
    Object.keys(inputs).forEach(key => {
        clearError(inputs[key]);
    })
}


export function validateInputs(inputs, t){

    function highlightError(element, errorType){
        element.parentElement.className= element.parentElement.className.replace(/\sinput-error/, "");
        element.parentElement.className = element.parentElement.className + " input-error";
    
        if(errorType === errorTypes.emptyField){
            element.parentElement.setAttribute("data-tooltip", t("formErrors.emptyField"));
        }
    
        else if(errorType === errorTypes.paswMismatch){
            element.parentElement.setAttribute("data-tooltip", t("formErrors.paswMismatch"));
        }
    
        else if(errorType === errorTypes.invalidEmail){
            element.parentElement.setAttribute("data-tooltip", t("formErrors.invalidEmail"));
        }

        else if(errorType === errorTypes.termsOfUse){
            element.parentElement.setAttribute("data-tooltip", t("formErrors.termsOfUse"));
        }
    }


    let isValid = true;
    Object.keys(inputs).forEach(key => {
        if(inputs[key].value === ""){
            isValid = false;
            highlightError(inputs[key], errorTypes.emptyField);
        }
        else clearError(inputs[key]);
    })

    if(inputs["password"]?.value !== inputs["password2"]?.value){
        isValid = false;
        highlightError(inputs["password"], errorTypes.paswMismatch);
        highlightError(inputs["password2"], errorTypes.paswMismatch);
    }

    if(inputs["email"] && (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputs["email"].value))){
        isValid = false;
        highlightError(inputs["email"], errorTypes.invalidEmail)
    }

    if(inputs["touCheck"] && inputs["touCheck"]?.checked === false){
        isValid = false;
        highlightError(inputs["touCheck"], errorTypes.termsOfUse);
    }

    return isValid;
}