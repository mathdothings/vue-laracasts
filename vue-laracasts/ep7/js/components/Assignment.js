const Assignment = {
    template: `
        <li>
            <label class="select-none cursor-pointer">
                {{assignment.title}}
                <input
                    v-model="assignment.completed"
                    type="checkbox"
                    class="cursor-pointer ml-1"
            /></label>
        </li>
    `,
    props: {
        assignment: Object
    }
};

export default Assignment;
