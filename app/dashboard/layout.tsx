'use client'
import React, { useState } from 'react'
//Nextui stuff
import { Avatar, Button, Card, ScrollShadow, Spacer, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "usehooks-ts";
import { usePathname } from "next/navigation";
import { sectionItemsWithTeams } from './dashboard-ui/sidebar-items';
import { cn } from '@/lib/nextui-utils';
import Sidebar from './dashboard-ui/sidebar';
import ProMember from '../components/svg/ProMember';

type Props = {}

const DashLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    // Nextui stuff
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isCompact = isCollapsed || isMobile;
    const onToggle = React.useCallback(() => {
        setIsCollapsed((prev) => !prev);
    }, []);

    const pathname = usePathname();
    const currentPath = pathname.split("/")?.[1]


    return (
        <div className="flex h-dvh w-full ">
            {/* Navbar container */}
            <div
                className={cn(
                    "relative flex h-full w-72 flex-col !border-r-small border-divider p-6 transition-width",
                    {
                        "w-16 items-center px-2 py-6": isCompact,
                    },
                )}

            >
                <div
                    className={cn(
                        "flex items-center gap-3 px-3 ",

                        {
                            "justify-center gap-0": isCompact,
                        },
                    )}
                >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                        <span>TE</span>
                    </div>
                    <span
                        className={cn("text-small font-bold uppercase opacity-100", {
                            "w-0 opacity-0": isCompact,
                        })}
                    >
                        Acme
                    </span>
                </div>
                <Spacer y={8} />
                <div className="flex items-center gap-3 px-3">
                    <Avatar
                        isBordered
                        className="flex-none"
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    />
                    <div className={cn("flex max-w-full flex-col", { hidden: isCompact })}>
                        <p className="truncate text-small font-medium text-default-600">John Doe</p>
                        <p className="truncate text-tiny text-default-400">Product Designer</p>
                    </div>
                </div>
                <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                    <Sidebar selectedKeys={[currentPath]} defaultSelectedKey="home" isCompact={isCompact} items={sectionItemsWithTeams} />

                </ScrollShadow>

                <Spacer y={2} />

                <div
                    className={cn("mt-auto flex flex-col", {
                        "items-center": isCompact,
                    })}
                >
                    <Tooltip content="Help & Feedback" isDisabled={!isCompact} placement="right">
                        <Button
                            fullWidth
                            className={cn(
                                "justify-start truncate text-default-500 data-[hover=true]:text-foreground",
                                {
                                    "justify-center": isCompact,
                                },
                            )}
                            isIconOnly={isCompact}
                            startContent={
                                isCompact ? null : (
                                    <Icon
                                        className="flex-none text-default-500"
                                        icon="solar:info-circle-line-duotone"
                                        width={24}
                                    />
                                )
                            }
                            variant="light"
                        >
                            {isCompact ? (
                                <Icon
                                    className="text-default-500"
                                    icon="solar:info-circle-line-duotone"
                                    width={24}
                                />
                            ) : (
                                "Help & Information"
                            )}
                        </Button>
                    </Tooltip>
                    <Tooltip content="Log Out" isDisabled={!isCompact} placement="right">
                        <Button
                            className={cn("justify-start text-default-500 data-[hover=true]:text-foreground", {
                                "justify-center": isCompact,
                            })}
                            isIconOnly={isCompact}
                            startContent={
                                isCompact ? null : (
                                    <Icon
                                        className="flex-none rotate-180 text-default-500"
                                        icon="solar:minus-circle-line-duotone"
                                        width={24}
                                    />
                                )
                            }
                            variant="light"
                        >
                            {isCompact ? (
                                <Icon
                                    className="rotate-180 text-default-500"
                                    icon="solar:minus-circle-line-duotone"
                                    width={24}
                                />
                            ) : (
                                "Log Out"
                            )}
                        </Button>
                    </Tooltip>
                </div>

            </div>
            <div className="w-full flex-1 flex-col p-4">
                <header className="flex items-center justify-between rounded-medium border-small border-divider p-4">
                    <div className='flex items-center gap-3'>
                        <Button isIconOnly size="sm" variant="light" onPress={onToggle}>
                            <Icon
                                className="text-default-500"
                                height={24}
                                icon="solar:sidebar-minimalistic-outline"
                                width={24}
                            />
                        </Button>
                        <h2 className="text-medium font-medium text-default-700">Overview</h2>
                    </div>
                    <Button className="flex items-center gap-3 px-10 shadow-md text-white" color="primary" radius="md" variant="shadow">
                        <ProMember />
                        Upgrade to elite
                    </Button>
                </header>
                <main className="mt-4 h-full w-full overflow-visible">
                    <div className="flex h-[90%] w-full flex-col gap-4 rounded-medium border-small border-divider overflow-y-scroll">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashLayout