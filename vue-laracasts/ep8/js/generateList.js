class RandomList {
    base = [
        'Read one chapter of a novel',
        'Write a daily journal entry',
        'Watch a short English video',
        'Practice speaking for 10 minutes',
        'Learn 5 new vocabulary words',
        'Listen to an English podcast',
        'Write a paragraph about your day',
        'Join an English discussion group',
        'Take an online grammar quiz',
        'Role-play a conversation scenario',
        'Read a news article and summarize',
        'Keep a list of new idioms',
        'Write a short poem',
        'Attend an English workshop',
        'Use a language app for 15 minutes',
        'Present a topic in English',
        'Join a local conversation club',
        'Practice tongue twisters',
        'Start an English blog',
        'Do a dictation exercise',
        'Translate a short text',
        'Read a poem and discuss it',
        'Listen to English songs and analyze lyrics',
        'Summarize a TED Talk',
        'Participate in a debate',
        'Write an email to a friend',
        'Create a vocabulary wall',
        'Summarize a paragraph',
        'Study a grammar rule today',
        'Attend a writing workshop',
        'Speak on a topic for 5 minutes',
        'Read an article in your interest area',
        'Engage in a language exchange',
        'Make a vocabulary quiz',
        'Discuss a character from a book',
        'Make a reading list of classics',
        'Watch a cooking show in English',
        'Write a haiku in English',
        'Record yourself reading',
        'Tell a story to a friend',
        'Watch videos on dialects',
        'List commonly confused words',
        'Enter a writing contest',
        'Practice phrasal verbs',
        'Review grammar mistakes',
        'Create a theme mind map',
        'Translate a song and discuss',
        'Give directions in English',
        'Take an online English course',
        'Write a book review',
        'Engage in critical thinking exercises',
        'Use a learning platform',
        'Set language learning goals',
        'Listen actively to English audio',
        'Join group discussions',
        'Speak at a public event',
        'Analyze essay structures',
        'Watch a documentary',
        'Read and analyze news articles',
        'Practice business writing',
        'Video call an English-speaking friend',
        'Scrapbook English phrases',
        'Sketch characters from a story',
        "Explore culture's impact on language",
        'Read an academic text',
        'Attend local English events',
        'Track your speaking progress',
        'Use new words in conversation',
        'Attend an English performance',
        'Study word origins',
        'Create dialogues for scenarios',
        'Conduct an English interview',
        'Read aloud for pronunciation',
        "Visit a library's English section",
        'Analyze short stories',
        'Summarize texts in your own words',
        'Play English learning games',
        'Use subtitles in English films',
        'Create a vision board of quotes'
    ];

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
            const n = this.random(2);
            list.push({
                title: this.randomTask(taskList, unique),
                completed: n > 0 ? true : false
            });
        }
        return list;
    };
}

export default RandomList;
