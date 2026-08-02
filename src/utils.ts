import type { User } from "./types";
import { users } from "./data";

// যে function শুধু display করবে। oi gula e utils function e thakbe. jar dara data change hobe na.
// printUsers()

// printSkills()

// printLine()

// এগুলো কোনো data change করবে না।


export function printLine(): void {
  console.log("--------------------------------");
}

export function printUsers(users: User[]): void {
    printLine();
    console.log("Users");
    printLine();

    users.forEach(user => {
        console.log(`Name: ${user.name}`);
    });
}
printUsers(users);


export function printSkills(skills: User["skills"]): void {
    printLine();
    console.log("Skills");
    printLine();
    skills.forEach(skill => {
        console.log(`Skill: ${skill.name}, Level: ${skill.level}, Status: ${skill.status}`);
    });
}


printSkills(users[0].skills);
