import { MongoClient } from 'mongodb';
export const client = new MongoClient(
  'mongodb+srv://sabrina:Acceleration12@clusterfortwitter.l5klj.mongodb.net/twitterOzbe?retryWrites=true&w=majority'
);

const start = async () => {
  try {
    await client.connect();
    console.log('Connected to twitterOzbe');
  } catch (err) {
    console.log(err);
  }
};


export default start;