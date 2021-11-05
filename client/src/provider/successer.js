import success from'../sucess.png'
import failure from '../failed.png'



export default function successer (launch_success){
   
    var conclusion 

    if(launch_success){
        conclusion=success   
    }
    else {
    conclusion = failure
    }

    return conclusion
}

