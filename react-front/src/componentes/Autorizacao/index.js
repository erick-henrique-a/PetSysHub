import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { useState, useEffect } from'react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from'react-router-dom'
import styled from'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
  background-color: #f9f9f9;
`

const LoginContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const supabaseUrl = 'https://ysqzfvxryhxekhgrjkzr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzcXpmdnhyeWh4ZWtoZ3Jqa3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTQ1OTEsImV4cCI6MjAzMDY5MDU5MX0.TnRSA9aR99HHWffExwfHZpLfIenJWz2YDVnn1wX4QDM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Autorizacao() {
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <Container>
        <LoginContainer>
          <Auth supabaseClient={supabase} 
          appearance={{ theme: ThemeSupa }} 
          providers={[]}
          localization={{
            variables: {
              sign_in: {
                email_label: 'Endereço de Email',
                password_label: 'Senha',
                email_input_placeholder: 'Seu Email',
                password_input_placeholder: 'Sua Senha',
                link_text: 'Esqueceu sua senha?',
                button_label: 'Entrar'	
              },
            },
          }} />
        </LoginContainer>
      </Container>
    )}
  else {
    navigate("/administracao");
  }
}