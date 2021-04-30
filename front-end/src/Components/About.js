import {useState} from "react"
import axios from 'axios';
import "./About.css";


export default function About(){
const feedbackForm = {
name:"",
email:"",
feedbackField:""}
const[feedback, setFeedback] = useState(feedbackForm)

const onChange = event =>{
    const{name, value, type} = event.target
    setFeedback({...feedback, [name]: value})
}
const onSubmit = event =>{
    event.preventDefault()
const newFeedback={name:feedback.name.trim(), email:feedback.email.trim(), feedbackField:feedback.feedbackField.trim()}
axios.post("https://reqres.in/api/users", newFeedback)
.then((response) => {
    console.log(response.data);
   
})
.catch((error) => {
    console.log(error)
})
}
    return(
        <div>
            <h1>Who we are</h1>
            <p className="bioAndFeedback">
                Even since all the way back during 3500 BCE when African Marketplace was first founded, it has never stopped being our mission 
                to connect customers from all around the world with venders who sell quality products. It does not matter whether you are from
                Italy, Peru, Ethiopia, Cananda, Taiwan, or even Austrailia; we assure you that whereever you buy a product from, that it will 
                arrive on your doorstep as if you bought it from town!
            </p>

            <p className="bioAndFeedback">
                We would love to know how your experience with our site has been! By filling out the form below you help us make African 
                Marketplace the best place for goods from around the world.
            </p>

            <form onSubmit={onSubmit}>
                <label>
                    Name   
                    <input
                        name='name'
                        type='text'
                        value={feedback.name}
                        onChange={onChange}
                    />
                </label>


                <label>
                    Email   
                    <input
                        name='email'
                        type='email'
                        value={feedback.email}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Feedback   
                    <input
                        name='feedbackField'
                        type='text'
                        value={feedback.feedbackField}
                        onChange={onChange}
                    />
                </label>

                <button className="submit">
                    Submit
                </button>
            </form>

            <h2>Contact</h2>
            <p>Email: CustomerService@safrica.com</p>
            <p>Phone: 1-800-233-2012 (Available 10am - 7pm EST all 7 days of the week)</p>
            <p>Address: 2313 W. Chestnut Dr., Norfolk, Virginia 23324 United States</p>
        </div>
    )
}
