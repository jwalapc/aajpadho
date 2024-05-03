import React, { useState } from "react";

const Explain = () => {
  const [code, setCode] = useState("");
  const [values, setValues] = useState({
    text: "",
  });

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer sk-proj-Uj3EFbl3bAeQkqqfNWDWT3BlbkFJtA5cs41HI8IkB3dPwJKQ",
        },
        body: JSON.stringify({
          prompt: "Once upon a time",
          max_tokens: 100, // adjust this as needed
          temperature: 0.7, // adjust this as needed
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch translation");
      }
      const result = await response.json();
      console.log("Response from GPT API:", result);
      setCode(result.choices[0].text);
    } catch (error) {
      console.error("Error:", error);
      setCode("No explanation found");
    }
  };

  return (
    <div className="text-input">
      <form
        className="mt-5 mb-5 login-input"
        onSubmit={handleSubmit}
        style={{ margin: "15rem 10rem" }}
      >
        <h3 style={{ margin: "4rem 0 0 0" }}>
          Enter the code here and understand the explanation
        </h3>
        <div
          className="form-group"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <textarea
            id="exampleFormControlTextarea1"
            rows="7"
            className="form-control"
            placeholder="Enter Code..."
            label="Text"
            name="text"
            value={values.text}
            onChange={handleChanges}
            autoFocus
            required
            style={{ marginTop: "1rem", width: "400px" }}
          />
          <textarea
            id="code"
            style={{ height: "200px", width: "400px", marginTop: "1rem" }}
            value={code}
            placeholder="Explanation"
            readOnly
          ></textarea>
        </div>
        <button
          className="btn btn-info"
          type="submit"
          style={{ marginTop: "5rem" }}
        >
          Explain it!
        </button>
      </form>
    </div>
  );
};

export default Explain;
