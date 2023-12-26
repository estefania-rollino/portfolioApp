export interface AboutMeViewModel {
    name: string;
    title: string;
    bio: string;
    skills: SkillPercentage[];
    showProfileImage: boolean;
    githubLink: string;
    linkedinLink: string;
    downloadLink: string;
}
export interface SkillPercentage {
    name: string;
    percentage: number;
}
