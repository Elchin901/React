import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'


export default function Auth() {

    const user = {
        name: 'elchin',
        avatar: 'https://wallpapers-clan.com/wp-content/uploads/2023/01/chainsaw-man-denji-pfp-35.jpg'
    }

    return (
        <Menu as="nav" className={"relative"}>
            {({open}) => (
                <>
                    <Menu.Button className={`flex mt-3 items-center h-9 rounded-3xl  pr-2 ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
                        <img src={user.avatar} className='w-9 h-9 rounded-full p-0.5 mr-2' />
                        <span className='text-sm font-semibold mr-2'>{user.name}</span>
                        <span className={open == true && 'rotate-180'}>
                            <Icon size={16} name="downDir" />
                        </span>

                    </Menu.Button>
                    <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm ${active && 'bg-white bg-opacity-20'}`}
                                    href="#"
                                >
                                    Account settings
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm ${active && 'bg-white bg-opacity-20'}`}
                                    href="#"
                                >
                                    Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm ${active && 'bg-white bg-opacity-20'}`}
                                    href="#"
                                >
                                    Log out
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}
