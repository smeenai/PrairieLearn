
define(['underscore', 'backbone'], function(_, Backbone) {

    var TestModel = Backbone.Model.extend({
        idAttribute: "tid",

        isExam: function() {
            return this.get("type") === "PracExam" || this.get("type") === "Exam";
        },
    });

    return {
        TestModel: TestModel
    };
});
