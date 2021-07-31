new Vue({
    el: "app",
    data: {
        zandaka: 0,
        nyuryokugaku: "",
        logs: [],
    },
    methods: {
        nyukin: function() {
            this.zandaka += Number(this.nyuryokugaku)
            const now =new Date()
            this.logs.push('日付:${now}')
            this.logs.push("操作:入金")
            this.logs.push('金額:${Number(this.nyuryokugaku)}')

        },
        syukkin: function() {
            if (this.nyuryokugaku <= this.zandaka) {
                this.zandaka -= Number(this.nyuryokugaku)
                const now = new Date()
                this.logs.push('日付:${now}')
                this.logs.push("操作:出金")
                this.logs.push('金額:${number(this.nyuryokugaku)}')

            } else {
                const now = new Date()
                this.logs.push('日付:${now}')
                this.logs.push("操作:出金")
                this.logs.push('残高不足のため出金できません。現在 ${this.zandaka}円までは出金できます。')
            }
        }
    }
})