import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect, useState } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  const [enteredEmail, setEnteredEmail] = useState("");

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      setEnteredEmail("");
      window.alert(data.message);
    }
  }, [data, state]);

  const changeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  return (
    <fetcher.Form
      method='post'
      action='/newsletter'
      className={classes.newsletter}
    >
      <input
        name='email'
        type='email'
        value={enteredEmail}
        onChange={changeEmailHandler}
        placeholder='Sign up for newsletter...'
        aria-label='Sign up for newsletter'
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
