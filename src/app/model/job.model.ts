export class Job {
    id!: number;
    company!: string;
    logo!: string;
    contract!: string;
    location!: string;
    position!: string;
    postedAt!: string;
    description!: string;
    apply!: string;
    logoBackground!: string;
    requirements!: Requirements[];
    role!: Role[];
}

export class Requirements {
    content!: string;
    items!: string[];
}
export class Role {
    content!: string;
    items!: string;
}