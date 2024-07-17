"use client";
import { cn, sanityImageUrl } from "@/lib/utils";
import { Member } from "@/types/generated-types";
import CLassNames from "embla-carousel-class-names";
import Image from "next/image";
import { HTMLAttributes } from "react";
import "./member.css";
import { Caption, Paragraph } from "./Typography";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const MembersCarousel: React.FC<MembersProps> = ({
  members,
  className,
  ...props
}) => {
  return (
    <>
      <>
        <Carousel
          opts={{ axis: "y", loop: true, inViewThreshold: 0.9 }}
          orientation="vertical"
          plugins={[CLassNames()]}
          className="h-full md:hidden"
        >
          <CarouselContent className="grid h-[50svh] grid-flow-row auto-rows-[80%]">
            <Members members={members} className="overflow-hidden" />
          </CarouselContent>
        </Carousel>
      </>
      <>
        <Carousel
          className="hidden md:block"
          opts={{ loop: true }}
          plugins={[CLassNames()]}
        >
          <CarouselContent className={`flex md:max-h-[30svh] lg:max-h-[40svh]`}>
            <Members
              members={members}
              className="h-full w-fit max-w-fit flex-[0_0_70%]"
            />
          </CarouselContent>
        </Carousel>
      </>
    </>
  );
};

const Members: React.FC<MembersProps> = ({ members, className, ...props }) => {
  const lengthOfMembers = members.length;

  return (
    <>
      {members.map((member, index) => (
        <CarouselItem
          {...props}
          key={index}
          className={cn(`group h-fit`, className)}
        >
          <MemberItem member={member} />
        </CarouselItem>
      ))}
    </>
  );
};

interface MembersProps extends HTMLAttributes<HTMLDivElement> {
  members: Member[];
}

const MemberItem: React.FC<MemberItemProps> = ({ member, ...props }) => {
  return (
    <div className="relative h-fit max-h-fit" {...props}>
      <Image
        src={sanityImageUrl(member.image)}
        alt={member.image.asset._ref}
        width={1920}
        height={1080}
        className="h-full w-full object-contain md:aspect-[14/16] md:min-h-full md:w-80 md:object-cover"
      />
      <div className="absolute bottom-12 left-0 m-8 min-w-fit bg-black/50 opacity-0 transition-all duration-3s group-hover:opacity-100 2xl:bottom-0">
        <div className="p-2 text-white">
          <Caption className="font-gustavo text-lg font-bold lg:text-2xl">
            {member.name}
          </Caption>
          <Paragraph>{member.role}</Paragraph>
          <Paragraph className="whitespace-pre-line">{member.bio}</Paragraph>
        </div>
      </div>
    </div>
  );
};

interface MemberItemProps extends HTMLAttributes<HTMLDivElement> {
  member: Member;
}

export default MembersCarousel;
