import { defineStore } from 'pinia';

export const useAboutStore = defineStore('about', {
  state: () => ({
    experiences: [
        {
            title: 'Computer Science Student',
            organization: 'University of Wisconsin-Whitewater',
            period: 'Expected Graduation: December 2025',
            description: 'Pursuing a Bachelor\'s of Science in Computer Science with a minor in Cybersecurity.',
            type: 'education'
        },
        {
            title: 'Team Member',
            organization: 'Noodles & Company',
            period: 'August 2020 - Present',
            description: 'As a team member at noodles and company I am responsible for various shift positions having completed all around training. ' +
                'These rotate from providing guest services, preparing product and bagging orders, and cooking the food for guests. I also help train new team members.',
            type: 'work'
        },
    ],
  }),
})