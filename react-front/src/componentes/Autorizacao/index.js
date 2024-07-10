import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom'

const supabaseUrl = 'https://ysqzfvxryhxekhgrjkzr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcXpmdnhyeWh4ZWtoZ3Jqa3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTQ1OTEsImV4cCI6MjAzMDY5MDU5MX0.TnRSA9aR99HHWffExwfHZpLfIenJWz2YDVnn1wX4QDM'
const supabase = createClient(supabaseUrl, supabaseKey)
function Autorizacao(){
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) =>{
    if (event === "SIGNED_IN"){
      //Leva a página de administração
      navigate("/administracao")
    }else{
      //Mantém o usuario na mesma página
    }
  })  
  
  return(
      <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={[]}
      />
    )
}
export default Autorizacao;