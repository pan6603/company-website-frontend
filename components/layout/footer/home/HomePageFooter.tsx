import HomePageFooterContent from "@/components/layout/footer/home/HomePageFooterContent";
import HomePageMobileFooterContent from "@/components/layout/footer/home/HomePageMobileFooterContent";
import HomePageBottomFooter from "@/components/layout/footer/home/HomePageBottomFooter";



export default function HomePageFooter() {
    return (
        <footer 
            className="
                w-full
                bg-[#F8FAFC]
                h-auto
                lg:min-h-[444px] 
                lg:px-[24px]
                lg:py-[64px] 
                lg:flex 
                lg:flex-col 
                lg:items-center
                lg:justify-between
            ">  
            <HomePageMobileFooterContent />
            <HomePageFooterContent />
            <HomePageBottomFooter />
        </footer>
    )
}
