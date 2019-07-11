import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    member: computed.alias('model.member'),

    views: {
        "steven": [
            {
                name: "Tasks",
                id: "shrAgcgCtSwZzfnZb",
                tableID: "tbl4EXknlx1aWP6UZ/viwWi3JCcstbzyzWU"
            },
            {
                name: "Responsibilities",
                id: "shrHLCOXkJUBDjgMv",
                tableID: "tblcTZrU4meHWNcop/viwIpVlxjzHA3LY5j"
            },
            {
                name: "Umbrella Sound",
                id: "shrzxCJdi5B2aQIRg",
                tableID: "tblFQRRwKt4xqbFto/viwJMh9UFRQ8Jaa1t"
            },
            {
                name: "Instagator Gigs",
                id: "shrKtdRnDZCFGYhMI",
                tableID: "tblFQRRwKt4xqbFto/viwRlSKd3JYMnMaBA"
            }
        ],
        "meghan": [
            {
                name: "Tasks",
                id: "shrJG5AnBGD3jvmzq",
                tableID: "tbl4EXknlx1aWP6UZ/viwvvT8O5ovuLsnND"
            },
            {
                name: "Responsibilities",
                id: "shrIo3d3Nadhdl552",
                tableID: "tblcTZrU4meHWNcop/viwecCSFkSoYLIJQJ"
            },
            {
                name: "Upcoming Events - Meghan's Decor",
                id: "shr3Sf5bYzUTlYjbq",
                tableID: "tblFQRRwKt4xqbFto/viwYVQAlkuiZYZ04q"
            },
            {
                name: "TrippyPants Gigs",
                id: "shrKtdRnDZCFGYhMI",
                tableID: "tblFQRRwKt4xqbFto/viwn2lPMgCXkPLqr6"
            }
        ],
        "carlos": [
            {
                name: "Tasks",
                id: "shrxekMnCIaRYFveb",
                tableID: "tbl4EXknlx1aWP6UZ/viwwFoZ065C6N7G0C"
            },
            {
                name: "Responsibilities",
                id: "shrOdbLVCu8mH9l4Y",
                tableID: "tblcTZrU4meHWNcop/viwEaFq3dmupjiaoE"
            },
            {
                name: "Events Planning View",
                id: "shr6xmiPzG6s6RxsX",
                tableID: "tblFQRRwKt4xqbFto/viw4CiKq7LzbTlBjm"
            },
            {
                name: "Promotion",
                id: "shrlvSKJzzYy52L9K",
                tableID: "tblexnaAw5YoHjKSF/viwo6zrm4M3P12qNu"
            },
            {
                name: "Castillo & It's Raining Men Gigs",
                id: "shr3559A067f4g5SF",
                tableID: "tblFQRRwKt4xqbFto/viwcU0AbOckachKwY"
            }
        ],
        "barrera": [
            {
                name: "Tasks",
                id: "shrExignY8p2oAPQX",
                tableID: "tbl4EXknlx1aWP6UZ/viwNGketeV5keEPvX"
            },
            {
                name: "Responsibilities",
                id: "shrje6PWZedqh8Juf",
                tableID: "tblcTZrU4meHWNcop/viw4JYZvKF9tbuY9V"
            },
            {
                name: "Events Planning View",
                id: "shrmd3NHkJit2jnV8",
                tableID: "tblFQRRwKt4xqbFto/viwEiYyDR2n53DLtE"
            },
            {
                name: "Barrera Gigs",
                id: "shrTWWMf8Hs7ncuoZ",
                tableID: "tblFQRRwKt4xqbFto/viwSQAoAYHFtmqca8"
            }
        ],
        "luke": [
            {
                name: "Tasks",
                id: "shrA5yuZFz00yzgIZ",
                tableID: "tbl4EXknlx1aWP6UZ/viwhD1QMQCAMYkUvJ"
            },
            {
                name: "Responsibilities",
                id: "shrVPODZCkYqFRdc2",
                tableID: "tblcTZrU4meHWNcop/viwt40BE9dXXQ3sHV"
            },
            {
                name: "Guest Lists",
                id: "shrrOQs1bVD6AxRHP",
                tableID: "tblFQRRwKt4xqbFto/viwdeNwpwqRWTUWaG"
            },
            {
                name: "Event Planning View",
                id: "shrkV5qugdmvBaYHe",
                tableID: "tblFQRRwKt4xqbFto/viwdPVpO6rF0zAcdf"
            },
            {
                name: "Staffing",
                id: "shraYPWP4COOPjDGO",
                tableID: "tblFQRRwKt4xqbFto/viwPOvWqEYMjI9XDd"
            }
        ],
        "johann": [
            {
                name: "Tasks",
                id: "shrMyf9AraeRQJawd",
                tableID: "tbl4EXknlx1aWP6UZ/viwkVPTMS4rVqu0jM"
            },
            {
                name: "Responsibilities",
                id: "shrTjKGShMwRfccoU",
                tableID: "tblcTZrU4meHWNcop/viwE4thMYXTBhpuVW"
            }
        ],
        "milad": [
            {
                name: "Tasks",
                id: "shrEmexBEVGbcMUNs",
                tableID: "tbl4EXknlx1aWP6UZ/viwSWnf5Rqh00Ut4z"
            },
            {
                name: "Responsibilities",
                id: "shrK1eIDZDKF4GGMb",
                tableID: "tblcTZrU4meHWNcop/viwWO8l79CVOj6MC8"
            },
            {
                name: "Events Planning View",
                id: "shraKTqI1BFeUK0hL",
                tableID: "tblFQRRwKt4xqbFto/viwPqsNScQjuur5Ts"
            },
            {
                name: "Sprout Gigs",
                id: "shrDnZr5MBl4MzPON",
                tableID: "tblFQRRwKt4xqbFto/viwGnMfXSNFw7s5ya"
            }
        ]
    },

    selectedMemberViews: computed('member', 'views', function() {
        return this.get('views')[this.get('member')];
    })
});
