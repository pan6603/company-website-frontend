import HomePageFooterBrandColumn from "@/components/layout/footer/home/HomePageFooterBrandColumn"
import HomePageFooterQuickLinks from "@/components/layout/footer/home/HomePageFooterQuickLinks"
import HomePageFooterServicesLinks from "@/components/layout/footer/home/HomePageFooterServicesLinks"
import HomePageFooterNewsletter from "@/components/layout/footer/home/HomePageFooterNewsletter"

export default function HomePageFooterContent() {
    return (
        <div className="w-full max-w-[1280px] min-h-[186px] h-auto bg-[#F8FAFC] px-8 flex items-center justify-between">
            <HomePageFooterBrandColumn />
            <HomePageFooterQuickLinks />
            <HomePageFooterServicesLinks />
            <HomePageFooterNewsletter />
        </div>
    )
}