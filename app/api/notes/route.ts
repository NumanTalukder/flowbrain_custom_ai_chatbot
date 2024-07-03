import prisma from "@/lib/db/prisma"
import { noteSchema } from "@/lib/validator/noteValidator"
import { auth } from "@clerk/nextjs/server"

export const POST = async (req: Request) => {
  try {
    const body = await req.json()

    const perseResult = noteSchema.safeParse(body)

    if (!perseResult.success) {
      console.log(perseResult.error)
      return Response.json({ error: "Invalid Input" }), { status: 400 }
    }

    const { title, content } = perseResult.data

    const { userId } = auth()

    if (!userId) {
      console.log("unauthorized")
      return Response.json({ error: "Unauthorized" }, { status: 401 })
    }

    const note = await prisma.note.create({
      data: {
        title,
        content,
        userId,
      },
    })
  } catch (error) {
    console.log(error)
    return Response.json({ error: "Internal Server Error" }, { status: 400 })
  }
}
