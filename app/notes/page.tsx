import prisma from "@/lib/db/prisma"
import { auth } from "@clerk/nextjs/server"
import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Flow Brain - Notes",
}

const NotesPage = async () => {
  const { userId } = auth()

  if (!userId) {
    redirect("/notes")
    // throw new Error("Unauthorized!")
  }

  const allNotes = await prisma.note.findMany({ where: { userId } })

  return <div>{JSON.stringify(allNotes)}</div>
}

export default NotesPage
