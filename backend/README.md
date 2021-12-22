## Instructions

Develop a simple RESTful API that interacts with a backend Postgres database as the backend permanent data store. The API shall have one endpoint supporting a POST and GET method allowing the user to create objects via POST and query for the objects vis GETs. The object being created shall contain a mixture of primitive attributes (e.g, data/time, string, int, float, Boolean, etc) to support the REST API's query capabilities.

### Additional Information

- API is powered by NodeJS using Fastify
- API documentation is powered by SwaggerUI
- Data is powered by Postgres - The majority of our data is geospatial data so having a geospatial compatible database is a must.
- Development/production environment are powered by docker running within a linux environment and is deployed within AWS.
- CI/CD environment is powered by Jenkins.

### Bonus - Spatial Data Type

A bonus, use an object with spatial data type like bounding box, binary geometry, geojson or similar. Demonstrate how to read and write chosen spatial data type from the API.

### APIs

- List EV charging stations: GET http://localhost:8080/station
- Submit a new EV charging station: POST http://localhost:8080/station

### Bonus - Objective

Our entire system runs fully in AWS and your AWS experience is very relevant to the position. Please develop and deploy the above RESTful API within AWS using the AWS services of your choice.