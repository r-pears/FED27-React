import {HeroComponent} from "./HeroComponent";
import {StatsSection} from "./StatsSection";
import {ProgramsSection} from "./ProgramsSection";
import {BusinessSection} from "./BusinessSection";
import {ContactSection} from "./ContactSection";

export function Homepage(){
    return(
        <>
            <HeroComponent />
            <StatsSection />
            <ProgramsSection />
            <BusinessSection />
            <ContactSection />
        </>
    )
}