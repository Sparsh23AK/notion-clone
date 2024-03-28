"use clint";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
import { 
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/src/components/ui/popover"
interface EmojiPickerProps {
  children: React.ReactNode;
  getValue?: (emoji: string) => void;
}

const EmoiPicker: React.FC<EmojiPickerProps> = ({ children, getValue }) => {
  const route = useRouter();
  const Picker = dynamic(() => import("emoji-picker-react"));
  const onClick = (selectedEmoji: any) => {
    if (getValue) getValue(selectedEmoji.emoji);
  };
  return <div className="flex items-center">
    <Popover >
        <PopoverTrigger className="cursor-pointer">
            {children}
        </PopoverTrigger>
        <PopoverContent className="p-0 border-none text-sm">
            <Picker height={320}  onEmojiClick={onClick} />
        </PopoverContent>
    </Popover>
  </div>;
};

export default EmoiPicker;
