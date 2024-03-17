choices_dungeon_1 = {
    "choose_choices":{
        "dungeon_first_enter":{
            "choices_detail":"คุณเลือกที่จะเดินเข้าไปในโบราณสถานที่ต่อหรือไม่? [ ตำแหน่งปัจจุบัน: หน้าทางเข้าโบราณสถาน ]",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "nickname":"go_to_camp",
                    "detail":"[ ไปต่อ ]", 
                    "paths":[ 
                        [ [["first_time_camp", "<=", 0]], url_path("14c9089484180a1fb343b9775c57971f")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", "<=", 0]], url_path("3a9b0ee5fb3bf10a8f61f20c4ba7d111")],
                        [ [["first_time_camp", ">", 0, "and"],
                            ["is_kill_all_thiefs", ">", 0]], url_path("29a91b13e895e074f190fe110d8762b4")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_camp", "=", 1]
                    ]
                },
                {
                    "nickname":"back_to_village",
                    "detail": "[ เดินทางกลับไปยังใจกลางหมู่บ้าน ]",
                    "paths":[ 
                        [ [["first_time_vilage", "<=", 0]], url_path("bd13952e7fb4941dd0cee6e9cee2b308")],
                        [ [["first_time_vilage", ">", 0]], url_path("a38c26dd9174fa2e2e01cb6f21cd8b13")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_vilage", "=", 1],
                    ]
                },
            ],
        },
    }
}