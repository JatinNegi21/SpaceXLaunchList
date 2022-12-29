import { ApolloClient, InMemoryCache } from "@apollo/client";
import {GET_SPACE_MISSION} from "./queries";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export const apolloClient = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
});


class SpaceService {
        async getSpaceMission(limit=1000){
            try{
                const response = await apolloClient.query({
                    query:GET_SPACE_MISSION,
                    variables: {limit}
                });

                if(!response || !response.data) throw new Error("Cannot get rocket launches List")
                return response.data.launchesPast
            }catch(err){
                throw err
            }
        }
}

export default new SpaceService();