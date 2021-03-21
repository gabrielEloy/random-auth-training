import { 
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';
  import Auth from 'Routes/Auth';
  
  interface Props {
    
  }
  
  const Routes = (props: Props) => {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </Router>
    )
  }
  
  export default Routes
  