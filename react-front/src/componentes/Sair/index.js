import { useNavigate } from "react-router-dom";
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = 'https://ysqzfvxryhxekhgrjkzr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcXpmdnhyeWh4ZWtoZ3Jqa3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTQ1OTEsImV4cCI6MjAzMDY5MDU5MX0.TnRSA9aR99HHWffExwfHZpLfIenJWz2YDVnn1wX4QDM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Sair() {
    const navigate = useNavigate()
    async function logOut() {
        await supabase.auth.signOut({ scope: 'local' });
        navigate("/login")
    }
    return (
        <button className="btn btn-danger" onClick={logOut}>Sair</button>
    )
}