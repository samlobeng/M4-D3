import {Component} from 'react';
import {Alert} from 'react-bootstrap'


class MySign extends Component {
    
    render() { 
        return (
            <>
            {[
                'primary'
              ].map((variant, idx) => (
                <Alert  style={{height:"300px",color:"#fff",fontSize:"5rem"}} key={idx} variant={variant}>
                 {this.props.warning} 
                </Alert>
              ))
              }</>
          );
    }
}
 
export default MySign;