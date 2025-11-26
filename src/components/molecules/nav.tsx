'use client'

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/atoms/dock';
import { HomeIcon, UserIcon, BriefcaseIcon, MailIcon } from 'lucide-react';

function Nav() {

    const navigate = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="dark fixed bottom-10 left-0 right-0 z-50">
            <Dock>
                <DockItem className="dark:text-gray-300" onClick={() => navigate('home')} >
                    <DockLabel>Home 🏠</DockLabel>
                    <DockIcon>
                        <HomeIcon />
                    </DockIcon>
                </DockItem>
                <DockItem className="dark:text-gray-300" onClick={() => navigate('about')}>
                    <DockLabel>About 🏅</DockLabel>
                    <DockIcon>
                        <UserIcon />
                    </DockIcon>
                </DockItem>
                <DockItem className="dark:text-gray-300" onClick={() => navigate('work')}>
                    <DockLabel>Work 💼</DockLabel>
                    <DockIcon>
                        <BriefcaseIcon />
                    </DockIcon>
                </DockItem>
                <DockItem className="dark:text-gray-300" onClick={() => navigate('contact')}>
                    <DockLabel>Contact 📫</DockLabel>
                    <DockIcon>
                        <MailIcon />
                    </DockIcon>
                </DockItem>
            </Dock>
        </div>
    )
}

export default Nav