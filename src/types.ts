import { SkillLevel, SkillStatus } from "./enums";

type Timestamps = {
    createdAt: Date;
    updatedAt: Date;
};

export type Skill = {
    id: number;
    name: string;
    level: SkillLevel;
    status: SkillStatus;
} & Timestamps;

export type User = {
    id: number;
    name: string;
    email: string;
    skills: Skill[];
} & Timestamps;

//Tuple type to represent skill statistics
export type SkillStatistics = [number, SkillLevel] // Represents the count of skills at a specific level

export type SearchResult = {
  user: User;
  skill: Skill;
};