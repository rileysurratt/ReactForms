import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
            { 
              method: "GET", 
              headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
              }
            })
            const result = await response.json();
            setSuccessMessage(result.message)
        } catch {
            setError(error.message)
        }
    }
   return (
    <>
    <div className="form-container2">
    <h2 className="form-header2">Authenticate</h2>
    {successMessage && <p>{successMessage}</p>}
    {error && <p>{error}</p>}
    <p className="form-description">Authenticate your account here ⬇️</p>
    <Button onClick={handleClick} variant="primary">Authenticate Token</Button>
    </div>

    </>
   )
}