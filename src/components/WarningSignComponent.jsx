import {Alert} from 'react-bootstrap'


const WarningSignComponent=(prop)=>{
    return([
  'danger',
].map((variant, idx) => (
  <Alert style={{color:prop.colorAlert}} key={idx} variant={variant}>
    This is a {prop.branding} !
  </Alert>
)))
    
}

export default WarningSignComponent