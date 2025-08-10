interface Icon {
    iconName: string;
    alt: string;
    size: number;
}

interface Skill {
    skillName: string;
    icons: Icon[];
}

interface Category {
    id: number;
    name: string;
    fullName: string;
    skills: Skill[];
}

export const categories: Category[] = [
    {
        id: 1,
        name: "Frontend",
        fullName: "Frontend Development",
        skills: [
            {
                skillName: "Web Frameworks & Tools",
                icons: [
                    { iconName: "/skills/frontend/nextjs", alt: "Next.js", size: 50 },
                    { iconName: "/skills/frontend/react", alt: "React", size: 50 },
                    { iconName: "/skills/frontend/redux", alt: "Redux", size: 50 },
                    { iconName: "/skills/frontend/tailwindcss", alt: "Tailwind CSS", size: 50 },
                ]
            },
            {
                skillName: "Mobile Development",
                icons: [
                    { iconName: "/skills/frontend/reactnative", alt: "React Native", size: 50 },
                    { iconName: "/skills/frontend/expo", alt: "Expo", size: 50 },
                    { iconName: "/skills/frontend/styledcomponents", alt: "Styled Components", size: 50 },
                ]
            },
            {
                skillName: "Testing & Code Quality",
                icons: [
                    { iconName: "/skills/frontend/jest", alt: "Jest", size: 50 },
                    { iconName: "/skills/frontend/testinglibrary", alt: "React Testing Library", size: 50 },
                    { iconName: "/skills/frontend/eslint", alt: "ESLint", size: 50 },
                    { iconName: "/skills/frontend/prettier", alt: "Prettier", size: 50 },
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Backend",
        fullName: "Backend Development",
        skills: [
            {
                skillName: "Frameworks & Languages",
                icons: [
                    { iconName: "/skills/backend/nodejs", alt: "Node.js", size: 50 },
                    { iconName: "/skills/backend/express", alt: "Express.js", size: 50 },
                ]
            },
            {
                skillName: "Data Validation & Security",
                icons: [
                    { iconName: "/skills/backend/jwt", alt: "JSON Web Tokens", size: 50 },
                    { iconName: "/skills/backend/oauth2", alt: "OAuth2", size: 50 },
                ]
            },
            {
                skillName: "API Design & Data Management",
                icons: [
                    { iconName: "/skills/backend/axios", alt: "Axios", size: 50 },
                    { iconName: "/skills/backend/reactquery", alt: "React Query", size: 50 },
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Others",
        fullName: "Other Skills and Interests",
        skills: [
            {
                skillName: "Databases",
                icons: [
                    { iconName: "/skills/database/postgresql", alt: "PostgreSQL", size: 50 },
                    { iconName: "/skills/database/prisma", alt: "Prisma", size: 50 },
                    { iconName: "/skills/database/mongodb", alt: "MongoDB", size: 50 },
                    { iconName: "/skills/database/sqlite", alt: "SQLite", size: 50 },
                ]
            },
            {
                skillName: "DevOps & Infrastructure",
                icons: [
                    { iconName: "/skills/devops/nginx", alt: "Nginx", size: 50 },
                    { iconName: "/skills/devops/vercel", alt: "Vercel", size: 50 },
                    { iconName: "/skills/devops/aws", alt: "AWS", size: 50 },
                    { iconName: "/skills/devops/githubactions", alt: "GitHub Actions", size: 50 },
                ]
            },
            {
                skillName: "Want to Learn",
                icons: [
                    { iconName: "/skills/learn/docker", alt: "Docker", size: 50 },
                    { iconName: "/skills/learn/kubernetes", alt: "Kubernetes", size: 50 },
                    { iconName: "/skills/learn/nestjs", alt: "Nest JS", size: 50 },
                    { iconName: "/skills/learn/zod", alt: "Zod", size: 50 },
                ]
            }
        ]
    },
]