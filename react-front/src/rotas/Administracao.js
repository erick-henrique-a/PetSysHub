import QrCodeGenerator from "../componentes/QrCodeGenerator";
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import Sair from "../componentes/Sair";
import { useNavigate } from "react-router-dom";

const supabaseUrl = 'https://ysqzfvxryhxekhgrjkzr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcXpmdnhyeWh4ZWtoZ3Jqa3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTQ1OTEsImV4cCI6MjAzMDY5MDU5MX0.TnRSA9aR99HHWffExwfHZpLfIenJWz2YDVnn1wX4QDM'
const supabase = createClient(supabaseUrl, supabaseKey)

function Administração() {
  const navigate = useNavigate()
  const [session, setSession] = useState(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (!session) {
        navigate("/login")
      }
    })
  })
  return (
    <div>
      <h1>Administração</h1>
      <QrCodeGenerator />
      <Sair />
    </div>
  );

}

export default Administração;