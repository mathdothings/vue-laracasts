const Assignment = {
    template: `
        <li>
            <label class="select-none cursor-pointer p-2 flex items-center justify-between">
                {{assignment.title}}
                <input
                    v-model="assignment.completed"
                    type="checkbox"
                    class="cursor-pointer ml-3"
            /></label>
        </li>
    `,
    props: {
        assignment: Object
    }
};

export default Assignment;
