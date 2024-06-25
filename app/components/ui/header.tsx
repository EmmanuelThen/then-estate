'use client'
import { useState, useEffect } from 'react'
// import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from '@/app/utilities/icons/icons';
import PrimaryButton from './primary-button';
import SecondaryButton from './secondary-button';





export default function Header() {
    const [top, setTop] = useState<boolean>(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} height={undefined} width={undefined} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} height={undefined} width={undefined} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} height={undefined} width={undefined} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} height={undefined} width={undefined} />,
        server: <Server className="text-success" fill="currentColor" size={30} height={undefined} width={undefined} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} height={undefined} width={undefined} />,
    };

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return (
        <Navbar
            shouldHideOnScroll
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            isBlurred={true}
            className='fixed flex items-center justify-between z-[40] h-[4rem] bg-transparent shadow-lg shadow-black/[0.03]  before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none'
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <span>logo</span>
                    <p className="font-bold text-inherit text-primary">NAME</p>
                </NavbarBrand>
                <NavbarItem >
                    <Link className='text-black' href="/" aria-current="page">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='text-black' href="/community">
                        Community
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="solid"
                            >
                                Features
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px] rounded-lg"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={icons.scale}
                            href='/search'
                        >
                            Property search
                        </DropdownItem>
                        <DropdownItem
                            key="usage_metrics"
                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                            startContent={icons.activity}
                            href='/community'
                        >
                            Community
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                            startContent={icons.flash}
                            href='/portfolio'
                        >
                            Dashboard
                        </DropdownItem>
                        <DropdownItem
                            key="99_uptime"
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                            startContent={icons.server}
                            href='/tools'
                        >
                            Tools
                        </DropdownItem>
                        <DropdownItem
                            key="supreme_support"
                            description="Overcome any challenge with a supporting team ready to respond."
                            startContent={icons.user}
                            href='/membership'
                        >
                            Elite membership
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>



            </NavbarContent>

            {/* Avatar will display only when user is logged in dont need for now since no back end */}
            <div className='flex gap-2 items-center'>
                {/* <NavbarContent as="div" justify="end">
                                <Dropdown placement="bottom-end">
                                    <DropdownTrigger>
                                        <Avatar
                                            isBordered
                                            as="button"
                                            className="transition-transform"
                                            color="primary"
                                            name="Jason Hughes"
                                            size="sm"
                                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                        />
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                                        <DropdownItem key="profile" className="h-14 gap-2">
                                            <p className="font-semibold">Signed in as</p>
                                            <p className="font-semibold">zoey@example.com</p>
                                        </DropdownItem>
                                        <DropdownItem key="settings">My Settings</DropdownItem>
                                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                                        <DropdownItem key="analytics">Analytics</DropdownItem>
                                        <DropdownItem key="system">System</DropdownItem>
                                        <DropdownItem key="configurations">Configurations</DropdownItem>
                                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                                        <DropdownItem key="logout" color="danger">
                                            Log Out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavbarContent> */}
                <NavbarContent justify='end'>
                    <NavbarItem>
                        <Link color='foreground' href='/signin'>
                            <PrimaryButton
                                color={'primary'}
                                size={'sm'}
                                radius={'md'}
                                variant={'solid'}
                                text={'Login'}
                                onClick={undefined}
                            />
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href='/signup'>
                            <SecondaryButton text={'Sign up'} />
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </div>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}