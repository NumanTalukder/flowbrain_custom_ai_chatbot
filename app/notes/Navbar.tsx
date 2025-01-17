"use client"

import AddNoteDialog from "@/components/AddNoteDialog"
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function NavBar() {
  const [showAddNoteModal, setShowAddNoteModal] = useState(false)
  return (
    <>
      <div className="p-4 shadow">
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <Link href="/notes" className="flex items-center gap-1">
            <Image
              src="/logo.png"
              alt="FlowBrain logo"
              width={40}
              height={40}
            />
            <span className="font-bold">FlowBrain</span>
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
            <Button onClick={() => setShowAddNoteModal(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
          </div>
        </div>
      </div>
      <AddNoteDialog open={showAddNoteModal} setOpen={setShowAddNoteModal} />
    </>
  )
}
