import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.REACT_APP_API_URL;

export const fetchProjects = async () => {
    const query = gql`
        query Projects {
            projects (first: 50) {
                excerpt
                githubLink
                urlLink
                name
                tags {
                    name
                }
                thumbnail {
                    url
                }
            }
        }
    
`
    const response = await request(graphqlAPI, query);
    return response.projects;
}