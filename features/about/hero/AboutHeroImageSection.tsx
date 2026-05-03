import Image from "next/image"


export default function AboutHeroImageSection() {
    return (
        <>
            <div className="w-full max-w-[584px] min-h-[500px] h-auto bg-amber-200 flex items-center justify-center">
                <Image
                    src="../../../images/about/about-hero-image.svg"
                    alt="about-hero-image"
                    width={584}
                    height={500}
                    className="object-cover rounded-lg"
                />
            </div>
        </>
   
    )
}