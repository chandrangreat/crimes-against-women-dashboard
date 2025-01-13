# Dashboard for Crimes Against Women

## About the project

This project gives the state wise data of crimes against women in a proper format. Currently AG grid is being used to display in tabular format. In future versions we will use graphs to display.

1. Database

   - Database used is MySQL DB into which I imported data from [here](https://www.kaggle.com/datasets/balajivaraprasad/crimes-against-women-in-india-2001-2021/data).
   - After importing I removed the data with state names with all CAPS to maintain data consistency.
   - Used [Prisma](https://www.prisma.io) for migrations and as an ORM.

2. Backend

   - Used [NodeJs](https://nodejs.org/en) and [Express](https://expressjs.com/) for building REST APIs.
   - Backend can be run using the below commands. Make sure you have NodeJS installed in your machine. Go to the server directory of this repo and run the below commands:

   ```
   npm install

   npm start
   ```

3. Frontend

   - Built using [React](https://react.dev/), [React Router](https://reactrouter.com/) and [ag-grid](https://www.ag-grid.com/) for table
   - Front end can be run using the below commands. Make sure you have NodeJS installed in your system. Go to the client directory of this repo and run the below commands:

   ```
   npm install

   npm run dev
   ```
