import HomeMobileProfileCard from "@/components/layout/main/home/about/HomeMobileProfileCard"

const PROFILE_CARDS = [
  {
    imageSrc: "/images/profile-card/profile-card-1.svg",
    title: "London, UK",
    description: "Financial District HQ",
  },
  {
    imageSrc: "/images/profile-card/profile-card-2.svg",
    title: "Singapore",
    description: "Sustainability Hub",
  },
]

export default function HomeMobileAboutProfileCards() {
    return (
        <div className="w-full min-h-[400px] h-auto flex flex-col justify-between gap-[16px]">


            {PROFILE_CARDS.map((card) => (
                <HomeMobileProfileCard 
                    key={card.title}
                    className="w-full min-h-[192px] h-auto relative"
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    )
}