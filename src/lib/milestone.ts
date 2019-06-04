import data from "../data/milestones.json";

export interface Milestone {
    title: string;
    description: string;
    achieved: boolean;
    tags: string[];
    date?: string;
    links?: Array<{ platform: string, url: string }>;
}

export const getMilestones = (): Milestone[] => {
    return data.milestones as Milestone[];
}

export const sortMilestones = (self: Milestone, other: Milestone): number => {
    if (self.achieved && !other.achieved) {
        return 1;
    }

    if (other.achieved && !self.achieved) {
        return -1;
    }

    if (self.achieved && other.achieved) {
        const defaultDate = new Date();
        const selfDate = self.date ? new Date(self.date) : defaultDate;
        const otherDate = other.date ? new Date(other.date) : defaultDate;
        return selfDate.getTime() - otherDate.getTime();
    }

    return 0;
}