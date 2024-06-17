import Sectiontitle from "../../component/Sectiontitle";
import { loadStripe } from '@stripe/stripe-js';
import Checkoutforn from "./Checkoutforn";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gatwey_pk);

const Payment = () => {

    return (
        <div>
            <Sectiontitle heading='Payment' subHeading='please pay to eat'>

            </Sectiontitle>
            <div>
                <Elements stripe={stripePromise}>
                    <Checkoutforn></Checkoutforn>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;