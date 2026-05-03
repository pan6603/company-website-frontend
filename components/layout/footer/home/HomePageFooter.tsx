import HomePageFooterContent from "@/components/layout/footer/home/HomePageFooterContent";
import HomePageBottomFooter from "@/components/layout/footer/home/HomePageBottomFooter";



export default function HomePageFooter() {
    return (
        <footer className="w-full min-h-[444px] h-auto bg-[#F8FAFC] py-[64px] flex flex-col justify-between">
            <HomePageFooterContent />
            <HomePageBottomFooter />
        </footer>
    )
}