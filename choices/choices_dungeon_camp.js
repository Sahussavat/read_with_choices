choices_dungeon_camp = {
    "choose_choices":{
        "talk_w_thiefs":{
            "choices_detail":"คุณและกลุ่มโจรตั้งท่าเตรียมที่จะสู้กัน คุณจะทำอย่างไร?",
            "condition": [
            ],
            "results": [
                ["wolf_enable_to_attack", "=", 0],
            ],
            "choices": [
                {
                    "detail":"[ สู้ ]", 
                    "paths":[ 
                        [ [], "./index.html?select=fight_thiefs"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
                {
                    "detail": "[ เจรจา ]",
                    "paths":[ 
                        [ [], url_path("7775f566b600e64a7c1b54145e48d21a")],
                    ],
                    "condition": [
                        ["how_good_can_you_talk", "=", 1, "or"],
                        ["", "random", 50],
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "enter_camp":{
            "choices_detail":"คุณเลือกที่จะเดินเข้าไปในโบราณสถานที่ต่อหรือไม่? [ ตำแหน่งปัจจุบัน: แคมป์ของเหล่ากองโจร ]",
            "condition": [
            ],
            "results": [
                ["wolf_enable_to_attack", "=", 0],
            ],
            "choices": [
                {
                    "nickname":"accept_quest_missing",
                    "detail": "[ เปลี่ยนใจ แล้วกลับไปหาหัวหน้าโจรเพื่อบอกว่าจะตามหาคนที่หายไปให้ ]",
                    "paths":[ 
                        [ [], url_path("f516dfe6938b32c243241860589f9b57")],
                    ],
                    "condition": [
                        ["is_kill_all_thiefs", "=", 0, "and"],
                        ["first_time_camp", "=", 1, "and"],
                        ["find_missing_start", "=", 0, "and"],
                        ["find_missing_finish", "=", 0],
                    ],
                    "results": [
                        ["find_missing_start", "=", 1],
                        ["ชะแลง", "=", 1],
                    ]
                },
                {
                    "nickname": "go_next_secret",
                    "detail": "[ ใช้ทางลัดเพื่อไปยังห้องโถงที่เต็มไปด้วยชั้นหนังสือ ]",
                    "paths":[ 
                        [ [["first_time_library", "=", 0, "and"],
                            ["elf_joined_party", "=", 1],], url_path("11aab038572b47029067811edf87fb27")],

                        [ [["first_time_library", "=", 0]], url_path("08c58be1a3956c3a5cd74597c11a2aad")],

                        [ [["first_time_library", "=", 1, "and"],
                            ["is_corpse_clear", "=", 0],], url_path("e7d469bb44b5d54ca033b43d9d7dd7b4")],

                        [ [["first_time_library", "=", 1, "and"],
                            ["is_corpse_clear", "=", 1]], url_path("2bd20c7f1037d81a97a90bbae2c05fa6")],
                    ],
                    "condition": [
                        ["first_time_use_secret_way", "=", 1],
                    ],
                    "results": [
                        ["first_time_library", "=", 1],
                    ]
                },
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["first_time_goblin", "<=", 0]], url_path("e99e019a881fe7638c28abb0829930a9")],
                        [ [["first_time_goblin", ">", 0]], url_path("cd8ba1339a2c6d7bf83abd0c3a8d5130")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_goblin", "=", 1],
                    ]
                },
                {
                    "nickname": "go_back",
                    "detail": "[ เดินทางกลับไปยังปากทางเข้า ]",
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
        //===================================================================================
        "fight_thiefs":{
            "choices_detail":"เทิร์นหลบการโจมตีกองโจร",
            "condition": [
                ["how_good_can_fight", "!random", 35],
            ],
            "results": [
                ["HP", "-", 15],
            ],
            "choices": [
                {
                    "detail":"[ หลบ ]", 
                    "paths":[ 
                        [ [["thiefs_battle_rounds", "<=", 0]], "./index.html?select=results_fight_thiefs"],
                        [ [["thiefs_battle_rounds", ">", 0]], "./index.html?select=fight_thiefs"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["thiefs_battle_rounds", "-", 1],
                    ]
                },
            ],
        },
        "results_fight_thiefs":{
            "choices_detail":"ดูผลลัพธ์การต่อสู้กับกองโจร",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ดูผลลัพธ์ ]", 
                    "paths":[ 
                        [ [["HP", "<=", 0]], "./index.html?choices=results_fight_thiefs_died"],
                        [ [["HP", "<", 50]], "./index.html?choices=results_fight_thiefs_almost_died"],
                        [ [["HP", "<", 100]], "./index.html?choices=results_fight_thiefs_normal"],
                        [ [["HP", "=", 100]], "./index.html?choices=results_fight_thiefs_perfect"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["thiefs_battle_rounds", "=", 0]
                    ]
                },
            ],
        },
        "results_fight_thiefs_died":{
            "choices_detail":"คุณได้พยายามจะต่อกรกับพวกโจร แต่ความสามารถของคุณก็ไม่มากพอที่จะสู้กับศัตรูที่มีจำนวนเยอะกว่าได้"
            +" ศีรษะของคุณได้ถูกตัดออกจากบ่า แล้วร่างของคุณได้ก็ล้มนอนลง...กลายเป็นซากศพที่ถูกทิ้งไว้ภายในโบราณสถานแห่งนี้",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ เริ่มต้นใหม่ ]", 
                    "paths":[ 
                        [ [], "./new_game.html"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "results_fight_thiefs_almost_died":{
            "choices_detail":"คุณได้ต่อกรกับพวกกองโจร แล้วสังหารพวกมันทุกคนจนหมด แต่คุณก็อยู่ในสภาพที่ปางตาย"
            +" คุณฝืนประคองตนเองไม้ให้ล้มลงไปในนอนกับพื้น แล้วพยายามกลั้นความเจ็บปวดพวกนั้นเอาไว้"+
            " [ได้รับ Health Potion x3, ได้รับชะแลง x1]",
            "condition": [
                ["is_kill_all_thiefs", "=", 0],
            ],
            "results": [
                ["is_kill_all_thiefs", "=", 1],
                ["Health Potion", "+", 3],
                ["ชะแลง", "+", 1],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["first_time_goblin", "<=", 0]], url_path("e99e019a881fe7638c28abb0829930a9")],
                        [ [["first_time_goblin", ">", 0]], url_path("cd8ba1339a2c6d7bf83abd0c3a8d5130")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_goblin", "=", 1],
                    ]
                },
                {
                    "detail": "[ เดินทางกลับไปยังปากทางเข้า ]",
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
        "results_fight_thiefs_normal":{
            "choices_detail":"คุณได้ต่อกรกับพวกกองโจร แล้วสังหารพวกมันทุกคนจนหมด ถึงแม้ว่าจะถูกโจมตีเข้ามาอยู่บ้าง"
            +" แต่คุณก็ไม่ได้รู้สึกว่าบาดแผลที่ได้รับมานั้นจะเป็นปัญหาสักเท่าไหร่"+
            " [ได้รับ Health Potion x3, ได้รับชะแลง x1]",
            "condition": [
                ["is_kill_all_thiefs", "=", 0],
            ],
            "results": [
                ["is_kill_all_thiefs", "=", 1],
                ["Health Potion", "+", 3],
                ["ชะแลง", "+", 1],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["first_time_goblin", "<=", 0]], url_path("e99e019a881fe7638c28abb0829930a9")],
                        [ [["first_time_goblin", ">", 0]], url_path("cd8ba1339a2c6d7bf83abd0c3a8d5130")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_goblin", "=", 1],
                    ]
                },
                {
                    "detail": "[ เดินทางกลับไปยังปากทางเข้า ]",
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
        "results_fight_thiefs_perfect":{
            "choices_detail":"คุณได้ต่อกรกับพวกกองโจร แล้วสังหารพวกมันทุกคนจนหมดโดยไม่มีบาดแผลแม้แต่นิดเดียว"+
            " [ได้รับ Health Potion x3, ได้รับชะแลง x1]",
            "condition": [
                ["is_kill_all_thiefs", "=", 0],
            ],
            "results": [
                ["is_kill_all_thiefs", "=", 1],
                ["Health Potion", "+", 3],
                ["ชะแลง", "+", 1],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["first_time_goblin", "<=", 0]], url_path("e99e019a881fe7638c28abb0829930a9")],
                        [ [["first_time_goblin", ">", 0]], url_path("cd8ba1339a2c6d7bf83abd0c3a8d5130")],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["first_time_goblin", "=", 1],
                    ]
                },
                {
                    "detail": "[ เดินทางกลับไปยังปากทางเข้า ]",
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