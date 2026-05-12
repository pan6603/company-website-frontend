



export default function HomePageMobileFooterLinks() {
    return (
        <div className="
            lg:w-full 
            max-w-[342px]
            min-h-[95px]
            h-auto
            flex
            items-center
            justify-between
            lg:hidden
        ">
            <div className="w-full max-w-[155px] min-h-[95px] h-auto flex flex-col justify-between">
                <h4 className="text-[10px] font-normal text-[#00327D]">Corporate</h4>

                <ul className="w-full max-w-[155px] min-h-[64px] h-auto flex flex-col justify-between">
                    <li className="text-[12px] font-normal text-[#64748B]">About Us</li>
                    <li className="text-[12px] font-normal text-[#64748B]">Services</li>
                    <li className="text-[12px] font-normal text-[#64748B]">Portfolio</li>
                </ul>
            </div>

            <div className="w-full max-w-[155px] min-h-[95px] h-auto flex flex-col justify-between">
                <h4 className="text-[10px] font-normal text-[#00327D]">Legal</h4>

                <ul className="w-full max-w-[155px] min-h-[64px] h-auto flex flex-col justify-between">
                    <li className="text-[12px] font-normal text-[#64748B]">Privacy Policy</li>
                    <li className="text-[12px] font-normal text-[#64748B]">Terms of Service</li>
                    <li className="text-[12px] font-normal text-[#64748B]">Contact</li>
                </ul>
            </div>
        </div>
    )
}