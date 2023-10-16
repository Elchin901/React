import Logo from "./logo";
import Menu from "./menu";
import Account from "./account";

export default function Sidebar() {
    return (
        <aside className="w-[275px] min-h-screen max-h-screen px-2 flex flex-col overflow-auto ">
            <Logo/>
            <Menu/>
            <Account/>

            <div className="mt-auto">
                <div className="my-3">
                </div>
            </div>
        </aside>)

}
