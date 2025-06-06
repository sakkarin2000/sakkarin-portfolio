export const techStackData: Record<
  string,
  { name: string; proficiency: number }[]
> = {
  Frontend: [
    { name: "React", proficiency: 6 },
    { name: "React Query", proficiency: 5 },
    { name: "Vue 2", proficiency: 5 },
    { name: "Zustand", proficiency: 4 },
    { name: "Mobx", proficiency: 4 },
    { name: "Flutter", proficiency: 3 },
    { name: "Dart", proficiency: 1 },
  ],
  "Styling & Bundler": [
    { name: "Tailwind CSS", proficiency: 6 },
    { name: "CSS", proficiency: 5 },
    { name: "Yarn", proficiency: 5 },
    { name: "Rspack", proficiency: 4 },
    { name: "Bun", proficiency: 4 },
    { name: "Webpack", proficiency: 3 },
    { name: "TurboRepo", proficiency: 2 },
    { name: "Module Federation", proficiency: 2 },
  ],
  Backend: [
    { name: "NestJS", proficiency: 6 },
    { name: "ExpressJS", proficiency: 5 },
    { name: "KoaJS", proficiency: 5 },
    { name: "NodeJS", proficiency: 5 },
    { name: "TypeScript", proficiency: 6 },
    { name: "JavaScript", proficiency: 5 },
    { name: "FastAPI", proficiency: 2 },
    { name: "Flask", proficiency: 2 },
    { name: "Spring Boot", proficiency: 1 },
    { name: "Python", proficiency: 1 },
    { name: "Java", proficiency: 1 },
  ],
  "Database & Storage": [
    {
      name: "MySQL",
      proficiency: 5,
    },
    {
      name: "PostgreSQL",
      proficiency: 4,
    },
    {
      name: "Amazon S3",
      proficiency: 4,
    },
    {
      name: "Firebase",
      proficiency: 3,
    },
  ],
  Documentation: [
    { name: "OpenAPI Spec", proficiency: 6 },
    { name: "GitLab Markdown", proficiency: 5 },
    { name: "Excalidraw", proficiency: 5 },
    { name: "MermaidJS", proficiency: 5 },
    { name: "D2lang", proficiency: 4 },
  ],
  "DevOps & Tools": [
    { name: "Postman", proficiency: 6 },
    { name: "Bruno", proficiency: 5 },
    { name: "Git", proficiency: 5 },
    { name: "GitLab", proficiency: 4 },
    { name: "Docker", proficiency: 4 },
    { name: "Nginx", proficiency: 4 },
    { name: "Jira", proficiency: 4 },
    { name: "GitHub", proficiency: 3 },
    { name: "GitLab CI/CD", proficiency: 3 },
    { name: "Jenkins", proficiency: 2 },
    { name: "K3s", proficiency: 2 },
  ],
};
