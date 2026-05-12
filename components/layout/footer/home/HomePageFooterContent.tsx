import HomePageFooterBrandColumn from "@/components/layout/footer/home/HomePageFooterBrandColumn"
import HomePageFooterQuickLinks from "@/components/layout/footer/home/HomePageFooterQuickLinks"
import HomePageFooterServicesLinks from "@/components/layout/footer/home/HomePageFooterServicesLinks"
import HomePageFooterNewsletter from "@/components/layout/footer/home/HomePageFooterNewsletter"

export default function HomePageFooterContent() {
    return (
        <div className="
            hidden
            w-full 
            lg:max-w-[1280px]
            lg:min-h-[186px]
            h-auto
            lg:px-8
            lg:items-center
            lg:justify-between 
            lg:flex
        ">
            <HomePageFooterBrandColumn />
            <HomePageFooterQuickLinks />
            <HomePageFooterServicesLinks />
            <HomePageFooterNewsletter />
        </div>
    )
}
