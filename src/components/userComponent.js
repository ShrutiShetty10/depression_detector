import {Component, React} from 'react';
import UserService from '../services/UserService';



export default class userComponent extends Component {
    constructor(props) {
        super(props);
        this.signInClick = this.signInClick.bind(this);
      }

   _signInClick(){
    this.setState({
        showComponent: true,
      });
      
   }
    componentDidMount(){
      UserService.getUser().then((res)=>{
        this.setState({userComponent:res.data});

      });
    }
  render() {
    return (
      <div> 
          <h2 className="text-centre">Depression Detective</h2>
           signInClick();
           </div>
    );
  }
   }
