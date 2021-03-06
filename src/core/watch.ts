let watch = {
    "value.currentPage"(this: uibPagination, value: number, oldValue: number) {
        this.currentPage = value;

        if (oldValue == null) { return; }

        this.$emit("change");
    }
};

export default watch;