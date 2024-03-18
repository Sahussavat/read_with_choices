choices_wolf_boss = {
    "choose_choices":{
        "meet_wolf":{
            "choices_detail":"คุณได้เผชิญหน้ากับหมาป่ายักษ์ คุณจะทำอย่างไร?",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "nickname":"fight",
                    "detail":"[ ตั้งท่าเตรียมต่อสู้ ]", 
                    "paths":[ 
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("aaeeb8cf12b4bf6a99355e107ed3444f")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("7fa16fb73405ffdf2f864674d8514c51")],
                        
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],], url_path("67d5eac6273d3f6732a213e8bd216985")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],], url_path("29a9d812da9f0fd95e95ee71c8c92e4a")],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
                {
                    "nickname":"hide",
                    "detail": "[ หลบซ่อน ]",
                    "paths":[ 
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 0, "and"],
                        ["เอฟเฟคปราศจากกลิ่นตัว", "=", "ยังคงอยู่"],], url_path("ce2a6c47cc9e96da7518e2fd02a3f1d0")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 0, "and"],
                        ["เอฟเฟคปราศจากกลิ่นตัว", "=", "ยังคงอยู่"],], url_path("398a406f373b3878a14896e9b53aead9")],
                        
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],
                        ["เอฟเฟคปราศจากกลิ่นตัว", "=", "ยังคงอยู่"],], url_path("c80726b8ae9aada625c85d7463dd5a51")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],
                        ["เอฟเฟคปราศจากกลิ่นตัว", "=", "ยังคงอยู่"],], url_path("26d8fec862ba7a4b34834b5be57da71d")],
                        
                        [ [["how_good_can_you_hide", "!random", 30]], "./index.html?select=results_hide_wolf"],

                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("c97d6b084b077e1c2a1911c32ed5fed5")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("6d1d13803ed7652250d22cbabcdcdf1e")],
                        
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],], url_path("e2976d9d9e82bfc9cf1d5caf8046912b")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],], url_path("31333acbccb86e4a8bbb1ab2b41275fd")],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ],
                    "results_w_condition":[
                        [[["เอฟเฟคปราศจากกลิ่นตัว", "=", "ยังคงอยู่"]], ["เอฟเฟคปราศจากกลิ่นตัว", "=", "ไม่มี"]]
                    ]
                },
            ],
        },
        "which_way_to_meet_wolf":{
            "choices_detail":"คุณได้เดินทางแล้วได้ยินเสียงบางอย่าง?",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ไปต่อ ]", 
                    "paths":[ 
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("b540dd3bf39c19e0a53cd2a210c7f830")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 0, "and"],
                        ["found_back_story", "=", 0, "and"]], url_path("2bba6435df8a1eee3009f35d7c9fe75b")],

                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 0, "and"],
                        ["found_back_story", "=", 1, "and"]], url_path("4d3a5294533f5cbfbcf506a5aab1bae9")],
                        
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],], url_path("4633a3aa25e0d7623d1d0477ae11e055")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],
                        ["found_back_story", "=", 0, "and"]], url_path("e4bcea8908f434000ad34a8c689839af")],

                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],
                        ["found_back_story", "=", 1, "and"]], url_path("8264659e4e51d55c91a9885392d12307")],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        //=============================================================================================
        "fight_wolf":{
            "choices_detail":"เทิร์นหลบการโจมตีหมาป่ายักษ์",
            "condition": [
                ["how_good_can_fight", "!random", 50],
            ],
            "results": [
                ["HP", "-", 10],
            ],
            "choices": [
                {
                    "detail":"[ หลบ ]", 
                    "paths":[ 
                        [ [["wolf_battle_rounds", "<=", 0]], "./index.html?select=results_fight_wolf"],
                        [ [["wolf_battle_rounds", ">", 0]], "./index.html?select=fight_wolf"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["wolf_battle_rounds", "-", 1],
                    ]
                },
            ],
        },
        "results_fight_wolf":{
            "choices_detail":"ดูผลลัพธ์การต่อสู้กับหมาป่ายักษ์",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "detail":"[ ดูผลลัพธ์ ]", 
                    "paths":[ 
                        [ [["HP", "<=", 0]], "./index.html?choices=results_fight_wolf_died"],
                        [ [["HP", "<", 50]], "./index.html?choices=results_fight_wolf_almost_died"],
                        [ [["HP", "<", 100]], "./index.html?choices=results_fight_wolf_normal"],
                        [ [["HP", "=", 100]], "./index.html?choices=results_fight_wolf_perfect"],
                    ],
                    "condition": [
                    ],
                    "results": [
                        ["wolf_battle_rounds", "=", 8]
                    ]
                },
            ],
        },
        "results_fight_wolf_died":{
            "choices_detail":"\\v[how_you_call_player]ได้พยายามจะต่อกรกับหมาป่ายักษ์ "
            +"แต่ความสามารถของคุณก็ไม่มากพอที่จะสู้กับศัตรูที่แข็งแกร่งขนาดนั้นได้"
            +" ร่างของคุณได้ถูกเจ้าหมาป่ายักษ์ฉีกกระชากหน้าท้อง แล้วถูกมันกินอวัยวะภายในทั้งเป็น ",
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
        "results_fight_wolf_almost_died":{
            "choices_detail":"\\v[how_you_call_player]ได้ต่อกรกับหมาป่ายักษ์ แล้วไล่มันไปได้ แต่คุณก็อยู่ในสภาพที่ปางตาย"
            +" คุณฝืนประคองตนเองไม้ให้ล้มลงไปในนอนกับพื้น แล้วพยายามกลั้นความเจ็บปวดพวกนั้นเอาไว้  [ได้รับเศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ x1]",
            "condition": [
            ],
            "results": [
                ["is_kill_all_wolf", "=", 1],
                ["เศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ", "+", 1],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["", "_check_hav_prev", 0]], go_to_prev_choice],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "results_fight_wolf_normal":{
            "choices_detail":"\\v[how_you_call_player]ได้ต่อกรกับหมาป่ายักษ์ แล้วไล่มันไปได้ ถึงแม้ว่าจะถูกโจมตีเข้ามาอยู่บ้าง"
            +" แต่คุณก็ไม่ได้รู้สึกว่าบาดแผลที่ได้รับมานั้นจะเป็นปัญหาสักเท่าไหร่  [ได้รับเศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ x1]",
            "condition": [
            ],
            "results": [
                ["is_kill_all_wolf", "=", 1],
                ["เศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ", "+", 1],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["", "_check_hav_prev", 0]], go_to_prev_choice],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "results_fight_wolf_perfect":{
            "choices_detail":"\\v[how_you_call_player]ได้ต่อกรกับหมาป่ายักษ์ แล้วไล่มันไปได้โดยไม่มีบาดแผลแม้แต่นิดเดียว"
            +" [ได้รับเศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ x1]",
            "condition": [
            ],
            "results": [
                ["is_kill_all_wolf", "=", 1],
                ["เศษชิ้นส่วนหนังหมาป่ากลายพันธ์ุ", "+", 1],
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["", "_check_hav_prev", 0]], go_to_prev_choice],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        //======================================================================================================
        "results_hide_wolf":{
            "choices_detail":"ดูผลลัพธ์การหลบซ่อนจากหมาป่ายักษ์",
            "condition": [
            ],
            "results": [
                ["HP", "-", 30],
            ],
            "choices": [
                {
                    "detail":"[ ดูผลลัพธ์ ]", 
                    "paths":[ 
                        [ [["HP", "<=", 0]], "./index.html?choices=hide_wolf_failed_died"],
                        
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("ffe6fb93ab55667eef4839780405479e")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 0, "and"],], url_path("b43edb9be8e1e87ca1cea07dd537275d")],
                        
                        [ [["elf_joined_party", "=", 0, "and"],
                        ["thief_joined_party", "=", 1, "and"],], url_path("bd0e7e73814a59a72f888f499800fb4f")],
                        
                        [ [["elf_joined_party", "=", 1, "and"],
                        ["thief_joined_party", "=", 1, "and"],], url_path("2d88606ea19449eb4b9f912501af0177")],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "hide_wolf_fail":{
            "choices_detail":"คุณได้ถูกเจ้าหมาป่ายักษ์พบเจอตัวแล้ว คุณจะทำอย่างไร?",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "nickname":"fight",
                    "detail":"[ สู้ ]", 
                    "paths":[ 
                        [ [], "./index.html?select=fight_wolf"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
                {
                    "nickname":"run",
                    "detail": "[ หนี ]",
                    "paths":[ 
                        [ [["", "!random", 50]], "./index.html?choices=results_escape_wolf"],
                        [ [], "./index.html?select=escape_wolf_success"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "hide_wolf_failed_died":{
            "choices_detail":"\\v[how_you_call_player]ตัดสินใจที่เข้าไปหลบในที่ซ่อน เสียงลมหายใจนั้นใกล้เข้ามาเรื่อยๆ จนแนบชิด คุณรับรู้ได้ว่ามันยืนอยู่หลังที่ซ่อน "
            +"กำลังดมกลิ่นหาอะไรบางอย่าง ทันใดนั้น ลำตัวของเจ้านั่นก็ยื่นโผล่เข้ามาให้คุณเห็น มันคือร่างของหมาป่ายักษ์ที่ติดเชื้อราไปทั่วทั้งตัว "
            +"มันตะปบเข้าใส่คุณอย่างเข้าจัง คุณล้มลงนอนลงกับพื้นก่อนจสิ้นใจตายเพราะทนพิษบาดแผลไม่ไหว",
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
        "hide_wolf_success":{
            "choices_detail":"\\v[how_you_call_player]ได้ซ่อนตัวจากเจ้าหมาป่ายักษ์สำเร็จ",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["", "_check_hav_prev", 0]], go_to_prev_choice],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        //========================================================================================================
        "results_escape_wolf":{
            "choices_detail":"ดูผลลัพธ์การวิ่งหนีจากหมาป่ายักษ์",
            "condition": [
            ],
            "results": [
                ["HP", "-", 30],
            ],
            "choices": [
                {
                    "detail":"[ ดูผลลัพธ์ ]", 
                    "paths":[ 
                        [ [["HP", "<=", 0]], "./index.html?choices=escape_wolf_failed_died"],
                        [ [["HP", ">", 0]], "./index.html?choices=escape_wolf_fail"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "escape_wolf_fail":{
            "choices_detail":"\\v[how_you_call_player]พยายามจะวิ่งหนีจากเจ้าสัตว์ร้าย แต่มันก็วิ่งตามคุณได้ทันแล้วตะปบเข้าที่กลางหลังคุณ",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "nickname":"fight",
                    "detail":"[ สู้ ]", 
                    "paths":[ 
                        [ [], "./index.html?select=fight_wolf"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
                {
                    "nickname":"run",
                    "detail": "[ หนีต่อ ]",
                    "paths":[ 
                        [ [["", "!random", 50]], "./index.html?choices=results_escape_wolf"],
                        [ [], "./index.html?select=escape_wolf_success"],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
        "escape_wolf_failed_died":{
            "choices_detail":"\\v[how_you_call_player]ได้พยายามจะหนีเจ้าหมาป่ายักษ์ "
            +"แต่ก็วิ่งหนีมันไม่ทัน คุณถูกมันกัดเข้าที่หัวแล้วดึงกระชากออกจากบ่า",
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
        "escape_wolf_success":{
            "choices_detail":"\\v[how_you_call_player]ได้วิ่งหนีเจ้าหมาป่ายักษ์อย่างสุดกำลังอยู่นาน"
            +" จนพอรู้ตัวอีกที คุณก็พบว่ามันไม่ได้ตามมาแล้ว",
            "condition": [
            ],
            "results": [
            ],
            "choices": [
                {
                    "nickname": "go_next",
                    "detail": "[ ไปต่อ ]",
                    "paths":[ 
                        [ [["", "_check_hav_prev", 0]], go_to_prev_choice],
                    ],
                    "condition": [
                    ],
                    "results": [
                    ]
                },
            ],
        },
    }
}