import { SkillLevel, SkillStatus } from "./enums";
import type { User } from "./types"; // TypeScript বুঝতে পারে এটা শুধু type import

export const users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        skills: [
            {
                id: 1,
                name: "TypeScript",
                level: SkillLevel.Beginner,
                status: SkillStatus.Active,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                name: "React",
                level: SkillLevel.Intermediate, 
                status: SkillStatus.Active,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                name: "Shopify",
                level: SkillLevel.Advanced,
                status: SkillStatus.Active,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        skills: [
            {
                id: 4,
                name: "Node.js",
                level: SkillLevel.Intermediate, 
                status: SkillStatus.Archived,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 5,
                name: "GraphQL",
                level: SkillLevel.Beginner,
                status: SkillStatus.Active,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 6,
                name: "Express.js",
                level: SkillLevel.Beginner,
                status: SkillStatus.Active,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 7,
                name: "TypeScript",
                level: SkillLevel.Advanced,
                status: SkillStatus.Active,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
    }
]