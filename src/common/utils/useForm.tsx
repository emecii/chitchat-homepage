import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));

    const apiKey = process.env.REACT_APP_RAPID_API_KEY;
    const url = "";
    if (Object.values(values).every((x) => x !== "")) {
      // Configure the email sending options
      const options = {
        method: 'POST',
        url: 'https://mail-sender-api1.p.rapidapi.com/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'mail-sender-api1.p.rapidapi.com'
        },
        data: {
          sendto: 'evan@chitchat-ai.com',
          ishtml: 'false',
          title: values.email + ' - ' + values.name + ' - is interested in Chitchat',
          body: 'Message: ' + values.message + '\n\n' + 'Email: ' + values.email + '\n\n' + 'Name: ' + values.name + '\n\n'
        }
      };
  
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setShouldSubmit(true); // Set form submit state on successful email send
        // Additional logic for handling success (like resetting the form) goes here
      } catch (error) {
        console.error(error);
        // Handle errors (like showing an error message) here
      }
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues((values) => (values = { name: "", email: "", message: "" }));
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};
