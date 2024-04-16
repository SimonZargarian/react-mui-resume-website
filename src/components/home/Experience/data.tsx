import xlnt from "../../../images/xlnt.png"
import leo from "../../../images/leo.png"
import devies from "../../../images/devies.png"

export type Experience= {
    id: number;
    name: string;
    detail: string;
    tech: string[];
    link?: string ;
    image: string
}

export type Experiences = {
    id: number;
    name: string;
    projects: Experience[]
}
export const experienceList:[Experiences] = [
    {
        id : 0,
        name: "@Simon_Zargarin",
        projects: [
            {
                id: 0,
                name: "XLNT Group",
                detail: "As a developer and AI Manager at the helm of the automation project, my role encompassed the end-to-end development and integration of advanced AI models and robust software solutions.  My responsibilities were multi-faceted, involving deep research as a data scientist  into existing processes and data, designing Java, JavaScript and AI based algorithms such as OpenAI Gpt, Google Gemma and Facebook Llama ",
                tech: ["Google Gemma", "Open-AI GTP", "React", "TenserFlow"],
                link: "https://junkielabs.in/",
                image: xlnt
            },
            {
                id: 1,
                name: "Devies",
                detail: "The client required an e-commerce platform to sell commodities online that was not only efficient, but also able to handle large amounts of traffic and transactions while providing a smooth user experience. The platform had to be able to integrate with various payment gateways, shipping providers, and tax calculators. ",
                tech: ["Java", "React", "Spring Boot", "TypeScript" ],
                link: "https://junkielabs.in/",
                image: devies
            },
            {
                id: 2,
                name: "Leo Vegas",
                detail: "Working within the Responsible Gaming department, I was part of a team that ensured business logic was set in place that enforced that compliance and mandatory requirements were being upheld. I managed the entire lifecycle process of the assignments I was handed, starting from understanding the business aspect, developing the logic, unit testing, integration testing, manual testing, release and deployment on multiple markets",
                tech: ["GCP", "MySql","Spring Boot", "Kotlin", "Java"],
                image: leo
            }
        ]
    }
]
