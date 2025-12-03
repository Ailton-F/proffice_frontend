import { AppFeatureDescription } from "~/components/AppFeatureDescription";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { LandingCard } from "~/components/LandingCard";

export function LandingPage() {

    return (
    <div className="h-screen">
        <Header/>
        <main className="mx-12 text-black md:mt-40 mt-20">

            <section className="md:mb-80 mb-32">
                <h1 className="text-5xl font-bold text-center">From extra hours to free time.</h1>
                <p className="text-center text-lg mt-4">Save time and organize your academic life with Proffice.</p>

                <div className="flex justify-center mt-8 gap-4">
                    <button className="bg-black text-white rounded-md px-4 py-3 cursor-pointer">Get Started</button>
                    <button className="px-4 py-3 border-neutral-300 border rounded-md cursor-pointer">Learn More</button>
                </div>
            </section>

            <section>
                <h1 className="text-5xl font-bold text-center">How to Use Proffice</h1>
                <p className="text-center text-lg mt-4">Simple steps to enhance your teaching efficiency.</p>
                <div className="flex md:flex-row flex-col gap-y-12 md:gap-x-12 mt-20">
                    <LandingCard
                        count={'asd'}
                        title="Step 1: Plan Your Classes"
                        description="Easily organize lessons with attached teaching materials." />
                    <LandingCard
                        count={'asd'}
                        title="Step 2: Schedule Exams and Meetings"
                        description="Set automatic reminders to never miss an important date." />
                    <LandingCard
                        count={'asd'}
                        title="Step 3: Highlight Your Best Lesson"
                        description="Share standout moments of learning directly on social media." />
                </div>
            </section>
            <section className="md:mt-80 mt-32">
                <h1 className="text-5xl font-bold text-center">Features That Empower Educators</h1>
                <p className="text-center text-lg mt-4">Optimize your teaching experience with our powerful tools.</p>
                <div className="gap-y-12 md:gap-x-12 mt-20">
                    <AppFeatureDescription title="Effective Lesson Management" description="Organize courses and materials all in one place." />
                    <AppFeatureDescription title="Automated Scheduling" description="Send reminders for exams and meetings effortlessly." />
                    <AppFeatureDescription title="Social Sharing" description="Celebrate successful lessons with easy sharing options." />
                </div>
            </section>
        </main>
        <Footer />
    </div>
    );
}