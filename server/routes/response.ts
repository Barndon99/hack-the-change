import { PrismaClient } from '@prisma/client'
import { Response, Request } from "express"

const express = require('express')
const responseRouter = express.Router()
const prisma = new PrismaClient()

// middleware that is specific to this router
responseRouter.use((req: Request, res: Response, next: () => void) => {
  console.log('Response Route hit at: ', Date.now())
  next()
})

// GET Req to /api/responses
responseRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World - /api/responses")
})



// From FastAPI Microservice
responseRouter.post('/', async (req: Request, res: Response) => {
  try {
      console.log("Req.body: ", req.body);
      console.log("Typeof: ", typeof req.body);
      const { pollId, userId, response, description } = req.body;
      // description must be parsed
      console.log("description: ", description);
      

      const { feeling, sentiment, method, reason } = description;
      console.log('DESCRIPTON: ', description)
      
      const newResponse = await prisma.pollResponse.create({
          data: {
              response,
              pollId,
              userId,
              feeling,
              sentiment,
              method,
              reason,
          }
      });

      console.log(`New Response: `, newResponse);


      return res.json({
          success: true,
          data: newResponse
      });

  } catch (error) {
      return res.json({
          success: false,
          message: error
      });
  }
});

module.exports = responseRouter