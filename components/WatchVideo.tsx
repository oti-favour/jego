"use client";
import { Video } from "@/types/generated-types";
import { Play } from "lucide-react";
import ReactPlayer from "react-player/lazy";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

const WatchVideo: React.FC<WatchVideoProps> = ({ videoUrl, title }) => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <div className="m-8 flex w-fit items-center justify-center rounded-full bg-[#B5B5B5CC]/80 p-3">
            <Play fill="white" width={12} height={12} />
          </div>
        </div>
        <div className="flex w-fit max-w-48 lg:px-2">
          <p className="truncate3 text-left text-sm uppercase md:text-base">
            {title}
          </p>
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
