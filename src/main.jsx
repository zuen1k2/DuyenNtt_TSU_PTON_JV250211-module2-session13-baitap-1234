
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './redux/store/store.js'

createRoot(document.getElementById('root')).render(
<Provider store={Store}>
    <App />
    </Provider>
 
)
