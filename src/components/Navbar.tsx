'use client'

import React, { useState } from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@heroui/react'
// import { useScroll } from 'framer-motion'
import Link from 'next/link'

function HoverDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  return (
    <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
      <DropdownTrigger onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Button variant="light" className="font-medium">
          Services
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Services Menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <DropdownItem key="Botox">
          <Link href="/services#Botox">Botox</Link>
        </DropdownItem>
        <DropdownItem key="Filler">
          <Link href="/services#Filler">Filler</Link>
        </DropdownItem>
        <DropdownItem key="PlexR Treatments">
          <Link href="/services#PlexR-Treatments">PlexR Treatments</Link>
        </DropdownItem>
        <DropdownItem key="Venus Versa">
          <Link href="/services#Venus-Versa">Venus Versa</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <h1 className="text-2xl font-bold">
          <Link href="/">PRP Medical Aesthetics</Link>
        </h1>
      </NavbarBrand>

      <NavbarContent className="hidden gap-6 sm:flex" justify="center">
        <NavbarItem>
          <Link href="/">home</Link>
        </NavbarItem>
        <NavbarItem>
          <HoverDropdown />
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">about</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/FAQ">FAQ</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">contact </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/booking">book now</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
