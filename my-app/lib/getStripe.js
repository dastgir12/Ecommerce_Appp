import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51MPRkBH8LsKbh4zysrE58LGhClR2muHMzJE8lM5HMbIGQtEbowAZJc5gO8cXZHDFT9DlLId2P1DCVMn1LMtGAwbi00T8gYtNuO');
  }

  return stripePromise;
}

export default getStripe;