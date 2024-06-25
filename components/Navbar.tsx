"use client";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItemProps,
} from "@radix-ui/react-navigation-menu";
import Logo from "./Logo";
import Menu from "@/public/assets/menu.svg";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { NavbarConst } from "@/lib/consts";

function Navbar() {
  return (
    <header className="pt-4">
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
    <NavigationMenu className="lg:hidden w-full">
      <NavigationMenuList className="flex justify-between items-center w-full">
        <NavItem href="/" icon={<Logo />} />
        <NavigationMenuItem>
          <Sheet open={isOpen} onOpenChange={toggleMenu}>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="bg-brightTurquoise w-full flex flex-col gap-12">
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
                        className="font-bold text-3xl"
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
                      className={`font-bold text-3xl pb-7 ${
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
    <NavigationMenu className="hidden lg:flex w-full justify-between">
      <NavigationMenuList>
        <NavItem href="/" icon={<Logo />} />
      </NavigationMenuList>
      <NavigationMenuList className="flex items-center gap-8 text-white text-lg">
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
            rounded && "rounded-full bg-brightTurquoise text-black px-4 py-2",
            rounded && roundedClass
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
