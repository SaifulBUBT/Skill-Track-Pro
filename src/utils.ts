import type { User } from "./types";
import { users } from "./data";


export function printLine(): void {
  console.log("--------------------------------");
}

function printUsers(users: User[]): void {
    printLine();
    console.log("Users");
    printLine();

    users.forEach(user => {
        console.log(`Name: ${user.name}`);
    });
}
printUsers(users);


function printSkills(skills: User["skills"]): void {
    printLine();
    console.log("Skills");
    printLine();
    skills.forEach(skill => {
        console.log(`Skill: ${skill.name}, Level: ${skill.level}, Status: ${skill.status}`);
    });
}


printSkills(users[0].skills);
