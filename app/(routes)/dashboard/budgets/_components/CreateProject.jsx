"use client";

import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog";
import { Button } from "../../../../../components/ui/button";

function CreateBudget() {
  const [emojiIcon, setEmojiIcon] = useState("\uD83D\uDE00");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="bg-slate-100 p-10 rounded-md
      items-center flex flex-col border-2 border-dashed
      cursor-pointer hover:shadow-md"
          >
            <h2 className="text-3xl">+</h2>
            <h2>Create New Project</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
            <DialogDescription>
              Choose an icon for your new project.
            </DialogDescription>
          </DialogHeader>
          <div className="relative mt-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpenEmojiPicker((current) => !current)}
            >
              {emojiIcon}
            </Button>

            {openEmojiPicker && (
              <div className="absolute z-10 mt-2">
                <EmojiPicker
                  onEmojiClick={(emojiData) => {
                    setEmojiIcon(emojiData.emoji);
                    setOpenEmojiPicker(false);
                  }}
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget;
