"use client";
import { NavbarConst } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Menu from "@/public/assets/menu.svg";
import MenuBlack from "@/public/assets/menuBlack.svg";
import { NavItemProps } from "@/types/types";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuItemProps,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

function Navbar({
  hideLogo = false,
  desktopClassName,
  mobileClassName,
  menuColor,
  isFixed = true,
  className,
  scrollClassName,
}: {
  hideLogo?: boolean;
  desktopClassName?: string;
  mobileClassName?: string;
  menuColor?: "black" | "white";
  isFixed?: boolean;
  className?: string;
  scrollClassName?: string;
}) {
  const { scrollY } = useScroll();
  const [progress, setProgress] = React.useState(0);

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    setProgress(latestScrollY);
  });

  return (
    <header className={cn(isFixed && "fixed top-0 isolate z-[30] w-full")}>
      <div className={cn(isFixed && "px-4 lg:container", className)}>
        <MobileNav
          components={NavbarConst}
          className={mobileClassName}
          menuColor={menuColor}
          scrollClassName={progress > 250 ? scrollClassName : ""}
        />
        <DesktopNav
          components={NavbarConst}
          hideLogo={hideLogo}
          className={desktopClassName}
          scrollClassName={progress > 250 ? scrollClassName : ""}
        />
      </div>
    </header>
  );
}

const MobileNav: React.FC<{
  components: NavItemProps[];
  className?: string;
  menuColor?: "black" | "white";
  scrollClassName?: string;
}> = ({ components, className, menuColor, scrollClassName }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <NavigationMenu className={cn("w-full lg:hidden", scrollClassName)}>
      <NavigationMenuList className="flex w-full items-center justify-between">
        <NavItem href="/" icon={<Logo />} />
        <NavigationMenuItem>
          <Sheet open={isOpen} onOpenChange={toggleMenu}>
            <SheetTrigger>
              {menuColor === "black" ? <MenuBlack /> : <Menu />}
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col gap-12 bg-brightTurquoise">
              <SheetHeader className="hidden">
                <SheetTitle className="hidden">Menu</SheetTitle>
                <SheetDescription className="hidden">
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>
              <div className="flex justify-between">
                <NavigationMenuList>
                  <NavItem
                    href="/"
                    onClick={toggleMenu}
                    icon={
                      <div>
                        <Logo variant="secondary" className="w-fit max-w-fit" />
                      </div>
                    }
                  />
                </NavigationMenuList>
                <SheetClose aria-label="Close" className="text-xl">
                  <X size={32} />
                </SheetClose>
              </div>

              <NavigationMenuList
                className={cn(
                  "grid divide-y divide-black/10 text-lg",
                  className,
                )}
              >
                {components.map((component, index) => {
                  if (component.rounded) {
                    return (
                      <NavItem
                        {...component}
                        key={index}
                        className="text-3xl font-bold"
                        onClick={toggleMenu}
                        asChild
                        roundedClass="text-center bg-white w-full"
                      />
                    );
                  }
                  return (
                    <NavItem
                      key={index}
                      {...component}
                      onClick={toggleMenu}
                      className={`pb-7 text-3xl font-bold ${
                        index !== 0 && "pt-7"
                      }`}
                    />
                  );
                })}
              </NavigationMenuList>
            </SheetContent>
          </Sheet>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const DesktopNav: React.FC<{
  components: NavItemProps[];
  hideLogo?: boolean;
  className?: string;
  scrollClassName?: string;
}> = ({ components, hideLogo, className, scrollClassName }) => {
  return (
    <NavigationMenu
      className={cn(
        "hidden w-full items-center justify-between lg:flex",
        scrollClassName,
      )}
    >
      {!hideLogo && (
        <NavigationMenuList>
          <NavItem href="/" icon={<Logo />} />
        </NavigationMenuList>
      )}
      <NavigationMenuList
        className={cn("flex items-center gap-8 text-white", className)}
      >
        {components.map((component, index) => (
          <NavItem key={index} {...component} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const NavItem: React.FC<NavItemProps & NavigationMenuItemProps> = ({
  href,
  text,
  icon,
  rounded,
  roundedClass,
  ...props
}) => {
  function ScrollToElement({ hash }: { hash: string }) {
    try {
      const element = document.querySelector(hash.replace("/", ""));

      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY,
          behavior: "smooth",
        });
      }
    } catch (error) {}
  }

  return (
    <NavigationMenuItem className="" {...props}>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          onClick={() => ScrollToElement({ hash: href })}
          className={`w-full min-w-fit whitespace-nowrap ${cn(
            rounded && "rounded-full bg-brightTurquoise px-4 py-2 text-black",
            rounded && roundedClass,
          )} `}
        >
          {icon}
          {text}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default Navbar;
