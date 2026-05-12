import LanguageIcon from "@/components/ui/icons/LanguageIcon"
import ShareIcon from "@/components/ui/icons/ShareIcon"


export default function HomePageFooterBrandColumn() {
    return (
        <div className="
            w-full
            max-w-[342px]
            min-h-[60px]
            lg:max-w-[268px]
            lg:min-h-[186px]
            h-auto 
            flex
            flex-col
            justify-between
        ">
            <h2 className="text-[18px] font-bold text-[#0F172A]">Corporate Excellence</h2>
                
            <p className="hidden lg:block text-[12px] font-normal text-[#64748B]">
                A global leader in professional advisory <br />
                services, providing the stability and strategic <br />
                foresight required for long-term institutional <br />
                success.
            </p>

            {/* 모바일 사이즈 일 때 */}
            <p className="block lg:hidden text-[12px] font-normal text-[#64748B]">Excellence in every interaction, stability in every decision.</p>

           
            <div className="hidden lg:flex w-full max-w-[268px] min-h-[32px] bg-[#F8FAFC] items-center gap-4">
                <LanguageIcon
                    className="w-full max-w-[32px] min-h-[32px] h-auto bg-white flex items-center justify-center"
                    imageSrc="../../../../icons/language-icon.svg"
                    width={20}
                    height={22}
                />

                <ShareIcon
                    className="w-full max-w-[32px] min-h-[32px] h-auto bg-white flex items-center justify-center"
                    imageSrc="../../../../icons/share-icon.svg"
                    width={20}
                    height={22}
                />
            </div>
        </div>
    )
}