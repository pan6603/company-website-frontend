import EmailInput from "@/components/ui/input/EmailInput"



export default function HomePageFooterNewsletter() {
    return (
        <div className="w-full max-w-[268px] min-h-[186px] h-auto flex flex-col gap-[24px]">
            <h4 className="text-[12px] font-semibold text-[#131B2E]">Insights</h4>
            <p className="text-[12px] font-normal text-[#64748B]">
                Receive curated executive summaries directly <br />
                to your inbox.
            </p>

            <EmailInput 
                className="w-full max-w-[268px] min-h-[42px] h-auto bg-[#FFFFFF] rounded-[3px] p-4 text-[12px] font-normal text-[#6B7280]" 
                placeholder="Corporate Email" 
            />
        </div>

    )
}