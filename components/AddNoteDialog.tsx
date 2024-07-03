import { NoteSchema, noteSchema } from "@/lib/validator/noteValidator"
import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog, DialogContent, DialogHeader } from "./ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"

interface AddNoteDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const AddNoteDialog = ({ open, setOpen }: AddNoteDialogProps) => {
  const form = useForm<NoteSchema>({
    resolver: zodResolver(noteSchema),
  })

  const onSubmit = async (input: NoteSchema) => {
    alert(input)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Note</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AddNoteDialog
