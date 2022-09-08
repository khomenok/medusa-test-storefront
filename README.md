# Scarf Shop

### _Test assignment for MedusaJS interview_

First, run the development server:

```bash
pnpm i
MEDUSA_SERVER=82.146.57.4 pnpm run dev # or any other MedusaJS server
```

Open [http://localhost:2022](http://localhost:2022) with your browser to see the result.

## Learn More

The task is described [here](https://medusajs.notion.site/medusajs/Case-Frontend-Engineer-Developer-Experience-10f546ea175c4bac8d77f0b3979ab70f)

For the project, I chose to create a scarves shop. They are squares, and I really like squares.

I've spent around 7h on this project:
 - ≈2 hours on the initial setup of a server and finding all the scarves
 - ≈3 hours on the logic and the UI parts
 - ≈2 hours on the final polishing with some small details

For me, the most challenging part was actually not the frontend but starting the server and connecting it to a database.
I've chosen PostgreSQL and Medusa Extender in case I would need any additional columns (spoiler: I wouldn't!).
I've also used `medusa-plugin-filestorage-local` plugin for keeping images locally.

To be honest, I didn't include the part I'm proud of most. At first, I made a 3d model of the scarf logo to animate in on mouse hover.
That was my first experience with Three.js, but it looked like a cringe!
So, I decided not to use that, but I uploaded a [video](public/three-js-logo.mp4) for you to check this cringe c:.
I still think it can be an interesting idea, but I need more skills in 3d design.

## Structure

Basic structure of this project includes such parts:

- pages
- features
- ui
- utils

I tried to separate UI components from features to make UI free of fetching data.
So, it is possible to load data in pages or in features, but the second option is more preferable.
Utils folder should contain some common non-ui part like formatting some data.
