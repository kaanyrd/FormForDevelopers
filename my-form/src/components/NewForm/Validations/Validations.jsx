import {object, string} from "yup"


let Validations = object({
    firstName: string().min(3, "Please write a valid name").required("Please enter your name"),
    lastName: string().min(3, "Please write a valid surname").required("Please enter your surname"),
    email: string().email().required("Please write a valid e-mail adress"),
    challengeComment: string().min(20, "At least 20 characters...").required("Please enter your comment"),
    help: string().min(20, "At least 20 characters...").required("Please enter the topic..."),

})


export default Validations