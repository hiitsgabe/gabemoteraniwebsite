import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiDocker,
    SiAmazon,
    SiTerraform,
    SiVuedotjs,
    SiSvelte,
    SiAngular,
    SiRubyonrails,
    SiRuby,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiAmazondynamodb,
    SiOpenjdk,
    SiOpenai,
} from "react-icons/si";
import {
    IconBrain,
    IconPuzzle,
    IconAccessible,
    IconUsers,
    IconDeviceMobile,
    IconChartLine,
    IconDatabase,
    IconTool,
    IconSettings,
    IconHeadset,
    IconServer,
    IconCloud,
    IconBoxMultiple,
    IconCode,
    IconChartDots,
    IconBuildingBank,
} from "@tabler/icons-react";

export const technologyIcons: Record<string, React.ComponentType<any>> = {
    // AI & ML
    "Machine Learning": IconBrain,
    "LLMs": SiOpenai,
    "ChatGPT": SiOpenai,

    // Web Technologies & Languages
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "React": SiReact,
    "React.js": SiReact,
    "Node.js": SiNodedotjs,
    "Vue": SiVuedotjs,
    "Svelte": SiSvelte,
    "Java": SiOpenjdk,
    "Angular": SiAngular,
    "Angular 2": SiAngular,
    "Ruby on Rails": SiRubyonrails,
    "Ruby": SiRuby,

    // DevOps & Infrastructure
    "Docker": SiDocker,
    "AWS": SiAmazon,
    "Terraform": SiTerraform,
    "Infrastructure": IconCloud,
    "Platform Engineering": IconServer,

    // Data & Databases
    "Data Lake": IconDatabase,
    "Big Data": IconChartDots,
    "MySQL": SiMysql,
    "Postgres": SiPostgresql,
    "PostgreSQL": SiPostgresql,
    "MongoDB": SiMongodb,
    "DynamoDB": SiAmazondynamodb,

    // Architecture & Patterns
    "Microfrontends": IconBoxMultiple,

    // General
    "Web Extensions": IconPuzzle,
    "WCAG": IconAccessible,
    "Team Leadership": IconUsers,
    "Mobile Development": IconDeviceMobile,
    "Performance Tuning": IconChartLine,
    "FinTech": IconBuildingBank,
    "Hardware": IconTool,
    "Maintenance": IconSettings,
    "Technical Support": IconHeadset,
};

export const getTechnologyIcon = (technology: string): React.ComponentType<any> => {
    return technologyIcons[technology] || IconCode;
};
