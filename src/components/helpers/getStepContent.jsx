import AddressForm from '../AddressForm';
import DispatchCheckout from '../DispatchCheckout';
import Review from '../Review';

export default function getStepContent(step) {
  console.log("click de pasos en get StepContent",step)
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    case 2:
      return <DispatchCheckout/>;
    default:
      throw new Error('Unknown step');
  }
}
