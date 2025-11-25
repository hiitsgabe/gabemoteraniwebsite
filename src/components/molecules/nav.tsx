import React from 'react'
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/atoms/dock';
import { HomeIcon, UserIcon, BriefcaseIcon, MailIcon, Mail } from 'lucide-react';

function nav() {
    return (
        <div className="dark fixed bottom-10 left-0 right-0 z-50">
            <Dock>
                <DockItem className="dark:text-gray-300" >
                    <DockLabel>Home 🏠</DockLabel>
                    <DockIcon>
                        <HomeIcon />
                    </DockIcon>
                </DockItem>
                <DockItem className="dark:text-gray-300">
                    <DockLabel>About 🏅</DockLabel>
                    <DockIcon>
                        <UserIcon />
                    </DockIcon>
                </DockItem>
                <DockItem className="dark:text-gray-300">
                    <DockLabel>Work 💼</DockLabel>
                    <DockIcon>
                        <BriefcaseIcon />
                    </DockIcon>
                </DockItem>
                <DockItem className="dark:text-gray-300">
                    <DockLabel>Contact 📫</DockLabel>
                    <DockIcon>
                        <MailIcon />
                    </DockIcon>
                </DockItem>
            </Dock>
        </div>
    )
}

export default nav