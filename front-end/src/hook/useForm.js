import { useState , useEffect} from 'react'
import * as yup from 'yup'
import schema from "../Utilities/formSchema";
 export const useForm = (initialValues , initialErrors , disableButton) => {


    const [formValues , setFormValues] = useState(initialValues);
    const [formErrors , setFormErrors ] = useState(initialErrors)
    const [disabled, setDisabled] = useState(disableButton);

    const inputChange = (name, value) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then(() => {
            setFormErrors({
              ...formErrors,
              [name]: "",
            });
          })
          .catch((err) => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            });
          });
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };

      useEffect(() => {
        schema.isValid(formValues).then((valid) => {
          setDisabled(!valid);
        });
      }, [formValues]);

      const formSubmit = () => {
        const newSignup = {
          username: formValues.name.trim(),
          password: formValues.password,
        };
        console.log(newSignup)
        return newSignup


      };

      return [formValues , formErrors , disabled, inputChange , formSubmit]

 }