import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client =  sanityClient({
  projectId:'tjwnahck', // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2021-11-16',
  useCdn: true,
  token: "skF1SbE6iaqmhgjt4gk4g0rQeRsSjpyPPMBDM4cohHCwH3w5dof4piMZqx9wrl4B2MCevB1p2pgv1pn5XONPhnGxYFtYo9WWgui2a92oWMfhtQvxSM9A13MdqwI64XSMCvtzL35Uizix668G59jfkHMEAXqKvst8X44wsJT3F3XoCfvJHvKR",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source) {
    return '';
  }
  return builder.image(source);
};

