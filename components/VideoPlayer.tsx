import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import dashboardImg from "@/public/dashboardImg.png"
import ReactPlayer from "react-player"
import videoPlaceholder from "@/public/video_placeholder.png"

export function VideoPlayer() {
  return (
    <Dialog >
      <DialogTrigger asChild>
      <div className="p-1 cursor-pointer h-[40vh] mt-12 border border-slate-600 rounded md:h-[82vh] max-h-[300px] md:max-h-[600px]
          max-h-[600px]
          w-full">
            <img
              src={dashboardImg.src}
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
      </DialogTrigger>
      <DialogContent  className="text-white bg-black border-slate-600 p-2 max-w-[900px]">
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader> */}
        <div className="p-1 h-[40vh] mt-6  rounded md:h-[82vh] max-h-[300px] md:max-h-[600px]
          max-h-[600px]
          w-full">
            
        <ReactPlayer width={"100%"} height={"100%"} url="https://youtu.be/KqUK3NpdD8E" />
          </div>
    
      </DialogContent>
    </Dialog>
  )
}
