"use client";
import { Video } from "@/types/generated-types";
import { Play } from "lucide-react";
import ReactPlayer from "react-player/lazy";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

const WatchVideo: React.FC<WatchVideoProps> = ({ videoUrl, title }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <div className="m-8 flex w-fit items-center justify-center rounded-full bg-[#E2E8F0] p-2">
            <Play fill="black" />
          </div>
        </div>
        <div className="w-fit max-w-48 px-2">
          <span className="text-balance uppercase">{title}</span>
        </div>
      </DialogTrigger>
      <DialogContent
        className="max-w-[95svw] border-0 bg-transparent p-0 md:max-w-[80svw]"
        aria-label="Watch Video"
        aria-describedby="Watch Video"
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="min-h-[75svh] min-w-[50svw] overflow-hidden rounded-[32px] md:min-h-[60svh]">
          <ReactPlayer
            url={videoUrl}
            controls={true}
            width="100%"
            height="100%"
            fallback={
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <div className="m-8 flex w-fit items-center justify-center rounded-full bg-[#E2E8F0] p-2">
                    <Play fill="black" />
                  </div>
                </div>
                <span className="text-2xl italic text-black">Play</span>
              </div>
            }
            config={
              {
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    rel: 0,
                  },
                },
              } as any
            }
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

type WatchVideoProps = Partial<Video> & React.HTMLAttributes<HTMLDivElement>;

export default WatchVideo;
