import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/platform', (c) => {
  return c.json({platform:process.platform})
})

app.get('/college', (c) => {
  return c.json({details:'SIT Students'})
})

serve(app)
  console.log(`Server is running on http://localhost:${3000}`)
