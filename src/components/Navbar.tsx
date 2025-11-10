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

// function that uses state to handle hover dropdown menu
function HoverDropdown({
  label,
  items,
}: {
  label: string
  items: { key: string; href: string; text: string }[]
}) {
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
          {label}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label={`${label} menu`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item) => (
          <DropdownItem key={item.key}>
            <Link href={item.href}>{item.text}</Link>
          </DropdownItem>
        ))}
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
          <HoverDropdown
            label="services"
            items={[
              { key: 'Botox', href: 'services#Botox', text: 'Botox' },
              { key: 'Filler', href: '/services#Filler', text: 'Filler' },
              {
                key: 'PlexR Treatments',
                href: '/services#PlexR-Treatments',
                text: 'PlexR Treatments',
              },
              { key: 'Venus Versa', href: '/services#Venus-Versa', text: 'Venus Versa' },
            ]}
          />
        </NavbarItem>
        <NavbarItem>
          <HoverDropdown
            label="PRP"
            items={[
              { key: 'Medical', href: '/prp#medical', text: 'Medical' },
              { key: 'Aesthetic', href: '/prp#aesthetic', text: 'Aesthetic' },
            ]}
          />
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
