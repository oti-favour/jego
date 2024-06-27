"use client";
import { NavbarConst } from "@/lib/consts";
import { cn } from "@/lib/utils";
import Menu from "@/public/assets/menu.svg";
import { NavItemProps } from "@/types/types";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuItemProps,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
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

function Navbar() {
  return (
    <header className="lg:container">
      <MobileNav components={NavbarConst} />
      <DesktopNav components={NavbarConst} />
    </header>
  );
}

function MobileNav({ components }: { components: NavItemProps[] }) {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <NavigationMenu className="w-full lg:hidden">
      <NavigationMenuList className="flex w-full items-center justify-between">
        <NavItem href="/" icon={<Logo />} />
        <NavigationMenuItem>
          <Sheet open={isOpen} onOpenChange={toggleMenu}>
            <SheetTrigger>
              <Menu />
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
                    icon={<Logo variant="secondary" className="w-32" />}
                  />
                </NavigationMenuList>
                <SheetClose aria-label="Close" className="text-xl">
                  <span className="material-icons-outlined text-4xl">
                    close
                  </span>
                </SheetClose>
              </div>

              <NavigationMenuList className="grid divide-y divide-black/10 text-lg">
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
}

function DesktopNav({ components }: { components: NavItemProps[] }) {
  return (
    <NavigationMenu className="hidden w-full justify-between lg:flex">
      <NavigationMenuList>
        <NavItem href="/" icon={<Logo />} />
      </NavigationMenuList>
      <NavigationMenuList className="flex items-center gap-8 text-lg text-white">
        {components.map((component, index) => (
          <NavItem key={index} {...component} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const NavItem: React.FC<NavItemProps & NavigationMenuItemProps> = ({
  href,
  text,
  icon,
  rounded,
  roundedClass,
  ...props
}) => {
  return (
    <NavigationMenuItem className="" {...props}>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={`${cn(
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
