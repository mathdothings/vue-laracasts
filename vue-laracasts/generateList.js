class RandomList {
    base = [
        { title: 'Practice math problems', tag: 'math' },
        { title: 'Watch a math tutorial', tag: 'math' },
        { title: 'Create a math game', tag: 'math' },
        { title: 'Teach a math concept', tag: 'math' },
        { title: 'Explore math applications', tag: 'math' },
        { title: 'Solve a math puzzle', tag: 'math' },
        { title: 'Review a math concept', tag: 'math' },
        { title: 'Find a math-related app', tag: 'math' },
        { title: 'Attend a math workshop', tag: 'math' },
        { title: 'Write a math blog post', tag: 'math' },
        { title: 'Conduct a home experiment', tag: 'science' },
        { title: 'Read a science article', tag: 'science' },
        { title: 'Watch a science documentary', tag: 'science' },
        { title: 'Create a science mind map', tag: 'science' },
        { title: 'Attend a science event', tag: 'science' },
        { title: 'Discuss a scientific topic', tag: 'science' },
        { title: 'Follow a science YouTube channel', tag: 'science' },
        { title: 'Write about a scientist', tag: 'science' },
        { title: 'Summarize a research paper', tag: 'science' },
        { title: 'Join a science club', tag: 'science' },
        { title: 'Read a novel chapter', tag: 'english' },
        { title: 'Write a journal entry', tag: 'english' },
        { title: 'Join an English group', tag: 'english' },
        { title: 'Listen to a podcast', tag: 'english' },
        { title: 'Write a short story', tag: 'english' },
        { title: 'Analyze a poem', tag: 'english' },
        { title: 'Create a vocabulary list', tag: 'english' },
        { title: 'Watch an English movie', tag: 'english' },
        { title: 'Write a book review', tag: 'english' },
        { title: 'Practice English idioms', tag: 'english' },
        { title: 'Complete a coding challenge', tag: 'programming' },
        { title: 'Watch a coding tutorial', tag: 'programming' },
        { title: 'Build a small project', tag: 'programming' },
        { title: 'Contribute to open-source', tag: 'programming' },
        { title: 'Join a coding community', tag: 'programming' },
        { title: 'Read a programming book', tag: 'programming' },
        { title: 'Learn a new framework', tag: 'programming' },
        { title: 'Create a personal website', tag: 'programming' },
        { title: 'Attend a coding bootcamp', tag: 'programming' },
        { title: 'Pair program with a friend', tag: 'programming' },
        { title: 'Create a workout plan', tag: 'gym' },
        { title: 'Try a fitness class', tag: 'gym' },
        { title: 'Track fitness progress', tag: 'gym' },
        { title: 'Cook a healthy recipe', tag: 'gym' },
        { title: 'Engage in mindfulness', tag: 'gym' },
        { title: 'Join a local sports team', tag: 'gym' },
        { title: 'Set fitness goals', tag: 'gym' },
        { title: 'Learn a new sport', tag: 'gym' },
        { title: 'Practice yoga or stretching', tag: 'gym' },
        { title: 'Create a fitness challenge', tag: 'gym' },
        { title: 'Set personal goals', tag: 'lifestyle' },
        { title: 'Declutter your space', tag: 'lifestyle' },
        { title: 'Try a new hobby', tag: 'lifestyle' },
        { title: 'Create a daily routine', tag: 'lifestyle' },
        { title: 'Explore a local park', tag: 'lifestyle' },
        { title: 'Start a gratitude journal', tag: 'lifestyle' },
        { title: 'Volunteer in your community', tag: 'lifestyle' },
        { title: 'Plan a weekend getaway', tag: 'lifestyle' },
        { title: 'Practice digital detox', tag: 'lifestyle' },
        { title: 'Attend a local event', tag: 'lifestyle' },
        { title: 'Update resume and LinkedIn', tag: 'work' },
        { title: 'Read a development book', tag: 'work' },
        { title: 'Set career goals', tag: 'work' },
        { title: 'Network with a colleague', tag: 'work' },
        { title: 'Reflect on a work project', tag: 'work' },
        { title: 'Attend a professional workshop', tag: 'work' },
        { title: 'Research industry trends', tag: 'work' },
        { title: 'Join a professional organization', tag: 'work' },
        { title: 'Mentor a colleague', tag: 'work' },
        { title: 'Practice public speaking', tag: 'work' }
    ];

    completed = [false, true];

    random = (range) => Math.floor(Math.random() * range);

    values = [];
    randomTask = (taskList, unique = false) => {
        if (this.values.length === taskList.length) return;
        let i = this.random(taskList.length);
        if (unique) {
            if (this.values.includes(i)) {
                return this.randomTask(taskList, true);
            } else {
                this.values.push(i);
                return taskList[i];
            }
        } else {
            let i = random(taskList.length);
            return taskList[i];
        }
    };

    randomTaskList = (
        taskList,
        unique = false,
        start = 0,
        end = taskList.length
    ) => {
        const list = [];
        for (let index = start; index < end; index++) {
            const n = this.random(this.completed.length);
            const { title, tag } = this.randomTask(taskList, true);
            const task = {
                title,
                completed: this.completed[n],
                tag
            };
            list.push(task);
        }
        return list;
    };
}

export default RandomList;
