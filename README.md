# graphql_gateway
A gateway which uses graphql mesh to split a query into smaller queries to the different microservices.
## Environment variables

### Relevant for deployment

| Name                   | Description                        | Value in Dev Environment                 | Value in Prod Environment                                           |
|------------------------|------------------------------------|------------------------------------------|---------------------------------------------------------------------|
| GATEWAY_PORT           | Gateway port                       | 8080                                     | 8080                                                                |
| GATEWAY_HOSTNAME       | Gateway host name                  | 0.0.0.0                                  | 0.0.0.0                                                             |
| DAPR_HTTP_PORT         | Dapr HTTP Port                     | -                                        | 3500                                                                |
| COURSE_SERVICE_URL     | URL for course service GraphQL     | http://host.docker.internal:2001/graphql | http://localhost:3500/v1.0/invoke/course-service/method/graphql     |
| MEDIA_SERVICE_URL      | URL for media service GraphQL      | http://host.docker.internal:3001/graphql | http://localhost:3500/v1.0/invoke/media-service/method/graphql      |
| CONTENT_SERVICE_URL    | URL for content service GraphQL    | http://host.docker.internal:4001/graphql | http://localhost:3500/v1.0/invoke/content-service/method/graphql    |
| USER_SERVICE_URL       | URL for user service GraphQL       | http://host.docker.internal:5001/graphql | http://localhost:3500/v1.0/invoke/user-service/method/graphql       |
| FLASHCARD_SERVICE_URL  | URL for flashcard service GraphQL  | http://host.docker.internal:6001/graphql | http://localhost:3500/v1.0/invoke/flashcard-service/method/graphql  |
| REWARD_SERVICE_URL     | URL for reward service GraphQL     | http://host.docker.internal:7001/graphql | http://localhost:3500/v1.0/invoke/reward-service/method/graphql     |
| SKILLLEVEL_SERVICE_URL | URL for skilllevel service GraphQL | http://host.docker.internal:8001/graphql | http://localhost:3500/v1.0/invoke/skilllevel-service/method/graphql |
| QUIZ_SERVICE_URL       | URL for quiz service GraphQL       | http://host.docker.internal:9001/graphql | http://localhost:3500/v1.0/invoke/quiz-service/method/graphql       |                                                               |
| JWKS_URL               | URL for jwks keycloak              | http://host.docker.internal:9009/realms/GITS/protocol/openid-connect/certs | http://keycloak/keycloak/realms/GITS/protocol/openid-connect/certs  |


### Other properties
| Name                   | Description                        | Value in Dev Environment                                                   | Value in Prod Environment                                           |
|------------------------|------------------------------------|----------------------------------------------------------------------------|---------------------------------------------------------------------|
| DAPR_GRPC_PORT         | Dapr gRPC Port                     | -                                                                          | 50001                                                               |

## Installation

1. Requires pnpm package manager to run. Install pnpm.
2. Open a terminal in the root folder of the repository and run `pnpm install`

## Usage

1. Start all services the gateway needs (They need to be running before you start the gateway!)
2. Start the gateway with `pnpm start --port <your_favorite_port>`
3. The gateway will automatically fetch the services' GraphQL scheme using introspection and construct the unified scheme using the information provided in the `.meshrc.yaml` file
