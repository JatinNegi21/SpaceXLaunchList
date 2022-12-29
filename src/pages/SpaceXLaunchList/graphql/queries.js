import gql from "graphql-tag";

export const GET_SPACE_MISSION = gql`
    query GetSpaceMission($limit: Int!)
    {
        launchesPast(limit: $limit){
            mission_name
            launch_site{
                site_name_long
            }
            rocket{
                rocket_name
            }
            ships{
                image
            }
        }
    }
`;