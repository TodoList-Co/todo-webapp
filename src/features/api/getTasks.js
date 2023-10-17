const data = [
	{
		id: 1,
		text: "Send out project update emails to team members.",
		complete: true,
	},
	{
		id: 2,
		text: "Schedule a meeting with the marketing team to discuss upcoming campaigns.",
		complete: false,
	},
	{
		id: 3,
		text: "Review and organize important documents in the filing system.",
		complete: true,
	},
	{
		id: 4,
		text: "Follow up with potential clients for feedback on recent proposals.",
		complete: false,
	},
	{
		id: 5,
		text: "Research and compile a list of industry-related conferences and events.",
		complete: true,
	},
	{
		id: 6,
		text: "Complete the financial report for the previous quarter.",
		complete: false,
	},
	{
		id: 7,
		text: "Conduct a performance review meeting with each team member.",
		complete: true,
	},
	{
		id: 8,
		text: "Brainstorm new ideas for product improvement with the development team.",
		complete: false,
	},
	{
		id: 9,
		text: "Attend the leadership seminar scheduled for next week.",
		complete: true,
	},
	{
		id: 10,
		text: "Coordinate with the HR department for upcoming recruitment procedures.",
		complete: false,
	},
	{
		id: 11,
		text: "Update the company's social media profiles with recent achievements.",
		complete: true,
	},
	{
		id: 12,
		text: "Clean and organize the office space for a more conducive work environment.",
		complete: false,
	},
];

const getTasks = async () => {
	try {
		return { data };
	} catch (err) {
		throw new Error(err.message);
	}
};

export default getTasks;
