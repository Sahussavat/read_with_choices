choices_vilage = {
    "choose_choices":{
        "1":{
            "choices_detail":"คุณจะเดินทางไปที่ใดต่อ? [ตำแหน่งปัจจุบัน: ใจกลางหมู่บ้าน]",
            "condition": [
                ["หน้ากากหมออีกา","=", 0, "and"],
            ],
            "results": [
                ["หน้ากากหมออีกา", "=", 1],
            ],
            "choices": [
                {
                    "nickname":"potion_shop",
                    "detail":"[ ไปร้านขาย Potion ]", 
                    "paths":[ 
                        [ [["first_time_potion_shop", "<=", 0]], url_path("657b1656e031e22d2f0eb08f0942cd3f")],
                        [ [["first_time_potion_shop", ">", 0]], url_path("42560116004bbbb7d39cf3a046e10835")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_potion_shop", "=", 1],
                    ]
                },
                {
                    "nickname":"ancient_dun",
                    "detail": "[ เดินทางไปยังโบราณสถาน ]",
                    "paths":[ 
                        [ [["first_time_enter_dungeon", "<=", 0]], url_path("590608c6f1d5e16a89ae4adb6381db08")],
                        [ [["first_time_enter_dungeon", ">", 0]], url_path("79a66580fd0461ccaf493803abb3e1fd")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_enter_dungeon", "=", 1],
                    ]
                },
            ],
        },
    }
}