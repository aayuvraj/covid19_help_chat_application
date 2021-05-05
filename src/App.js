
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx'
import LoginForm from './components/LoginForm'

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />


  return(
    <ChatEngine
      height = "100vh"
      projectID = "44271897-b7a6-4a55-829a-686a20256ca1"
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed {... chatAppProps} />}
    />
  );
}
export default App;