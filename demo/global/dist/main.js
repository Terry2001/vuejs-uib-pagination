var app = new Vue({
    el: "#app",
    data: {
        totalItems: 64,
        
        pagination1: {
            currentPage: 4
        },

        pagination2: {
            currentPage: 1
        },

        setPage: function (pageNo) {
            this.pagination1.currentPage = pageNo;
        },

        setToFirstPage: function () {
            //this.pagination1.changeToSetToFirstPage += 1;
            this.$refs.pageBar.setToFirstPage();
        },

        pageChanged: function () {
            console.log('Page changed to: ' + this.pagination1.currentPage);
        },

        maxSize: 5,
        bigTotalItems: 175
    }
});