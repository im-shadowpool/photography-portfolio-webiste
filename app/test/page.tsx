import FAQ from "../components/ui/FAQ";
import { accordionData } from "../lib/data/accordionData";

export default function Page() {
    return (
        <div className="py-50">
            <FAQ items={accordionData} />
        </div>
    )
}